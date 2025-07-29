const sampleListings = [
  {
    "title": "Urban Studio Apartment",
    "description": "Modern studio in the city center with smart home features",
    "image": {
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "filename": "room1.jpg"
    },
    "price": 120,
    "location": "Chicago",
    "country": "USA",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [-87.6298, 41.8781]
    }
  },
  {
    "title": "Historic Parisian Room",
    "description": "Charming Haussmann-style room with balcony",
    "image": {
      "url": "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      "filename": "room2.jpg"
    },
    "price": 135,
    "location": "Paris",
    "country": "France",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [2.3522, 48.8566]
    }
  },
  {
    "title": "Tokyo Capsule Hotel",
    "description": "High-tech pod with premium amenities",
    "image": {
      "url": "https://w0.peakpx.com/wallpaper/240/377/HD-wallpaper-bedroom-hotel-room-light-design-modern-apartment-interior-idea-modern-design.jpg",
      "filename": "room3.jpg"
    },
    "price": 65,
    "location": "Tokyo",
    "country": "Japan",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [139.6917, 35.6895]
    }
  },
  {
    "title": "Artist's Loft Room",
    "description": "Creative space in Brooklyn with exposed brick",
    "image": {
      "url": "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      "filename": "room4.jpg"
    },
    "price": 145,
    "location": "New York",
    "country": "USA",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [-74.0060, 40.7128]
    }
  },
  {
    "title": "Garden View Room",
    "description": "Sunny room opening to private courtyard",
    "image": {
      "url": "https://images.unsplash.com/photo-1536376072261-38c75010e6c9",
      "filename": "room5.jpg"
    },
    "price": 110,
    "location": "Amsterdam",
    "country": "Netherlands",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [4.8952, 52.3702]
    }
  },
  {
    "title": "Luxury High-Rise Room",
    "description": "Floor-to-ceiling windows with city skyline views",
    "image": {
      "url": "https://images.unsplash.com/photo-1560448204-603b3fc33ddc",
      "filename": "room6.jpg"
    },
    "price": 220,
    "location": "Dubai",
    "country": "UAE",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [55.2708, 25.2048]
    }
  },
  {
    "title": "Rustic Cabin Room",
    "description": "Wood-paneled room with stone fireplace",
    "image": {
      "url": "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf",
      "filename": "room7.jpg"
    },
    "price": 95,
    "location": "Aspen",
    "country": "USA",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [-106.8235, 39.1911]
    }
  },
  {
    "title": "Beachfront Room",
    "description": "Steps from the ocean with private balcony",
    "image": {
      "url": "https://images.unsplash.com/photo-1519046904884-53103b34b206",
      "filename": "room8.jpg"
    },
    "price": 180,
    "location": "Bali",
    "country": "Indonesia",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [115.1889, -8.4095]
    }
  },
  {
    "title": "Historic Library Room",
    "description": "Book-lined room in converted 18th-century library",
    "image": {
      "url": "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb",
      "filename": "room9.jpg"
    },
    "price": 155,
    "location": "Edinburgh",
    "country": "UK",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [-3.1883, 55.9533]
    }
  },
  {
    "title": "Minimalist Zen Room",
    "description": "Serene space with tatami mats and shoji screens",
    "image": {
      "url": "https://images.unsplash.com/photo-1554995207-c18c203602cb",
      "filename": "room10.jpg"
    },
    "price": 105,
    "location": "Kyoto",
    "country": "Japan",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [135.7681, 35.0116]
    }
  },
  
  {
    "title": "Parisian Elegance Apartment",
    "description": "Chic apartment with Eiffel Tower views in the heart of Paris.",
    "image": {
      "url": "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=800&q=80",
      "filename": "iconic_1.jpg"
    },
    "price": 300,
    "location": "Paris",
    "country": "France",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [2.3522, 48.8566]
    }
  },
  {
    "title": "Venice Canal House",
    "description": "Historic home directly on a picturesque Venetian canal.",
    "image": {
      "url": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=800&q=80",
      "filename": "iconic_2.jpg"
    },
    "price": 275,
    "location": "Venice",
    "country": "Italy",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [12.3155, 45.4408]
    }
  },
  {
    "title": "Tokyo Skyline Penthouse",
    "description": "Ultra-modern penthouse with breathtaking views of Tokyo.",
    "image": {
      "url": "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=800&q=80",
      "filename": "iconic_3.jpg"
    },
    "price": 400,
    "location": "Tokyo",
    "country": "Japan",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [139.6917, 35.6895]
    }
  },
  {
    "title": "NYC Loft in SoHo",
    "description": "Industrial-chic loft in New York's trendiest neighborhood.",
    "image": {
      "url": "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=800&q=80",
      "filename": "iconic_4.jpg"
    },
    "price": 350,
    "location": "New York",
    "country": "USA",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [-74.006, 40.7128]
    }
  },
  {
    "title": "Sydney Harbour View",
    "description": "Luxury apartment with Opera House and Harbour Bridge views.",
    "image": {
      "url": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
      "filename": "iconic_5.jpg"
    },
    "price": 320,
    "location": "Sydney",
    "country": "Australia",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [151.2093, -33.8688]
    }
  },
  {
    "title": "Rio Beachfront Villa",
    "description": "Stunning villa steps from Copacabana Beach with ocean views.",
    "image": {
      "url": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80",
      "filename": "iconic_6.jpg"
    },
    "price": 280,
    "location": "Rio de Janeiro",
    "country": "Brazil",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [-43.1729, -22.9068]
    }
  },
  {
    "title": "Hong Kong Sky High Apartment",
    "description": "Ultra-modern high-rise apartment in vibrant Hong Kong.",
    "image": {
      "url": "https://images.unsplash.com/photo-1533856493584-0c6ca8ca9ce3?auto=format&fit=crop&w=800&q=80",
      "filename": "iconic_7.jpg"
    },
    "price": 290,
    "location": "Hong Kong",
    "country": "China",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [114.1694, 22.3193]
    }
  },
  {
    "title": "Dubai Luxury Suite",
    "description": "Opulent suite with Burj Khalifa views and premium amenities.",
    "image": {
      "url": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
      "filename": "iconic_8.jpg"
    },
    "price": 450,
    "location": "Dubai",
    "country": "UAE",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [55.2708, 25.2048]
    }
  },
  {
    "title": "Cape Town Mountain Retreat",
    "description": "Luxury home with Table Mountain and ocean views.",
    "image": {
      "url": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80",
      "filename": "iconic_9.jpg"
    },
    "price": 260,
    "location": "Cape Town",
    "country": "South Africa",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [18.4241, -33.9249]
    }
  },
  {
    "title": "Barcelona Art Nouveau Flat",
    "description": "Gorgeous flat in a Gaudí-inspired building near La Sagrada Familia.",
    "image": {
      "url": "https://images.unsplash.com/photo-1529651737248-dad5e287768e?auto=format&fit=crop&w=800&q=80",
      "filename": "iconic_10.jpg"
    },
    "price": 230,
    "location": "Barcelona",
    "country": "Spain",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [2.1686, 41.3874]
    }
  },
  
  {
    "title": "Alpine Panorama Chalet",
    "description": "Wooden chalet with floor-to-ceiling windows overlooking the Swiss Alps",
    "image": {
      "url": "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e",
      "filename": "mountain1.jpg"
    },
    "price": 320,
    "location": "Zermatt",
    "country": "Switzerland",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [7.7481, 46.0207]
    }
  },
  {
    "title": "Rocky Mountain Log Cabin",
    "description": "Authentic pine cabin with hot tub and hiking trail access",
    "image": {
      "url": "https://images.unsplash.com/photo-1605540436563-5bca919ae766",
      "filename": "mountain2.jpg"
    },
    "price": 210,
    "location": "Banff",
    "country": "Canada",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [-115.5708, 51.1784]
    }
  },
  {
    "title": "Himalayan Stone Retreat",
    "description": "Hand-built stone house with Everest views",
    "image": {
      "url": "https://media.istockphoto.com/id/471775841/photo/wood-cottage-with-a-beautiful-forest-and-mountain-views.jpg?s=612x612&w=0&k=20&c=Oipo8maY4FHjvCMVEbeAXAmTyyonIM-oqc6rTh24jN0=",
      "filename": "mountain3.jpg"
    },
    "price": 180,
    "location": "Pokhara",
    "country": "Nepal",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [83.9856, 28.2096]
    }
  },
  {
    "title": "Andean Glass Dome",
    "description": "360° mountain views with telescope for stargazing",
    "image": {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbs2AXKcZfpHr7DjAY58SB0czrxKa0iRf1iQ&s",
      "filename": "mountain4.jpg"
    },
    "price": 290,
    "location": "Cusco",
    "country": "Peru",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [-71.9673, -13.5319]
    }
  },
  {
    "title": "Dolomites A-Frame",
    "description": "Iconic triangular cabin in UNESCO-listed peaks",
    "image": {
      "url": "https://media.istockphoto.com/id/504903688/photo/ski-chalet-home-in-vail-colorado.jpg?s=612x612&w=0&k=20&c=klHy1sC75CrfxMK-Ivb93EL8R9C6M2PZdsVxbU_BSPU=",
      "filename": "mountain5.jpg"
    },
    "price": 270,
    "location": "South Tyrol",
    "country": "Italy",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [11.3548, 46.4983]
    }
  },
  {
    "title": "Fjord Cliff House",
    "description": "Cantilevered over a Norwegian fjord",
    "image": {
      "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090",
      "filename": "mountain6.jpg"
    },
    "price": 380,
    "location": "Bergen",
    "country": "Norway",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [5.3242, 60.3913]
    }
  },
  {
    "title": "Patagonia Eco Dome",
    "description": "Geodesic dome with views of Fitz Roy massif",
    "image": {
      "url": "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
      "filename": "mountain7.jpg"
    },
    "price": 230,
    "location": "El Chaltén",
    "country": "Argentina",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [-72.8866, -49.3296]
    }
  },
  {
    "title": "Japanese Onsen Cabin",
    "description": "Traditional cedar cabin with private hot spring",
    "image": {
      "url": "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13",
      "filename": "mountain8.jpg"
    },
    "price": 250,
    "location": "Hakone",
    "country": "Japan",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [139.0237, 35.2324]
    }
  },
  {
    "title": "Alaska Wilderness Outpost",
    "description": "Remote cabin accessible only by helicopter",
    "image": {
      "url": "https://images.unsplash.com/photo-1517825738774-7de9363ef735",
      "filename": "mountain9.jpg"
    },
    "price": 410,
    "location": "Denali National Park",
    "country": "USA",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [-150.6437, 63.1148]
    }
  },
  {
    "title": "Slovakian Shepherd's Hut",
    "description": "Historic mountain herder's cottage with sheep pastures",
    "image": {
      "url": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0",
      "filename": "mountain10.jpg"
    },
    "price": 130,
    "location": "High Tatras",
    "country": "Slovakia",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [20.2394, 49.1718]
    }
  },
  
  {
    "title": "Glass Igloo Aurora Suite",
    "description": "Thermal glass dome with heated floors for Northern Lights viewing",
    "image": {
      "url": "https://images.unsplash.com/photo-1517825738774-7de9363ef735",
      "filename": "arctic1.jpg"
    },
    "price": 500,
    "location": "Rovaniemi",
    "country": "Finland",
    "category": "Arctics",
    "geometry": {
      "type": "Point",
      "coordinates": [25.7246, 66.5039]
    }
  },
  {
    "title": "Ice Hotel Art Suite",
    "description": "Hand-carved ice room with reindeer fur blankets",
    "image": {
      "url": "https://images.unsplash.com/photo-1519046904884-53103b34b206",
      "filename": "arctic2.jpg"
    },
    "price": 620,
    "location": "Jukkasjärvi",
    "country": "Sweden",
    "category": "Arctics",
    "geometry": {
      "type": "Point",
      "coordinates": [20.6414, 67.8545]
    }
  },
  {
    "title": "Polar Bear Watch Cabin",
    "description": "Secluded cabin with spotting scopes for Arctic wildlife",
    "image": {
      "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090",
      "filename": "arctic3.jpg"
    },
    "price": 380,
    "location": "Svalbard",
    "country": "Norway",
    "category": "Arctics",
    "geometry": {
      "type": "Point",
      "coordinates": [15.6401, 78.2232]
    }
  },
  {
    "title": "Inuit Snow House",
    "description": "Authentic igloo built using traditional methods",
    "image": {
      "url": "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13",
      "filename": "arctic4.jpg"
    },
    "price": 290,
    "location": "Nunavut",
    "country": "Canada",
    "category": "Arctics",
    "geometry": {
      "type": "Point",
      "coordinates": [-85.2536, 73.0380]
    }
  },
  {
    "title": "Arctic Research Station",
    "description": "Converted science base with Northern Lights observatory",
    "image": {
      "url": "https://st3.depositphotos.com/9643694/13351/i/450/depositphotos_133513448-stock-photo-artic-winter-landscape.jpg",
      "filename": "arctic5.jpg"
    },
    "price": 410,
    "location": "Tromsø",
    "country": "Norway",
    "category": "Arctics",
    "geometry": {
      "type": "Point",
      "coordinates": [18.9553, 69.6492]
    }
  },
  {
    "title": "Dog Sledder's Cabin",
    "description": "Rustic cabin with husky kennels and sledding tours",
    "image": {
      "url": "https://images.stockcake.com/public/9/1/3/91303a7b-d97b-45c5-b0de-7e0a0afcb413_large/arctic-colorful-houses-stockcake.jpg",
      "filename": "arctic6.jpg"
    },
    "price": 230,
    "location": "Lapland",
    "country": "Finland",
    "category": "Arctics",
    "geometry": {
      "type": "Point",
      "coordinates": [26.9346, 67.9222]
    }
  },
  {
    "title": "Greenland Icefjord Hut",
    "description": "Cliffside cabin overlooking calving glaciers",
    "image": {
      "url": "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
      "filename": "arctic7.jpg"
    },
    "price": 350,
    "location": "Ilulissat",
    "country": "Greenland",
    "category": "Arctics",
    "geometry": {
      "type": "Point",
      "coordinates": [-51.0996, 69.2198]
    }
  },
  {
    "title": "Samí Lavvu Tent",
    "description": "Traditional reindeer herder's tent with modern comforts",
    "image": {
      "url": "https://thumbs.dreamstime.com/b/canadian-arctic-house-18602923.jpg",
      "filename": "arctic8.jpg"
    },
    "price": 195,
    "location": "Kiruna",
    "country": "Sweden",
    "category": "Arctics",
    "geometry": {
      "type": "Point",
      "coordinates": [20.2250, 67.8558]
    }
  },
  {
    "title": "Arctic Ship Cabin",
    "description": "Converted icebreaker ship cabin with porthole views",
    "image": {
      "url": "https://media.gettyimages.com/id/2106373356/video/at-dusk-traditional-norwegian-homes-on-stilts-are-set-against-the-snowy-mountain-backdrop.jpg?s=640x640&k=20&c=wRBy_niMFgG0kklM25z_EKRNOUbE6X4drJ7q5FlrsRk=",
      "filename": "arctic9.jpg"
    },
    "price": 270,
    "location": "Murmansk",
    "country": "Russia",
    "category": "Arctics",
    "geometry": {
      "type": "Point",
      "coordinates": [33.0827, 68.9707]
    }
  },
  {
    "title": "Tundra Dome",
    "description": "Geodesic dome with 24-hour Arctic summer light",
    "image": {
      "url": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
      "filename": "arctic10.jpg"
    },
    "price": 330,
    "location": "Alaska",
    "country": "USA",
    "category": "Arctics",
    "geometry": {
      "type": "Point",
      "coordinates": [-149.9003, 61.2181]
    }
  },
  
  {
    "title": "Dracula's Tower Suite",
    "description": "Sleep in a 14th-century Transylvanian castle with Gothic stone walls and vampire lore tours included.",
    "image": {
      "url": "https://images.unsplash.com/photo-1582582621959-48d27397dc69",
      "filename": "castle1.jpg"
    },
    "price": 680,
    "location": "Bran",
    "country": "Romania",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [25.3673, 45.5152]
    }
  },
  {
    "title": "Scottish Highlands Fortress",
    "description": "Stay in a turret room with four-poster beds and views of Loch Ness.",
    "image": {
      "url": "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb",
      "filename": "castle2.jpg"
    },
    "price": 720,
    "location": "Inverness",
    "country": "UK",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [-4.2247, 57.4778]
    }
  },
  {
    "title": "Loire Valley Château",
    "description": "Renaissance-era castle with vineyards, ballrooms, and private gardens.",
    "image": {
      "url": "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
      "filename": "castle3.jpg"
    },
    "price": 890,
    "location": "Loire Valley",
    "country": "France",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [0.3333, 47.4162]
    }
  },
  {
    "title": "German Fairytale Castle",
    "description": "Neuschwanstein-inspired suite with frescoed ceilings and forest views.",
    "image": {
      "url": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0",
      "filename": "castle4.jpg"
    },
    "price": 750,
    "location": "Bavaria",
    "country": "Germany",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [10.7483, 47.5576]
    }
  },
  {
    "title": "Irish Cliffside Castle",
    "description": "Dramatic coastal fortress with whiskey tastings and falconry shows.",
    "image": {
      "url": "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13",
      "filename": "castle5.jpg"
    },
    "price": 670,
    "location": "County Clare",
    "country": "Ireland",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [-9.0576, 52.9439]
    }
  },
  {
    "title": "Japanese Samurai Keep",
    "description": "Restored feudal castle with tatami rooms and tea ceremonies.",
    "image": {
      "url": "https://images.unsplash.com/photo-1554995207-c18c203602cb",
      "filename": "castle6.jpg"
    },
    "price": 620,
    "location": "Himeji",
    "country": "Japan",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [134.6853, 34.8397]
    }
  },
  {
    "title": "Andalusian Alcázar",
    "description": "Moorish palace with mosaic courtyards and orange groves.",
    "image": {
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "filename": "castle7.jpg"
    },
    "price": 710,
    "location": "Seville",
    "country": "Spain",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [-5.9941, 37.3826]
    }
  },
  {
    "title": "Prague Castle Apartment",
    "description": "Royal chambers in Europe’s largest ancient castle complex.",
    "image": {
      "url": "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e",
      "filename": "castle8.jpg"
    },
    "price": 780,
    "location": "Prague",
    "country": "Czech Republic",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [14.4205, 50.0875]
    }
  },
  {
    "title": "Swedish Island Fortress",
    "description": "17th-century sea castle with kayak rentals and saunas.",
    "image": {
      "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090",
      "filename": "castle9.jpg"
    },
    "price": 690,
    "location": "Stockholm Archipelago",
    "country": "Sweden",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [18.6435, 59.3262]
    }
  },
  {
    "title": "Venetian Water Castle",
    "description": "Palatial suite on a private island with gondola transfers.",
    "image": {
      "url": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
      "filename": "castle10.jpg"
    },
    "price": 950,
    "location": "Venice",
    "country": "Italy",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [12.3155, 45.4408]
    }
  },
  
  {
    "title": "Safari Glamping Tent",
    "description": "Luxury canvas tent with king bed, ensuite bathroom, and private deck overlooking the Serengeti",
    "image": {
      "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      "filename": "camping1.jpg"
    },
    "price": 220,
    "location": "Serengeti National Park",
    "country": "Tanzania",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [34.8136, -2.1540]
    }
  },
  {
    "title": "Redwood Forest Dome",
    "description": "Geodesic dome nestled among ancient redwoods with skylight for stargazing",
    "image": {
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "filename": "camping2.jpg"
    },
    "price": 180,
    "location": "Redwood National Park",
    "country": "USA",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [-124.0665, 41.2132]
    }
  },
  {
    "title": "Patagonia Eco Camp",
    "description": "Sustainable domes with panoramic views of Torres del Paine mountains",
    "image": {
      "url": "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
      "filename": "camping3.jpg"
    },
    "price": 250,
    "location": "Torres del Paine",
    "country": "Chile",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [-72.7966, -51.0699]
    }
  },
  {
    "title": "Outback Swag Tent",
    "description": "Authentic Australian swag setup under the Milky Way near Uluru",
    "image": {
      "url": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
      "filename": "camping4.jpg"
    },
    "price": 150,
    "location": "Uluru-Kata Tjuta",
    "country": "Australia",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [131.0369, -25.3444]
    }
  },
  {
    "title": "Alpine Meadow Yurt",
    "description": "Traditional Mongolian yurt with wood-burning stove in Swiss Alps",
    "image": {
      "url": "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e",
      "filename": "camping5.jpg"
    },
    "price": 195,
    "location": "Zermatt",
    "country": "Switzerland",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [7.7481, 46.0207]
    }
  },
  {
    "title": "Desert Star Gazer",
    "description": "Transparent bubble tents in Joshua Tree with telescope provided",
    "image": {
      "url": "https://images.unsplash.com/photo-1517825738774-7de9363ef735",
      "filename": "camping6.jpg"
    },
    "price": 230,
    "location": "Joshua Tree",
    "country": "USA",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [-116.3130, 34.1347]
    }
  },
  {
    "title": "Nordic Lakeside Cabin",
    "description": "Minimalist A-frame cabin with private sauna and fishing gear",
    "image": {
      "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090",
      "filename": "camping7.jpg"
    },
    "price": 210,
    "location": "Finnish Lakeland",
    "country": "Finland",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [26.9346, 61.9241]
    }
  },
  {
    "title": "Jungle Tree Platform",
    "description": "Elevated bamboo platform with mosquito nets and waterfall access",
    "image": {
      "url": "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf",
      "filename": "camping8.jpg"
    },
    "price": 140,
    "location": "Ubud",
    "country": "Indonesia",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [115.2600, -8.5193]
    }
  },
  {
    "title": "Canyon Overlook Tent",
    "description": "Cliffside tent with private deck overlooking Grand Canyon",
    "image": {
      "url": "https://www.shutterstock.com/shutterstock/videos/3419457767/thumb/1.jpg?ip=x480",
      "filename": "camping9.jpg"
    },
    "price": 260,
    "location": "Grand Canyon",
    "country": "USA",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [-112.1129, 36.1069]
    }
  },
  {
    "title": "Beachfront Bivouac",
    "description": "Driftwood shelter steps from the ocean with surfboard rental",
    "image": {
      "url": "https://images.unsplash.com/photo-1519046904884-53103b34b206",
      "filename": "camping10.jpg"
    },
    "price": 175,
    "location": "Nosara",
    "country": "Costa Rica",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [-85.6515, 9.9767]
    }
  },
  
  {
    "title": "Tuscan Vineyard Estate",
    "description": "Stay in a 200-year-old farmhouse surrounded by Chianti vineyards, with daily wine tastings included",
    "image": {
      "url": "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      "filename": "farm1.jpg"
    },
    "price": 275,
    "location": "Chianti",
    "country": "Italy",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [11.2558, 43.7711]
    }
  },
  {
    "title": "Organic Goat Farm Cottage",
    "description": "Hands-on experience with cheese making and baby goat feeding sessions",
    "image": {
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "filename": "farm2.jpg"
    },
    "price": 165,
    "location": "Provence",
    "country": "France",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [5.3698, 43.7696]
    }
  },
  {
    "title": "Lavender Field Retreat",
    "description": "Stone cottage in the middle of blooming lavender fields with distillation workshops",
    "image": {
      "url": "https://images.unsplash.com/photo-1517825738774-7de9363ef735",
      "filename": "farm3.jpg"
    },
    "price": 210,
    "location": "Valensole Plateau",
    "country": "France",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [5.9839, 43.8374]
    }
  },
  {
    "title": "Maple Syrup Cabin",
    "description": "Participate in syrup tapping and pancake breakfasts in a Vermont sugar shack",
    "image": {
      "url": "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e",
      "filename": "farm4.jpg"
    },
    "price": 195,
    "location": "Stowe",
    "country": "USA",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [-72.7876, 44.4654]
    }
  },
  {
    "title": "Olive Harvest Villa",
    "description": "Help with the autumn olive harvest and enjoy mill tours in Andalusia",
    "image": {
      "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090",
      "filename": "farm5.jpg"
    },
    "price": 230,
    "location": "Jaén",
    "country": "Spain",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [-3.7908, 37.7796]
    }
  },
  {
    "title": "Bamboo Forest Tea Farm",
    "description": "Traditional Japanese farmhouse with tea picking and ceremony experiences",
    "image": {
      "url": "https://images.unsplash.com/photo-1554995207-c18c203602cb",
      "filename": "farm6.jpg"
    },
    "price": 185,
    "location": "Uji",
    "country": "Japan",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [135.7997, 34.8925]
    }
  },
  {
    "title": "Alpaca Wool Farm",
    "description": "Interact with alpacas and learn wool processing in the Andes mountains",
    "image": {
      "url": "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13",
      "filename": "farm7.jpg"
    },
    "price": 155,
    "location": "Cusco",
    "country": "Peru",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [-71.9673, -13.5319]
    }
  },
  {
    "title": "Tropical Fruit Plantation",
    "description": "Stay in a treehouse surrounded by mango, papaya and banana trees",
    "image": {
      "url": "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf",
      "filename": "farm8.jpg"
    },
    "price": 145,
    "location": "Kerala",
    "country": "India",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [76.2673, 9.9312]
    }
  },
  {
    "title": "Sunflower Farm Loft",
    "description": "Wake up to fields of sunflowers in this converted barn loft",
    "image": {
      "url": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
      "filename": "farm9.jpg"
    },
    "price": 175,
    "location": "Tuscany",
    "country": "Italy",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [11.2558, 43.7711]
    }
  },
  {
    "title": "Mushroom Forager's Cabin",
    "description": "Guided mushroom hunting trips and cooking classes in Swedish forests",
    "image": {
      "url": "https://images.unsplash.com/photo-1519046904884-53103b34b206",
      "filename": "farm10.jpg"
    },
    "price": 195,
    "location": "Småland",
    "country": "Sweden",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [14.6867, 57.3906]
    }
  },
  
  {
    "title": "Redwood Canopy Castle",
    "description": "Three-level treehouse 90 feet up in ancient redwoods with spiral staircase and suspension bridge",
    "image": {
      "url": "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf",
      "filename": "treehouse1.jpg"
    },
    "price": 325,
    "location": "Northern California",
    "country": "USA",
    "category": "Tree Houses",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.7278, 38.4237]
    }
  },
  {
    "title": "Bamboo Forest Nest",
    "description": "Eco-friendly bamboo treehouse with outdoor shower surrounded by tropical birds",
    "image": {
      "url": "https://images.unsplash.com/photo-1554995207-c18c203602cb",
      "filename": "treehouse2.jpg"
    },
    "price": 195,
    "location": "Ubud",
    "country": "Indonesia",
    "category": "Tree Houses",
    "geometry": {
      "type": "Point",
      "coordinates": [115.2600, -8.5193]
    }
  },
  {
    "title": "Amazon Jungle Observatory",
    "description": "360° viewing platform 70ft up with wildlife spotting telescopes",
    "image": {
      "url": "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13",
      "filename": "treehouse3.jpg"
    },
    "price": 240,
    "location": "Manu National Park",
    "country": "Peru",
    "category": "Tree Houses",
    "geometry": {
      "type": "Point",
      "coordinates": [-71.6893, -12.2583]
    }
  },
  {
    "title": "Fairy Tale Oak House",
    "description": "Whimsical circular treehouse with stained glass windows in centuries-old oak",
    "image": {
      "url": "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e",
      "filename": "treehouse4.jpg"
    },
    "price": 275,
    "location": "Cotswolds",
    "country": "UK",
    "category": "Tree Houses",
    "geometry": {
      "type": "Point",
      "coordinates": [-1.7604, 51.8334]
    }
  },
  {
    "title": "Maple Sugar Shack Treehouse",
    "description": "Sweet-smelling cabin built around living maple trees with syrup taps",
    "image": {
      "url": "https://images.unsplash.com/photo-1517825738774-7de9363ef735",
      "filename": "treehouse5.jpg"
    },
    "price": 210,
    "location": "Quebec",
    "country": "Canada",
    "category": "Tree Houses",
    "geometry": {
      "type": "Point",
      "coordinates": [-71.2531, 46.8299]
    }
  },
  {
    "title": "African Baobab Suite",
    "description": "Luxury suite built into a 600-year-old baobab tree with sunset deck",
    "image": {
      "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090",
      "filename": "treehouse6.jpg"
    },
    "price": 350,
    "location": "Limpopo",
    "country": "South Africa",
    "category": "Tree Houses",
    "geometry": {
      "type": "Point",
      "coordinates": [29.7468, -23.4013]
    }
  },
  {
    "title": "Japanese Cedar Tea House",
    "description": "Minimalist treehouse with tatami mats and tea ceremony platform",
    "image": {
      "url": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
      "filename": "treehouse7.jpg"
    },
    "price": 290,
    "location": "Kyoto",
    "country": "Japan",
    "category": "Tree Houses",
    "geometry": {
      "type": "Point",
      "coordinates": [135.7681, 35.0116]
    }
  },
  {
    "title": "Rainforest Canopy Pod",
    "description": "Sleek aluminum pod suspended by cables with zip-line entrance",
    "image": {
      "url": "https://images.unsplash.com/photo-1519046904884-53103b34b206",
      "filename": "treehouse8.jpg"
    },
    "price": 230,
    "location": "Costa Rica",
    "country": "Costa Rica",
    "category": "Tree Houses",
    "geometry": {
      "type": "Point",
      "coordinates": [-84.1917, 9.7489]
    }
  },
  {
    "title": "Nordic Pine Cone Cabin",
    "description": "Hexagonal treehouse resembling a giant pine cone with sauna",
    "image": {
      "url": "https://images.unsplash.com/photo-1582582621959-48d27397dc69",
      "filename": "treehouse9.jpg"
    },
    "price": 255,
    "location": "Lapland",
    "country": "Finland",
    "category": "Tree Houses",
    "geometry": {
      "type": "Point",
      "coordinates": [26.9346, 67.9222]
    }
  },
  {
    "title": "Australian Gum Tree Hideaway",
    "description": "Eucalyptus-surrounded retreat with koala spotting deck",
    "image": {
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "filename": "treehouse10.jpg"
    },
    "price": 200,
    "location": "Blue Mountains",
    "country": "Australia",
    "category": "Tree Houses",
    "geometry": {
      "type": "Point",
      "coordinates": [150.3115, -33.7182]
    }
  },
  
  {
    "title": "Mykonos Cliffside Paradise",
    "description": "Luxury whitewashed villa with infinity pool overlooking the Aegean Sea and private chef services",
    "image": {
      "url": "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
      "filename": "villa1.jpg"
    },
    "price": 1200,
    "location": "Mykonos",
    "country": "Greece",
    "category": "Villas",
    "geometry": {
      "type": "Point",
      "coordinates": [25.3285, 37.4467]
    }
  },
  {
    "title": "Bali Jungle Retreat",
    "description": "Private compound with 3 villas, outdoor showers, and jungle-view yoga pavilion",
    "image": {
      "url": "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf",
      "filename": "villa2.jpg"
    },
    "price": 950,
    "location": "Ubud",
    "country": "Indonesia",
    "category": "Villas",
    "geometry": {
      "type": "Point",
      "coordinates": [115.2600, -8.5193]
    }
  },
  {
    "title": "Tuscany Wine Estate",
    "description": "16th-century stone villa with vineyard tours and private wine cellar",
    "image": {
      "url": "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e",
      "filename": "villa3.jpg"
    },
    "price": 1800,
    "location": "Chianti",
    "country": "Italy",
    "category": "Villas",
    "geometry": {
      "type": "Point",
      "coordinates": [11.2558, 43.7711]
    }
  },
  {
    "title": "St. Barths Beachfront Mansion",
    "description": "Ultra-luxury villa with direct beach access and personal butler",
    "image": {
      "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090",
      "filename": "villa4.jpg"
    },
    "price": 3500,
    "location": "Gustavia",
    "country": "French Caribbean",
    "category": "Villas",
    "geometry": {
      "type": "Point",
      "coordinates": [-62.8499, 17.8964]
    }
  },
  {
    "title": "Marrakech Riad Palace",
    "description": "Traditional Moroccan villa with courtyard pool and hammam spa",
    "image": {
      "url": "https://images.unsplash.com/photo-1517825738774-7de9363ef735",
      "filename": "villa5.jpg"
    },
    "price": 850,
    "location": "Marrakech",
    "country": "Morocco",
    "category": "Villas",
    "geometry": {
      "type": "Point",
      "coordinates": [-8.0081, 31.6295]
    }
  },
  {
    "title": "Malibu Oceanview Estate",
    "description": "Modern architectural masterpiece with private beach staircase",
    "image": {
      "url": "https://images.unsplash.com/photo-1519046904884-53103b34b206",
      "filename": "villa6.jpg"
    },
    "price": 2800,
    "location": "Malibu",
    "country": "USA",
    "category": "Villas",
    "geometry": {
      "type": "Point",
      "coordinates": [-118.7798, 34.0259]
    }
  },
  {
    "title": "Santorini Caldera Cave House",
    "description": "Whitewashed cave villa carved into cliffs with hot tub overlooking the volcano",
    "image": {
      "url": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
      "filename": "villa7.jpg"
    },
    "price": 1500,
    "location": "Oia",
    "country": "Greece",
    "category": "Villas",
    "geometry": {
      "type": "Point",
      "coordinates": [25.3739, 36.4614]
    }
  },
  {
    "title": "Phuket Tropical Oasis",
    "description": "Private 5-bedroom villa with infinity pool and Thai massage sala",
    "image": {
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "filename": "villa8.jpg"
    },
    "price": 1100,
    "location": "Phuket",
    "country": "Thailand",
    "category": "Villas",
    "geometry": {
      "type": "Point",
      "coordinates": [98.3381, 7.9519]
    }
  },
  {
    "title": "Provence Lavender Villa",
    "description": "18th-century farmhouse surrounded by lavender fields with private chef",
    "image": {
      "url": "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13",
      "filename": "villa9.jpg"
    },
    "price": 1300,
    "location": "Luberon",
    "country": "France",
    "category": "Villas",
    "geometry": {
      "type": "Point",
      "coordinates": [5.3698, 43.7696]
    }
  },
  {
    "title": "Dubai Palm Jumeirah Mansion",
    "description": "Ultra-modern 7-bedroom villa with private marina and cinema room",
    "image": {
      "url": "https://images.unsplash.com/photo-1554995207-c18c203602cb",
      "filename": "villa10.jpg"
    },
    "price": 4200,
    "location": "Dubai",
    "country": "UAE",
    "category": "Villas",
    "geometry": {
      "type": "Point",
      "coordinates": [55.1385, 25.1216]
    }
  },
  
  {
    "title": "Miami Beach Oceanfront Penthouse",
    "description": "Luxury high-rise condo with wraparound balcony, private beach access, and 24/7 concierge service",
    "image": {
      "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      "filename": "condo1.jpg"
    },
    "price": 650,
    "location": "Miami Beach",
    "country": "USA",
    "category": "Condos",
    "geometry": {
      "type": "Point",
      "coordinates": [-80.1300, 25.7907]
    }
  },
  {
    "title": "Tokyo Sky Tower Residence",
    "description": "Ultra-modern condo in Shibuya with smart home technology and panoramic city views",
    "image": {
      "url": "https://images.unsplash.com/photo-1492571350019-22de08371fd3",
      "filename": "condo2.jpg"
    },
    "price": 580,
    "location": "Tokyo",
    "country": "Japan",
    "category": "Condos",
    "geometry": {
      "type": "Point",
      "coordinates": [139.6917, 35.6895]
    }
  },
  {
    "title": "Vancouver Harbour Luxury",
    "description": "Waterfront condo with floor-to-ceiling windows and access to yacht club",
    "image": {
      "url": "https://images.unsplash.com/photo-1536376072261-38c75010e6c9",
      "filename": "condo3.jpg"
    },
    "price": 520,
    "location": "Vancouver",
    "country": "Canada",
    "category": "Condos",
    "geometry": {
      "type": "Point",
      "coordinates": [-123.1207, 49.2827]
    }
  },
  {
    "title": "Singapore Marina Bay Suite",
    "description": "Iconic infinity pool condo with views of Gardens by the Bay",
    "image": {
      "url": "https://images.unsplash.com/photo-1533856493584-0c6ca8ca9ce3",
      "filename": "condo4.jpg"
    },
    "price": 720,
    "location": "Singapore",
    "country": "Singapore",
    "category": "Condos",
    "geometry": {
      "type": "Point",
      "coordinates": [103.8198, 1.3521]
    }
  },
  {
    "title": "Barcelona Gothic Quarter Loft",
    "description": "Renovated historic apartment with modern amenities near La Rambla",
    "image": {
      "url": "https://images.unsplash.com/photo-1523726491678-bf852e717f6a",
      "filename": "condo5.jpg"
    },
    "price": 480,
    "location": "Barcelona",
    "country": "Spain",
    "category": "Condos",
    "geometry": {
      "type": "Point",
      "coordinates": [2.1686, 41.3874]
    }
  },
  {
    "title": "Dubai Downtown Highrise",
    "description": "Lavish condo with Burj Khalifa views and personal driver service",
    "image": {
      "url": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      "filename": "condo6.jpg"
    },
    "price": 890,
    "location": "Dubai",
    "country": "UAE",
    "category": "Condos",
    "geometry": {
      "type": "Point",
      "coordinates": [55.2708, 25.2048]
    }
  },
  {
    "title": "Sydney Opera View Apartment",
    "description": "Designer-furnished condo steps from the Harbour Bridge",
    "image": {
      "url": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
      "filename": "condo7.jpg"
    },
    "price": 610,
    "location": "Sydney",
    "country": "Australia",
    "category": "Condos",
    "geometry": {
      "type": "Point",
      "coordinates": [151.2093, -33.8688]
    }
  },
  {
    "title": "New York Soho Artist's Loft",
    "description": "Industrial-chic condo with exposed brick and rooftop garden",
    "image": {
      "url": "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee",
      "filename": "condo8.jpg"
    },
    "price": 780,
    "location": "New York",
    "country": "USA",
    "category": "Condos",
    "geometry": {
      "type": "Point",
      "coordinates": [-74.0060, 40.7128]
    }
  },
  {
    "title": "Hong Kong Peak Residence",
    "description": "Ultra-luxury condo with Victoria Harbour views and private elevator",
    "image": {
      "url": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
      "filename": "condo9.jpg"
    },
    "price": 950,
    "location": "Hong Kong",
    "country": "China",
    "category": "Condos",
    "geometry": {
      "type": "Point",
      "coordinates": [114.1694, 22.3193]
    }
  },
  {
    "title": "Parisian Haussmann Apartment",
    "description": "Elegant condo with ornate moldings and Eiffel Tower views",
    "image": {
      "url": "https://images.unsplash.com/photo-1431274172761-fca41d930114",
      "filename": "condo10.jpg"
    },
    "price": 680,
    "location": "Paris",
    "country": "France",
    "category": "Condos",
    "geometry": {
      "type": "Point",
      "coordinates": [2.3522, 48.8566]
    }
  },
  
  {
    "title": "Bora Bora Overwater Paradise",
    "description": "Iconic thatched-roof bungalow with glass floor panels above coral reefs, private deck, and direct lagoon access",
    "image": {
      "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      "filename": "bungalow1.jpg"
    },
    "price": 1200,
    "location": "Bora Bora",
    "country": "French Polynesia",
    "category": "Bungalows",
    "geometry": {
      "type": "Point",
      "coordinates": [-151.7420, -16.5004]
    }
  },
  {
    "title": "Balinese Jungle Retreat",
    "description": "Traditional alang-alang thatch bungalow with outdoor stone bath and jungle views",
    "image": {
      "url": "https://images.unsplash.com/photo-1582582621959-48d27397dc69",
      "filename": "bungalow2.jpg"
    },
    "price": 350,
    "location": "Ubud",
    "country": "Indonesia",
    "category": "Bungalows",
    "geometry": {
      "type": "Point",
      "coordinates": [115.2600, -8.5193]
    }
  },
  {
    "title": "Caribbean Beach Shack",
    "description": "Colorful waterfront bungalow with hammock and rum cocktail welcome",
    "image": {
      "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090",
      "filename": "bungalow3.jpg"
    },
    "price": 420,
    "location": "Tobago Cays",
    "country": "St. Vincent & Grenadines",
    "category": "Bungalows",
    "geometry": {
      "type": "Point",
      "coordinates": [-61.3442, 12.6346]
    }
  },
  {
    "title": "Seychelles Granite Hideaway",
    "description": "Bungalow nestled between giant granite boulders with private beach",
    "image": {
      "url": "https://images.unsplash.com/photo-1517825738774-7de9363ef735",
      "filename": "bungalow4.jpg"
    },
    "price": 680,
    "location": "La Digue",
    "country": "Seychelles",
    "category": "Bungalows",
    "geometry": {
      "type": "Point",
      "coordinates": [55.8372, -4.3596]
    }
  },
  {
    "title": "California Coastal Bungalow",
    "description": "1920s craftsman bungalow steps from the Pacific with firepit",
    "image": {
      "url": "https://images.unsplash.com/photo-1519046904884-53103b34b206",
      "filename": "bungalow5.jpg"
    },
    "price": 380,
    "location": "Laguna Beach",
    "country": "USA",
    "category": "Bungalows",
    "geometry": {
      "type": "Point",
      "coordinates": [-117.7830, 33.5427]
    }
  },
  {
    "title": "Thai Fishing Village House",
    "description": "Teak wood bungalow on stilts above water with kayak rentals",
    "image": {
      "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "filename": "bungalow6.jpg"
    },
    "price": 220,
    "location": "Koh Lanta",
    "country": "Thailand",
    "category": "Bungalows",
    "geometry": {
      "type": "Point",
      "coordinates": [99.0368, 7.6244]
    }
  },
  {
    "title": "Moroccan Desert Oasis",
    "description": "Earthen bungalow with rooftop terrace overlooking palm groves",
    "image": {
      "url": "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13",
      "filename": "bungalow7.jpg"
    },
    "price": 290,
    "location": "Skoura",
    "country": "Morocco",
    "category": "Bungalows",
    "geometry": {
      "type": "Point",
      "coordinates": [-6.5546, 31.0605]
    }
  },
  {
    "title": "Australian Reefside Escape",
    "description": "Beachfront bungalow with Great Barrier Reef snorkeling gear provided",
    "image": {
      "url": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
      "filename": "bungalow8.jpg"
    },
    "price": 410,
    "location": "Whitsunday Islands",
    "country": "Australia",
    "category": "Bungalows",
    "geometry": {
      "type": "Point",
      "coordinates": [148.9647, -20.3445]
    }
  },
  {
    "title": "Mexican Palapa Paradise",
    "description": "Open-air palm-thatched bungalow with outdoor shower and mezcal tastings",
    "image": {
      "url": "https://images.unsplash.com/photo-1554995207-c18c203602cb",
      "filename": "bungalow9.jpg"
    },
    "price": 270,
    "location": "Tulum",
    "country": "Mexico",
    "category": "Bungalows",
    "geometry": {
      "type": "Point",
      "coordinates": [-87.4654, 20.2114]
    }
  },
  {
    "title": "Maldivian Sunrise Bungalow",
    "description": "Overwater retreat with sunrise views and private ladder to coral gardens",
    "image": {
      "url": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
      "filename": "bungalow10.jpg"
    },
    "price": 950,
    "location": "North Malé Atoll",
    "country": "Maldives",
    "category": "Bungalows",
    "geometry": {
      "type": "Point",
      "coordinates": [73.3288, 4.4131]
    }
  }
];

module.exports = { data: sampleListings };