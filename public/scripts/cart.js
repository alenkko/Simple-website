document.addEventListener("DOMContentLoaded", function () {
    const trenutnoaktivni = document.getElementById("trenakt");     //u headeru upišem Košarica kada uđem u nju
    const jeNaKosarici = document.getElementById("kosarica");

    if (trenutnoaktivni && jeNaKosarici) {
        trenutnoaktivni.innerHTML = "Košarica";
    }
    fetch("/cart/getAll")               //zovem getAll koji će mi vratiti sadržaj košarice za prikaz
        .then(res => res.json())
        .then(cart => {
            const cartContainer = document.getElementById("kosarica");
            azurirajBrojUKosarici();
            if (cart.length > 0) {
                const isprazni = document.createElement("button");      //dodajem tipku isprazni koja zove clearAll koji briše sve iz košarice
                isprazni.textContent = "Isprazni košaricu";
                isprazni.addEventListener("click", () => {
                    fetch(`/cart/clearAll`, { method: "DELETE" });
                    cartContainer.innerHTML = "Košarica je prazna.";
                    azurirajBrojUKosarici();
                })
                if(cartContainer) {                           //dio koda iz prvog labosa koji dodaje proizvode s tipkama + i -
                    cartContainer.append(isprazni);
                }
                cart.forEach(item => {
                    const itemDiv = document.createElement("div");
                    itemDiv.innerHTML = `
                    <div class="proizvod">
                        <div class="nazivPr">${item.name}</div>
                        <div>
                            <button class="smanji">−</button>
                            <span class="kolicina">${item.quantity}</span>
                            <button class="povecaj">+</button>
                        </div>
                    </div>
                    `;
                    if (cartContainer) {
                        cartContainer.appendChild(itemDiv);
                    }
                    const tipkaPovecaj = itemDiv.querySelector(".povecaj");
                    const tipkaSmanji = itemDiv.querySelector(".smanji");
                    const kolicina = itemDiv.querySelector(".kolicina");
                    tipkaPovecaj.addEventListener("click", () => {          //na klik tipke + zovem add koji povećava količinu na serveru i ažurira brojeve
                        fetch(`/cart/add/${item.id}`, { method: "POST" })
                            .then(() => {
                                item.quantity++;
                                kolicina.textContent = item.quantity;
                                azurirajBrojUKosarici();
                            });
                    });

                    tipkaSmanji.addEventListener("click", () => {       //na klik - smanjujem količinu na serveru i mijenjam brojeve
                        fetch(`/cart/remove/${item.id}`, { method: "DELETE" })
                            .then(() => {
                                item.quantity--;
                                if (item.quantity > 0) {
                                    kolicina.textContent = item.quantity;
                                } else {
                                    const index = cart.indexOf(item);
                                    if (index > -1) {
                                        cart.splice(index, 1);
                                        itemDiv.remove();
                                        if (cart.length === 0) {
                                            cartContainer.innerHTML = "Košarica je prazna.";
                                        }
                                    }
                                }
                                azurirajBrojUKosarici();
                            });
                    });
                });
            } else {
                if (cartContainer) {            //ako nema proizvoda u košarici
                    cartContainer.innerHTML = "Košarica je prazna.";
                    azurirajBrojUKosarici();
                }   
            } 
        });
});

function azurirajBrojUKosarici() {      //funkcija za ažuriranje broja koja dohvaća košaricu sa servera i mijenja broj na slici košarice
    fetch("/cart/getAll")
      .then(res => res.json())
      .then(kosarica => {
          let rez = 0;
          kosarica.forEach(item => rez += item.quantity);
          const prikaz = document.getElementById("brojProizvoda");
          if (prikaz && rez != 0) {
              prikaz.textContent = rez;
          }
          else if (rez == 0) prikaz.textContent = "";
      });
}
