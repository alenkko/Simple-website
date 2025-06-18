var express = require('express');
var router = express.Router();
const data = require('../data/mydata.js');

function pronadiProizvod(id) {              //funkcija kojom u mydata.js pronađem proizvod po id-u kojeg sam napisao za svaki proizvod
  for (const kategorija of data.categories) {
    for (const proizvod of kategorija.products) {
        if (proizvod.id == id) return proizvod;
    }
  }
  return null;
}

router.get('/', function(req, res) {                //reneriranje stranice košarice
    res.render('cart');
});

router.post('/add/:id', function(req, res) {            //stavljanje proizvoda u košaricu
    const id = req.params.id;
    const proizvod = pronadiProizvod(id);           //prvo prema id-u dobijem proizvod iz mydata.js
    if (!req.session.cart) req.session.cart = [];       //ako košarica ne postoji na serveru kreiram ju

    if (!proizvod) {                                //ako proizvod s tim id-em ne postoji vraćam error
        return res.status(404).json({ error: 'Proizvod nije pronađen.' });
    }

    let proizvodUKosarici = null;                   //provjeravam postoji li već proizvod u košarici s tim id-em, ako da samo povećam quantity
    for (const proizvodUK of req.session.cart) {
        if (proizvodUK.id == id) {
            proizvodUKosarici = proizvodUK;
            break;
        }
    }
    if (proizvodUKosarici) proizvodUKosarici.quantity++;
    else {                                  //ako proizvod ne postoji onda ga dodaj s količinom 1
        req.session.cart.push({
            id: proizvod.id,
            name: proizvod.name,
            quantity: 1
        });
    }

    res.status(200).end();
});

router.delete('/remove/:id', (req, res) => {              //uklanjanje proizvoda iz košarice
    const id = req.params.id;
    const proizvod = pronadiProizvod(id);
    if (!req.session.cart || req.session.cart.length === 0) return res.status(404).json({ error: 'Nema ničega u košarici za uklanjanje.' });     //ako košarica ne postoji ili je prazna nema ničega za ukloniti 

    if (!proizvod) {            //ako ne postoji taj proizvod
        return res.status(404).json({ error: 'Proizvod nije pronađen.' });
    }

    let proizvodUKosarici = null;               //pronalaženje proizvoda u košarici
    for (const proizvodUK of req.session.cart) {
        if (proizvodUK.id == id) {
            proizvodUKosarici = proizvodUK;
            break;
        }
    }
    if (proizvodUKosarici) {        //ako je proizvod pronađen u košarici smanji mu količinu ili ga ukloni ako mu je količina 1
        if (proizvodUKosarici.quantity > 1) {
            proizvodUKosarici.quantity--;
        } else {
            const index = req.session.cart.findIndex(p => p.id === id);
            if (index !== -1) {
                req.session.cart.splice(index, 1);
            }
        }
    }
    else res.status(404).json({error: 'Proizvoda nema u košarici pa se ne može smanjiti količina.'});

    res.status(200).end();
});

router.delete('/clearAll', (req, res) => {          //napravljeno zbog tipke isprazni koja briše cijelu košaricu
    req.session.cart = [];
    res.status(200).end();
});

router.get('/getAll', (req, res) => {           //dohvaćanje košarice
  res.json(req.session.cart || []);
});


module.exports = router;
