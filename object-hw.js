//This is an array called gameOfThonesHouses.  It is an array made up of objects.  Each object represents a house in the game of thrones.  Each house has a name, wikiSuffix, and people.  People in a house is an array of objects.  Each object represents a person.  Each person has a name, description, imageSuffix, and wikiSuffix.


var gameOfThronesHouses = [
    // [0]
    {
      name: "Starks",
      wikiSuffix: "House_Stark",
      people: [
        {
          name: "Eddard \"Ned\" Stark",
          description: "Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark",
          imageSuffix: "eddard-stark",
          wikiSuffix: "Eddard_Stark"
        },
        {
          name: "Benjen Stark",
          description: "Brother of Eddard Stark - First ranger of the Night's Watch",
          imageSuffix: "benjen-stark",
          wikiSuffix: "Benjen_Stark"
        },
        {
          name: "Robb Stark",
          description: "Son of Eddard and Catelyn Stark - Direwolf: Grey Wind",
          imageSuffix: "robb-stark",
          wikiSuffix: "Robb_Stark"
        },
        {
          name: "Sansa Stark",
          description: "Daughter of Eddard and Catelyn Stark - Direwolf: Lady",
          imageSuffix: "sansa-stark",
          wikiSuffix: "Sansa_Stark"
        },
        {
          name: "Arya Stark",
          description: "Daughter of Eddard and Catelyn Stark - Direwolf: Nymeria",
          imageSuffix: "arya-stark",
          wikiSuffix: "Arya_Stark"
        },
        {
          name: "Brandon \"Bran\" Stark",
          description: "Son of Eddard and Catelyn Stark - Direwolf: Summer",
          imageSuffix: "brandon-stark",
          wikiSuffix: "Brandon_Stark"
        },
        {
          name: "Rickon Stark",
          description: "Son of Eddard and Catelyn Stark - Direwolf: Shaggydog",
          imageSuffix: "rickon-stark",
          wikiSuffix: "Rickon_Stark"
        },
        {
          name: "Jon Snow",
          description: "Bastard son of Eddard Stark - Steweard in the Night's Watch - Direwolf: Ghost",
          imageSuffix: "jon-snow",
          wikiSuffix: "Jon_Snow"
        }
      ]
    },
    // [1]
    {
      name: "Lannisters",
      wikiSuffix: "House_Lannister",
      people: [
        {
          name: "Tywin Lannister",
          description: "Lord of Casterly Rock - Warden of the West",
          imageSuffix: "tywin-lannister",
          wikiSuffix: "Tywin_Lannister"
        },
        {
          name: "Tyrion Lannister",
          description: "Son of Tywin Lannister - The Imp",
          imageSuffix: "tyrion-lannister",
          wikiSuffix: "Tyrion_Lannister"
        },
        {
          name: "Jaime Lannister",
          description: "The Kingslayer - Knight of the Kingsgaurd - Son of Tywin Lannister",
          imageSuffix: "jaime-lannister",
          wikiSuffix: "Jaime_Lannister"
        },
        {
          name: "Queen Cersei (Lannister) Baratheon",
          description: "Married to King Robert Baratheon - Daughter of Tywin Lannister",
          imageSuffix: "cersei-lannister",
          wikiSuffix: "Cersei_Lannister"
        }
      ]
    },
    // [2]
    {
      name: "Baratheons",
      wikiSuffix: "House_Baratheon",
      people: [
        {
          name: "King Robert Baratheon",
          description: "The first of his name - Lord of the Seven Kingdoms",
          imageSuffix: "robert-baratheon",
          wikiSuffix: "Robert_Baratheon"
        },
        {
          name: "Stannis Baratheon",
          description: "Lord of Dragonstone - Master of Ships - Brother of Robert Baratheon",
          imageSuffix: "stannis-baratheon",
          wikiSuffix: "Stannis_Baratheon"
        },
        {
          name: "Renly Baratheon",
          description: "Lord of Storm's End - Master of Laws - Brother of Robert Baratheon",
          imageSuffix: "renly-baratheon",
          wikiSuffix: "Renly_Baratheon"
        },
        {
          name: "Joffrey Baratheon",
          description: "Heir to the Iron Throne - Son of Robert and Cersei Baratheon",
          imageSuffix: "joffrey-baratheon",
          wikiSuffix: "Joffrey_Baratheon"
        },
        {
          name: "Tommen Baratheon",
          description: "Son of Robert and Cersei Baratheon",
          imageSuffix: "tommen-baratheon",
          wikiSuffix: "Tommen_Baratheon"
        },
        {
          name: "Myrcella Baratheon",
          description: "Daughter of Robert and Cersei Baratheon",
          imageSuffix: "myrcella-baratheon",
          wikiSuffix: "Myrcella_Baratheon"
        }
      ]
    },
    // [3]
    {
      name: "Targaryens",
      wikiSuffix: "House_Targaryen",
      people: [
        {
          name: "Daenerys Targaryen",
          description: "Stormborn - Khaleesi of the Dothraki - The Unburnt - Mother of Dragons - Daughter of Aerys II Targaryen \"The Mad King\"",
          imageSuffix: "daenerys-targaryen",
          wikiSuffix: "Daenerys_Targaryen"
        },
        {
          name: "Viserys Targaryen",
          description: "The Beggar King - Son of Aerys II Targaryen \"The Mad King\"",
          imageSuffix: "viserys-targaryen",
          wikiSuffix: "Viserys_Targaryen"
        }
      ]
    },
    // [4]
    {
      name: "Greyjoys",
      wikiSuffix: "House_Greyjoy",
      people: [
        {
          name: "Balon Greyjoy",
          description: "Lord Reaper of Pyke - Head of House Greyjoy",
          imageSuffix: "balon-greyjoy",
          wikiSuffix: "Balon_Greyjoy"
        },
        {
          name: "Theon Greyjoy",
          description: "Ward of the Starks - Heir to the Iron Islands - Son of Balon Greyjoy",
          imageSuffix: "theon-greyjoy",
          wikiSuffix: "Theon_Greyjoy"
        },
        {
          name: "Yara Greyjoy",
          description: "Ironborn - Son of Balon Greyjoy",
          imageSuffix: "yara-greyjoy",
          wikiSuffix: "Yara_Greyjoy"
        }
      ]
    },
    // [5]
    {
      name: "Tyrells",
      wikiSuffix: "House_Tyrell",
      people: [
        {
          name: "Margaery (Tyrell) Baratheon",
          description: "Wife of Renly Baratheon - Sister of Loras Tyrell - Granddaughter of Olenna Tyrell",
          imageSuffix: "margaery-tyrell",
          wikiSuffix: "Margaery_Tyrell"
        },
        {
          name: "Loras Tyrell",
          description: "Heir to Highgarden - Commander of the Kings Gaurd - Brother of Margaery Baratheon",
          imageSuffix: "loras-tyrell",
          wikiSuffix: "Loras_Tyrell"
        }

      ]
    },
    // [6]
    {
      name: "Tullys",
      wikiSuffix: "House_Tully",
      people: [
        {
          name: "Catelyn (Tully) Stark",
          description: "Married to Eddard Stark - Daughter of Hoster Tully",
          imageSuffix: "catelyn-tully",
          wikiSuffix: "Catelyn_Tully"
        },
        {
          name: "Lysa (Tully) Arryn",
          description: "Widow of Jon Arryn - Daughter of Hoster Tully",
          imageSuffix: "lysa-tully",
          wikiSuffix: "Lysa_Tully"
        },
        {
          name: "Edmure Tully",
          description: "Heir to Riverrun - Son of Hoster Tully",
          imageSuffix: "edmure-tully",
          wikiSuffix: "Edmure_Tully"
        },
        {
          name: "Brynden Tully",
          description: "Lord of Riverrun - Head of House Tully - Brother of Hoster Tully",
          imageSuffix: "brynden-tully",
          wikiSuffix: "Brynden_Tully"
        }
      ]
    },
    // [7]
    {
      name: "Redwyne",
      wikiSuffix: "House_Redwyne",
      people: [
        {
          name: "Olenna (Redwyne) Tyrell",
          description: "Matriarch of House Tyrell - Queen of Thorns",
          imageSuffix: "olenna-tyrell",
          wikiSuffix: "Olenna_Tyrell"
        }
      ]
    },
    // [8]
    {
      name: "Freys",
      wikiSuffix: "House_Freys",
      people: [
        {
          name: "Walder Frey",
          description: "Lord of the Crossing - Head of House Frey",
          imageSuffix: "walder-frey",
          wikiSuffix: "Walder_Frey"
        }
      ]
    },
    // [9]
    {
      name: "Arryns",
      wikiSuffix: "House_Arryns",
      people: [
        {
          name: "Jon Arryn",
          description: "Lord of the Eyrie - Head of House Arryn - Warden of the East - Defender of the Vale",
          imageSuffix: "jon-arryn",
          wikiSuffix: "Jon_Arryn"
        }
      ]
    },
    // [10]
    {
      name: "Dothrakis",
      wikiSuffix: "House_Dothrakis",
      people: [
        {
          name: "Khal Drogo",
          description: "Leader of the Dothraki people - Dothraki Warlord - Married to Daenerys Targaryen",
          imageSuffix: "khal-drogo",
          wikiSuffix: "Drogo"
        }
      ]
    }
  ]



  // 1.  Get the first houses name

  console.log(gameOfThronesHouses[0].name);
  var hStark = gameOfThronesHouses[0].name;

  // 2.  Get the Lannister houses wikiSuffix

  console.log(gameOfThronesHouses[1].wikiSuffix);
  var lanWikSuf = gameOfThronesHouses[1].wikiSuffix;

  // 3.  Get the name Catelyn (Tully) Stark

  console.log(gameOfThronesHouses[6].people[0].name);
  var cMoney = gameOfThronesHouses[6].people[0].name;

  // 4.  Get the fourth houses, second persons description

  console.log(gameOfThronesHouses[3].people[1].description);
  var goldCrown = console.log(gameOfThronesHouses[3].people[1].description);

  // 5.  Get a list of all the houses names

  //houseList creates an array via .map map uses an anonymouse function passing in "element" (which is each element in the array), and from there I can return element.name
  var houseList = gameOfThronesHouses.map(function(element) { return element.name; });
  console.log("All houses: " + houseList.join(", "));

  // 6.  Get a list of all the peoples names
  var peopleArrays = gameOfThronesHouses.map(function(element) { return element.people.map( function(subel) { return subel.name }) });
  console.log("All people: " + peopleArrays.join().split(",").join(", "));
