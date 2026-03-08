import json

data = json.load(open("scripts/pdf_info.json"))

restaurants_info = {
    "DS Fine Dining _ Amber HK.pdf": ("Amber", "Hong Kong", "China", "French", 22.2818, 114.1573, "2023-06-09", "amber-hk"),
    "DS Fine Dining _ Pasta _ Bar.pdf": ("Pasta Bar", "Encino", "USA", "Italian", 34.1557, -118.4900, "2025-12-12", "pasta-bar-encino"),
    "DS Fine Dining _ Lung King Heen.pdf": ("Lung King Heen", "Hong Kong", "China", "Cantonese", 22.2866, 114.1566, "2023-06-07", "lung-king-heen-hk"),
    "DS Fine Dining _ Atomix.pdf": ("Atomix", "New York", "USA", "Korean", 40.7424, -73.9822, "2022-08-07", "atomix-nyc"),
    "DS Fine Dining _ Rosetta.pdf": ("Rosetta", "Mexico City", "Mexico", "Modern Mexican", 19.4196, -99.1578, "2024-09-06", "rosetta-mexico-city"),
    "DS Fine Dining _ Rosetta copy.pdf": ("Rosetta", "Mexico City", "Mexico", "Modern Mexican", 19.4196, -99.1578, "2024-09-06", "rosetta-mexico-city"),
    "DS Fine Dining _ Manzke.pdf": ("Manzke", "Los Angeles", "USA", "Californian French", 34.0538, -118.3813, "2023-11-02", "manzke-la"),
    "DS Fine Dining _ L_Atelier JR HK.pdf": ("L'Atelier de Joël Robuchon", "Hong Kong", "China", "French", 22.2818, 114.1573, "2023-06-07", "latelier-jr-hk"),
    "DS Fine Dining _ Taian Table.pdf": ("Taian Table", "Shanghai", "China", "Innovative", 31.2185, 121.4320, "2020-08-26", "taian-table-shanghai"),
    "DS Fine Dining _ Em.pdf": ("Em", "Mexico City", "Mexico", "Contemporary", 19.4181, -99.1627, "2024-09-05", "em-mexico-city"),
    "DS Fine Dining _ The Modern II.pdf": ("The Modern", "New York", "USA", "Contemporary", 40.7615, -73.9776, "2022-05-26", "the-modern-nyc"),
    "DS Fine Dining _ Gary Danko.pdf": ("Gary Danko", "San Francisco", "USA", "American", 37.8058, -122.4206, "2024-05-27", "gary-danko-sf"),
    "DS Fine Dining _ Gucci Osteria.pdf": ("Gucci Osteria", "Beverly Hills", "USA", "Italian", 34.0689, -118.4011, "2023-02-05", "gucci-osteria-bh"),
    "DS Fine Dining _ Aska.pdf": ("Aska", "New York", "USA", "Scandinavian", 40.7126, -73.9663, "2019-09-06", "aska-nyc"),
    "DS Fine Dining _ Birdsong.pdf": ("Birdsong", "San Francisco", "USA", "American", 37.7797, -122.4087, "2024-05-28", "birdsong-sf"),
    "DS Fine Dining _ Arbor HK.pdf": ("Arbor", "Hong Kong", "China", "Innovative", 22.2831, 114.1557, "2023-06-10", "arbor-hk"),
    "DS Fine Dining _ Mizumi.pdf": ("Mizumi", "Las Vegas", "USA", "Japanese", 36.1265, -115.1654, "2021-05-22", "mizumi-vegas"),
    "DS Fine Dining _ Lameloise SH.pdf": ("Maison Lameloise", "Shanghai", "China", "French", 31.2354, 121.4988, "2020-08-25", "lameloise-sh"),
    "DS Fine Dining _ Providence.pdf": ("Providence", "Los Angeles", "USA", "Seafood", 34.0835, -118.3308, "2023-01-20", "providence-la"),
    "DS Fine Dining _ Oriole.pdf": ("Oriole", "Chicago", "USA", "Contemporary", 41.8845, -87.6447, "2023-02-22", "oriole-chicago"),
    "DS Fine Dining _ ADAM.pdf": ("Alain Ducasse at Morpheus", "Macau", "China", "French", 22.1481, 113.5656, "2021-05-20", "adam-macau"),
    "DS Fine Dining _ Pujol.pdf": ("Pujol", "Mexico City", "Mexico", "Mexican", 19.4300, -99.1932, "2024-09-05", "pujol-mexico-city"),
    "DS Fine Dining _ Addison.pdf": ("Addison", "San Diego", "USA", "Contemporary", 32.9376, -117.1953, "2024-01-17", "addison-sd"),
    "DS Fine Dining _ Daniel.pdf": ("Daniel", "New York", "USA", "French", 40.7668, -73.9675, "2019-12-14", "daniel-nyc"),
    "DS Fine Dining _ Orsa&Winston.pdf": ("Orsa & Winston", "Los Angeles", "USA", "Japanese-Italian", 34.0485, -118.2483, "2023-09-27", "orsa-winston-la"),
    "DS Fine Dining _ Taian Table II.pdf": ("Taian Table", "Shanghai", "China", "Innovative", 31.2185, 121.4320, "2021-04-29", "taian-table-shanghai"),
    "DS Fine Dining _ Kajitsu.pdf": ("Kajitsu", "New York", "USA", "Shojin Ryori", 40.7508, -73.9788, "2021-11-16", "kajitsu-nyc"),
    "DS Fine Dining _ Contra.pdf": ("Contra", "New York", "USA", "Contemporary", 40.7202, -73.9878, "2022-05-20", "contra-nyc"),
    "DS Fine Dining _ L_Atelier JR Miami.pdf": ("L'Atelier de Joël Robuchon", "Miami", "USA", "French", 25.8136, -80.1923, "2023-03-04", "latelier-jr-miami"),
    "DS Fine Dining _ CTBF II.pdf": ("Chef's Table at Brooklyn Fare", "New York", "USA", "French-Japanese", 40.7547, -73.9961, "2022-05-27", "ctbf-nyc"),
    "DS Fine Dining _ Sushi Nakazawa.pdf": ("Sushi Nakazawa", "New York", "USA", "Sushi", 40.7317, -74.0045, "2021-11-16", "nakazawa-nyc"),
    "DS Fine Dining _ RAD.pdf": ("Robuchon au Dôme", "Macau", "China", "French", 22.1899, 113.5435, "2021-05-21", "rad-macau"),
    "DS Fine Dining _ benu.pdf": ("Benu", "San Francisco", "USA", "Contemporary", 37.7854, -122.3992, "2025-05-28", "benu-sf"),
    "DS Fine Dining _ DV SH.pdf": ("Da Vittorio", "Shanghai", "China", "Italian", 31.2338, 121.4925, "2021-06-03", "davittorio-shanghai"),
    "DS Fine Dining _ Nozawa Bar.pdf": ("Nozawa Bar", "Beverly Hills", "USA", "Sushi", 34.0673, -118.4005, "2023-12-19", "nozawa-bar-la"),
    "DS Fine Dining _ L_Abeille.pdf": ("L'Abeille", "New York", "USA", "French", 40.7196, -74.0094, "2023-01-11", "labeille-nyc"),
    "DS Fine Dining _ 8 1_2 HK.pdf": ("8 1/2 Otto e Mezzo BOMBANA", "Hong Kong", "China", "Italian", 22.2811, 114.1582, "2023-06-09", "otto-e-mezzo-hk"),
    "DS Fine Dining _ Ginza Onodera LA.pdf": ("Sushi Ginza Onodera", "Los Angeles", "USA", "Sushi", 34.0784, -118.3845, "2023-12-29", "onodera-la"),
    "DS Fine Dining _ Tsukimi.pdf": ("Tsukimi", "New York", "USA", "Kaiseki", 40.7291, -73.9856, "2021-12-09", "tsukimi-nyc"),
    "DS Fine Dining _ Maude.pdf": ("Maude", "Beverly Hills", "USA", "Contemporary", 34.0660, -118.4003, "2023-12-21", "maude-bh"),
    "DS Fine Dining _ Ever.pdf": ("Ever", "Chicago", "USA", "Contemporary", 41.8885, -87.6534, "2023-02-25", "ever-chicago"),
    "DS Fine Dining _ Odo.pdf": ("Odo", "New York", "USA", "Kaiseki", 40.7394, -73.9912, "2021-12-09", "odo-nyc"),
    "DS Fine Dining _ CTBF III.pdf": ("Chef's Table at Brooklyn Fare", "New York", "USA", "French-Japanese", 40.7547, -73.9961, "2023-01-10", "ctbf-nyc"),
    "DS Fine Dining _ Meteora.pdf": ("Meteora", "Los Angeles", "USA", "Immersive", 34.0841, -118.3268, "2025-05-22", "meteora-la"),
    "DS Fine Dining _ Jua.pdf": ("Jua", "New York", "USA", "Korean", 40.7408, -73.9877, "2021-11-17", "jua-nyc"),
    "DS Fine Dining _ Caprice HK.pdf": ("Caprice", "Hong Kong", "China", "French", 22.2866, 114.1566, "2023-06-08", "caprice-hk")
}

with open("scripts/data_output.json", "w") as f:
    json.dump(restaurants_info, f, indent=2)

