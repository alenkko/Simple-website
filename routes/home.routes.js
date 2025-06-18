var express = require('express');
var router = express.Router();
const data = require('../data/mydata.js');

router.get('/home', function(req, res) {        //učitavanje početne stranice
    res.render('home'); 
});

router.get('/', (req, res) => {     //redirect na /home ako se upiše samo /
    res.redirect('/home');
});

router.get('/home/getCategories', function(req, res) {      //dohvaćanje kategorija iz mydata.js
    const categories = data.categories;
    res.json(categories);
});

router.get('/home/getProducts/:id', function(req, res) {        //dohvaćanje proizvoda određene kategorije, radi ovako jer sam u mydata.js upisao id-jeve tako da se poklapaju s pozicijom u polju
    const category = data.categories[parseInt(req.params.id)];

    if (!category) {        //provjera ako kategorija s tim id-jem ne postoji
        return res.status(404).json({error: 'Kategorija nije pronađena.'});
    }

    res.json(category.products);   
});

module.exports = router;
