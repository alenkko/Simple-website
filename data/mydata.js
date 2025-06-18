const data = {
    "website": "Namještaj",
    "categories": [
        { 
            "name" : "Sjedeći namještaj",
            "id" : "0",
            "products" : [
                { 
                    "name" : "Barska stolica", "image" : "/images/sjedeci/barskastolica.jpg", "id" : "10"
                },
                { 
                    "name" : "Drvena stolica", "image" : "/images/sjedeci/drvenastolica.jpg", "id" : "11"
                },
                { 
                    "name" : "Sofa", "image" : "/images/sjedeci/sofa.jpg", "id" : "12"
                },                   
                { 
                    "name" : "Fotelja", "image" : "/images/sjedeci/fotelja.jpg", "id" : "13"
                },             
                { 
                    "name" : "Tabure", "image" : "/images/sjedeci/tabure.jpg", "id" : "14"
                }
            ]
        },
        { 
            "name" : "Kupaonica",
            "id" : "1",
            "products" : [
                { 
                    "name" : "Kada", "image" : "/images/kupaonski/kada.jpg", "id" : "15"
                },
                { 
                    "name" : "Kupaonski ormarić", "image" : "/images/kupaonski/kupaonskiormaric.jpg", "id" : "16"
                },
                { 
                    "name" : "Retro kada", "image" : "/images/kupaonski/retrokada.jpg", "id" : "17",
                },                 
                { 
                    "name" : "Kupaonsko ogledalo", "image" : "/images/kupaonski/kupaonskoogledalo.jpg", "id" : "18"
                },               
                { 
                    "name" : "Umivaonik s ormarićem", "image" : "/images/kupaonski/umivaonikskabinetom.jpg", "id" : "19"
                }
            ]
        },
        { 
            "name" : "Skladišni namještaj",
            "id" : "2",
            "products" : [
                { 
                    "name" : "Moderna komoda", "image" : "/images/skladisni/modernakomoda.jpg", "id" : "20"
                },
                { 
                    "name" : "Ormar", "image" : "/images/skladisni/ormar.jpg", "id" : "21"
                },                
                { 
                    "name" : "Polica za knjige", "image" : "/images/skladisni/policazaknjige.jpg", "id" : "22"
                },
                { 
                    "name" : "Zelena komoda", "image" : "/images/skladisni/zelenakomoda.jpg", "id" : "23"
                },                
                { 
                    "name" : "Zidni ormarić", "image" : "/images/skladisni/zidniormaric.jpg", "id" : "24"
                }
            ]
        },
        { 
            "name" : "Spavaća soba",
            "id" : "3",
            "products" : [
                { 
                    "name" : "Krevet", "image" : "/images/spavaci/krevet.jpg", "id" : "25"
                },
                { 
                    "name" : "Madrac", "image" : "/images/spavaci/madrac.jpg", "id" : "26"
                },                
                { 
                    "name" : "Noćni ormarić", "image" : "/images/spavaci/nocniormaric.jpg", "id" : "27"
                },
                { 
                    "name" : "Ogledalo", "image" : "/images/spavaci/ogledalo.jpg", "id" : "28"
                },                
                { 
                    "name" : "Sobna lampa", "image" : "/images/spavaci/sobnalampa.jpg", "id" : "29"
                }
            ]
        },
        { 
            "name" : "Stolovi",
            "id" : "4",
            "products" : [
                { 
                    "name" : "Jednostavni stol", "image" : "/images/stolovi/jednostavnistol.jpg", "id" : "30"
                },
                { 
                    "name" : "Moderni stol", "image" : "/images/stolovi/modernistol.jpg", "id" : "31"
                },                
                { 
                    "name" : "Okrugli stol", "image" : "/images/stolovi/okruglistol.jpg", "id" : "32"
                },
                { 
                    "name" : "Ovalni stol", "image" : "/images/stolovi/ovalnistol.jpg", "id" : "33"
                },                
                { 
                    "name" : "Stol za kavu", "image" : "/images/stolovi/stolzakavu.jpg", "id" : "34"
                }
            ]
        },
        { 
            "name" : "Dekoracije",
            "id" : "5",
            "products" : [
                { 
                    "name" : "Okvir za slike", "image" : "/images/dekorativni/okvirzaslike.jpg", "id" : "35"
                },
                { 
                    "name" : "Svijeća", "image" : "/images/dekorativni/svijeca.jpg", "id" : "36"
                },                
                { 
                    "name" : "Ukrasni jastuk", "image" : "/images/dekorativni/ukrasnijastuk.jpg", "id" : "37"
                },
                { 
                    "name" : "Umjetna biljka", "image" : "/images/dekorativni/umjetnabiljka.jpg", "id" : "38"
                },                
                { 
                    "name" : "Vaza", "image" : "/images/dekorativni/vaza.jpg", "id" : "39"
                }
            ]
        },
        { 
            "name" : "Dječja soba",
            "id" : "6",
            "products" : [
                { 
                    "name" : "Dječji krevet", "image" : "/images/djecji/djecjikrevet.jpg", "id" : "40"
                },
                { 
                    "name" : "Dječji krevet 2", "image" : "/images/djecji/djecjikrevet2.jpg", "id" : "41"
                },
                { 
                    "name" : "Krevet na kat", "image" : "/images/djecji/krevetnakat.jpg", "id" : "42"
                },                  
                { 
                    "name" : "Dječji ormar", "image" : "/images/djecji/djecjiormar.jpg", "id" : "43"
                },              
                { 
                    "name" : "Razne igračke", "image" : "/images/djecji/razneigracke.jpg", "id" : "44"
                }
            ]
        },
        { 
            "name" : "Kuhinja",
            "id" : "7",
            "products" : [
                { 
                    "name" : "Kuhinja", "image" : "/images/kuhinjski/kuhinja1.jpg", "id" : "45"
                },
                { 
                    "name" : "Kuhinja 2", "image" : "/images/kuhinjski/kuhinja2.jpg", "id" : "46"
                },                
                { 
                    "name" : "Kuhinjske police", "image" : "/images/kuhinjski/kuhinjskepolice.jpg", "id" : "47"
                },
                { 
                    "name" : "Kuhinjski otok", "image" : "/images/kuhinjski/kuhinjskiotok.jpg", "id" : "48"
                },                
                { 
                    "name" : "Sudoper", "image" : "/images/kuhinjski/sudoper.jpg", "id" : "49"
                }
            ]
        },
        { 
            "name" : "Uredski namještaj",
            "id" : "8",
            "products" : [
                { 
                    "name" : "Ergonomska stolica", "image" : "/images/uredski/ergonomskastolica.jpg", "id" : "50"
                },
                { 
                    "name" : "Podesivi stol", "image" : "/images/uredski/podesivistol.jpg", "id" : "51"
                },                
                { 
                    "name" : "Stolna lampa", "image" : "/images/uredski/stolnalampa.jpg", "id" : "52"
                },
                { 
                    "name" : "Uredska stolica", "image" : "/images/uredski/uredskastolica.jpg", "id" : "53"
                },                
                { 
                    "name" : "Uredski stol", "image" : "/images/uredski/uredskistol.jpg", "id" : "54"
                }
            ]
        },
        { 
            "name" : "Vanjski namještaj",
            "id" : "9",
            "products" : [
                { 
                    "name" : "Ležaljka", "image" : "/images/vanjski/lezaljka.jpg", "id" : "55"
                },
                { 
                    "name" : "Nadstrešnica", "image" : "/images/vanjski/nadstresnica.jpg", "id" : "56"
                },                
                { 
                    "name" : "Vanjski set", "image" : "/images/vanjski/vanjskiset.jpg", "id" : "57"
                },
                { 
                    "name" : "Vrtna ljuljačka", "image" : "/images/vanjski/vrtnaljuljacka.jpg", "id" : "58"
                },                
                { 
                    "name" : "Vrtna rasvjeta", "image" : "/images/vanjski/vrtnarasvjeta.jpg", "id" : "59"
                }
            ]
        }
    ]
}

module.exports = data;