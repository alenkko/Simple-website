fetch("/home/getCategories")        //pri učitavanju stranice zovem getCategories da dobijem kategorije za postavljanje li elemenata liste u sidebaru
.then(res => res.json())
.then(kategorije => {
    const ul = document.getElementById("kategorije");
    kategorije.forEach((kategorija, index) => {
    const li = document.createElement("li");
    li.textContent = kategorija.name;
    li.id = kategorija.id;
    ul.appendChild(li);
    li.addEventListener("click", () => generirajSlike(li, index));      //na svaki element stavim da se na klik pozove glavna funkcija
    });

    const prviLi = ul.getElementsByTagName("li")[0];        //na početku ručno pozovem prvu kategoriju
    if (prviLi) {
        generirajSlike(prviLi);
    }
});


function generirajSlike(kategorija) {       
    const prostor = document.getElementById("slike");
    const trenutnoaktivni = document.getElementById("trenakt");
    prostor.innerHTML = "";
    trenutnoaktivni.innerHTML = "";
    Promise.all([
        fetch(`/home/getProducts/${kategorija.id}`).then(res => res.json()),
        fetch("/cart/getAll").then(res => res.json())
    ]).then(([proizvodi, kosaricaSes]) => {
        proizvodi.forEach(element => {                  //ovaj dio koda je više manje isti kao iz prvog labosa jer se samo generiraju slike na stranici
            const slika = document.createElement("img");
            const okvirslike = document.createElement("div");
            slika.src = element.image;

            const naziv = document.createElement("span");
            naziv.textContent = element.name;
            naziv.classList.add("naziv");

            const kosarica = document.createElement("div");
            const slikakosarice = document.createElement("img");
            slikakosarice.src = "images/cart.png";

            const kolicinaNaSlici = document.createElement("span");
            kolicinaNaSlici.id = "prikazKolicine";

            const proizvodUK = kosaricaSes.find(item => item.name === element.name);
            if (proizvodUK) {
                kolicinaNaSlici.textContent = `${proizvodUK.quantity}`;
                okvirslike.append(kolicinaNaSlici);
            }           

            kosarica.append(slikakosarice);
            okvirslike.append(kosarica);

            okvirslike.append(slika);
            okvirslike.append(naziv);
            prostor.append(okvirslike);

            kosarica.addEventListener("click", async function () {      //na svaki klik košarice na proizvodu prvo moram dodati proizvod u košaricu, a onda promijeniti broj jer može doći do greške
                fetch(`/cart/add/${element.id}`, { method: "POST" })
                    .then(response => {
                        if (response.ok) {
                            kolicinaNaSlici.textContent = parseInt(kolicinaNaSlici.textContent || "0") + 1;
                            okvirslike.append(kolicinaNaSlici);
                            azurirajBrojUKosarici();
                        } else {
                            console.error("Greška pri dodavanju u košaricu");
                        }
                    });
            });
        });
    trenutnoaktivni.innerHTML = kategorija.textContent;     //služi samo za prikaz aktivne kategorije i vraćanje boje na neaktivne kategorije
    kategorija.classList.add("aktivna");
    let kategorijeElementi = document.getElementById("kategorije").getElementsByTagName("li");
    for (let j = 0; j < kategorijeElementi.length; j++) {
        if (kategorijeElementi[j].id !== kategorija.id) {
            kategorijeElementi[j].classList.remove("aktivna");
        }
    }
    });
}

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

document.addEventListener("visibilitychange", () => {       //postavio sam visibilitychange kako bih mogao korektno ažurirati podatke pri povratku na stranicu
    if (document.visibilityState === "visible") {
        const trenutnoaktivni = document.getElementById("trenakt");         //provjeravam koji mi je trenutno aktivni i samo za njega "refresham" prikaz slika
        const aktivnaKategorija = trenutnoaktivni.innerHTML;
        const kategorijeElementi = document.getElementById("kategorije").getElementsByTagName("li");

        for (let i = 0; i < kategorijeElementi.length; i++) {
            if (kategorijeElementi[i].textContent === aktivnaKategorija) {
                generirajSlike(kategorijeElementi[i]);
                break;
            }
        }

        azurirajBrojUKosarici();       //također ažuriram i broj na košarici
    }
});