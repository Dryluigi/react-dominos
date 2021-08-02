const DUMMY_PIZZAS = [
  {
    id: '1',
    name: 'American Classic Cheeseburger',
    description: 'Roti pizza dengan ketebalan sedang, Lembut di bagian dalam namun renyah di bagian luar.',
    image: 'american-classic-cheeseburger.png',
    category: 'premium',
    menu: 'pizza',
    price: 46000,
    variant: {
      except: {
        sizeIds: [],
        crustIds: [],
      },
      default: {
        sizeId: '2', 
        crustId: '4'
      },
    },
  },
  {
    id: '2',
    name: 'Chicken Dominator',
    description: 'Roti pizza dengan ketebalan sedang, Lembut di bagian dalam namun renyah di bagian luar.',
    image: 'chicken-dominator.png',
    category: 'premium',
    menu: 'pizza',
    price: 56000,
    variant: {
      except: {
        sizeIds: [],
        crustIds: [],
      },
      default: {
        sizeId: '2', 
        crustId: '4'
      },
    },
  },
  {
    id: '3',
    name: 'Grilled Beef Supreme',
    description: 'Roti pizza dengan ketebalan sedang, Lembut di bagian dalam namun renyah di bagian luar.',
    image: 'grill-beef-supreme.png',
    category: 'premium',
    menu: 'pizza',
    price: 59000,
    variant: {
      except: {
        sizeIds: [],
        crustIds: [],
      },
      default: {
        sizeId: '2', 
        crustId: '4'
      },
    },
  },
  {
    id: '4',
    name: 'Cheesy Meatball Blast',
    description: 'Roti pizza dengan ketebalan sedang, Lembut di bagian dalam namun renyah di bagian luar.',
    image: 'meatballpizzathumbnail.png',
    category: 'premium',
    menu: 'pizza',
    price: 56000,
    variant: {
      except: {
        sizeIds: [],
        crustIds: [],
      },
      default: {
        sizeId: '2', 
        crustId: '4'
      },
    },
  },
  {
    id: '5',
    name: 'Mexican Chicken Nachos',
    description: 'Roti pizza dengan ketebalan sedang, Lembut di bagian dalam namun renyah di bagian luar.',
    image: 'mexicanchickennachos.png',
    category: 'premium',
    menu: 'pizza',
    price: 59000,
    variant: {
      except: {
        sizeIds: [],
        crustIds: [],
      },
      default: {
        sizeId: '2', 
        crustId: '4'
      },
    },
  },
  {
    id: '6',
    name: 'American All Star',
    description: 'Roti pizza dengan ketebalan sedang, Lembut di bagian dalam namun renyah di bagian luar.',
    image: 'american-allstar.png',
    category: 'premium',
    menu: 'pizza',
    price: 59000,
    variant: {
      except: {
        sizeIds: [],
        crustIds: [],
      },
      default: {
        sizeId: '2', 
        crustId: '4'
      },
    },
  },
  {
    id: '7',
    name: 'Veggie Mania',
    description: 'Roti pizza dengan ketebalan sedang, Lembut di bagian dalam namun renyah di bagian luar.',
    image: 'veggie-mania.png',
    category: 'premium',
    menu: 'pizza',
    price: 59000,
    variant: {
      except: {
        sizeIds: [],
        crustIds: [],
      },
      default: {
        sizeId: '2', 
        crustId: '4'
      },
    },
  },
  {
    id: '8',
    name: 'American Frankie Sausage',
    description: 'Roti pizza dengan ketebalan sedang, Lembut di bagian dalam namun renyah di bagian luar.',
    image: 'americanfrankiesausage.png',
    category: 'premium',
    menu: 'pizza',
    price: 67000,
    variant: {
      except: {
        sizeIds: [],
        crustIds: [],
      },
      default: {
        sizeId: '2', 
        crustId: '4'
      },
    },
  },
  {
    id: '9',
    name: 'Ultimate Cheese Melt',
    description: 'Roti pizza dengan ketebalan sedang, Lembut di bagian dalam namun renyah di bagian luar.',
    image: 'ultimatecheesemeltnew.png',
    category: 'premium',
    menu: 'pizza',
    price: 59000,
    variant: {
      except: {
        sizeIds: [],
        crustIds: [],
      },
      default: {
        sizeId: '2', 
        crustId: '4'
      },
    },
  },
  {
    id: '10',
    name: 'Tasty Stuffed Pocket Spicy Chiken Sausage',
    description: 'Roti harum diisi dengan daging ayam yang telah dibumbu oleh bumbu original.',
    image: 'stuffedpocketchicken1_1.png',
    menu: 'sides',
    price: 10000,
  },
  {
    id: '11',
    name: 'Tasty Stuffed Pocket Spicy Chiken Sausage with Sausage',
    description: 'Roti harum diisi dengan daging ayam yang telah dibumbu oleh bumbu original.',
    image: 'stuffedpocketchicken1_2.png',
    menu: 'sides',
    price: 13000,
  },
  {
    id: '12',
    name: 'BBQ Meatball Potato Bake',
    description: 'Bola bola daging mantap.',
    image: 'meatball.png',
    menu: 'sides',
    price: 35000,
  },
  {
    id: '13',
    name: 'Potato Wedges',
    description: 'Potongan Kentang dengan Saus Domino\'s Pizza',
    image: 'potato-wedges.png',
    menu: 'sides',
    price: 14000,
  },
  {
    id: '14',
    name: 'Mac\'N Truffle Alfredo Beef',
    description: 'Mac\'N Truffle Alfredo Beef',
    image: 'mac_ntrufflealfredobeefbig.png',
    menu: 'pasta',
    price: 30000,
  },
  {
    id: '15',
    name: 'Spicy Tuna Mac\'N Cheese Extra Cheese',
    description: 'Spicy Tuna Mac\'N Cheese Extra Cheese',
    image: 'spicy-tuna-mac_n-cheese.png',
    menu: 'pasta',
    price: 34000,
  },
  {
    id: '16',
    name: 'Spicy Tuna Mac\'N Cheese',
    description: 'Spicy Tuna Mac\'N Cheese',
    image: 'spicy-tuna-mac_n-cheese_1.png',
    menu: 'pasta',
    price: 30000,
  },
  {
    id: '17',
    name: 'Chiken Creamy Spaghetti',
    description: 'Chicken Creamy Spaghetti',
    image: 'chicken-creamy-spaghetti.png',
    menu: 'pasta',
    price: 30000,
  },
  {
    id: '18',
    name: 'Chocolate Lava',
    description: 'Coklat Lava Manis',
    image: 'chocolate-lava.png',
    menu: 'dessert',
    price: 30000,
  },
  {
    id: '19',
    name: 'Habanero Boneless Wings (6 pcs)',
    description: 'Habanero Boneless Wings (6 pcs)',
    image: 'habanerobonelesswings6.png',
    menu: 'chicken',
    price: 45000,
  },
  {
    id: '20',
    name: 'Habanero Boneless Wings (3 pcs)',
    description: 'Habanero Boneless Wings (3 pcs)',
    image: 'habanerobonelesswings3.png',
    menu: 'chicken',
    price: 22000,
  },
  {
    id: '21',
    name: 'Chick and Cheese Ring (10 pcs)',
    description: 'Chick and Cheese Ring (10 pcs)',
    image: 'chickandcheeserings10.png',
    menu: 'chicken',
    price: 43000,
  },
  {
    id: '22',
    name: 'Chick and Cheese Ring (6 pcs)',
    description: 'Chick and Cheese Ring (6 pcs)',
    image: 'chickandcheeserings6.png',
    menu: 'chicken',
    price: 26000,
  },
  {
    id: '23',
    name: 'Cheese Calzone Sticks Extra Cheese',
    description: '8 pieces Cheese Calzone Sticks with Extra Cheese',
    image: 'cheezycalzonesticks_1.png',
    menu: 'bread',
    price: 36000,
  },
  {
    id: '24',
    name: 'Cheese Calzone Sticks',
    description: '8 pieces Cheese Calzone Sticks',
    image: 'cheezycalzonesticks_2.png',
    menu: 'bread',
    price: 31000,
  },
  {
    id: '25',
    name: 'Choco Bread Sticks',
    description: '8 Pcs Roti Coklat Sticks',
    image: 'choco-bread-stick.png',
    menu: 'bread',
    price: 25000,
  },
  {
    id: '26',
    name: 'Garlic Cheesy Rolls (2 pcs)',
    description: 'Roti bawang lembut berisi 2 potong',
    image: 'garlic-cheesy-rolls.png',
    menu: 'bread',
    price: 20000,
  },
  {
    id: '27',
    name: 'Beef & Rice',
    description: '',
    image: 'regular-black-pepper-rice.png',
    menu: 'rice',
    price: 16000,
  },
  {
    id: '28',
    name: 'Chicken & Rice',
    description: '',
    image: 'crispy-chicken-strips-rice.png',
    menu: 'rice',
    price: 12000,
  },
  {
    id: '29',
    name: 'Chicken Delight',
    description: 'Roti pizza dengan ketebalan sedang, Lembut di bagian dalam namun renyah di bagian luar.',
    image: 'chicken-delight.png',
    category: 'favourite-pizza',
    menu: 'pizza',
    price: 89000,
    variant: {
      except: {
        sizeIds: [],
        crustIds: [],
      },
      default: {
        sizeId: '2', 
        crustId: '4'
      },
    },
  },
  {
    id: '30',
    name: 'Sweet Boba Butterscotch',
    description: 'Roti pizza dengan ketebalan sedang, Lembut di bagian dalam namun renyah di bagian luar.',
    image: 'sweetbobabutterscotch.png',
    category: 'favourite-pizza',
    menu: 'pizza',
    price: 90000,
    variant: {
      except: {
        sizeIds: ['3'],
        crustIds: ['11', '10', '9', '8', '7'],
      },
      default: {
        sizeId: '2', 
        crustId: '4'
      },
    },
  },
  {
    id: '31',
    name: 'Double Beef Burger',
    description: 'Roti pizza dengan ketebalan sedang, Lembut di bagian dalam namun renyah di bagian luar.',
    image: 'double-beef-burger.png',
    category: 'favourite-pizza',
    menu: 'pizza',
    price: 103000,
    variant: {
      except: {
        sizeIds: [],
        crustIds: [],
      },
      default: {
        sizeId: '2', 
        crustId: '4'
      },
    },
  },
  {
    id: '32',
    name: 'Chili Chicken',
    description: 'Roti pizza dengan ketebalan sedang, Lembut di bagian dalam namun renyah di bagian luar.',
    image: 'chili-chicken.png',
    category: 'pizza-mania',
    menu: 'pizza',
    price: 103000,
    variant: {
      except: {
        sizeIds: [],
        crustIds: [],
      },
      default: {
        sizeId: '2', 
        crustId: '4'
      },
    },
  },
  {
    id: '33',
    name: 'Chicken Sausage',
    description: 'Roti pizza dengan ketebalan sedang, Lembut di bagian dalam namun renyah di bagian luar.',
    image: 'chicken-sausage.png',
    category: 'pizza-mania',
    menu: 'pizza',
    price: 87000,
    variant: {
      except: {
        sizeIds: [],
        crustIds: [],
      },
      default: {
        sizeId: '2', 
        crustId: '4'
      },
    },
  },
  {
    id: '34',
    name: 'Beef Rasher',
    description: 'Roti pizza dengan ketebalan sedang, Lembut di bagian dalam namun renyah di bagian luar.',
    image: 'beef-rasher.png',
    category: 'pizza-mania',
    menu: 'pizza',
    price: 78000,
    variant: {
      except: {
        sizeIds: [],
        crustIds: [],
      },
      default: {
        sizeId: '2', 
        crustId: '4'
      },
    },
  },
  {
    id: '35',
    name: 'Margherita',
    description: 'Roti pizza dengan ketebalan sedang, Lembut di bagian dalam namun renyah di bagian luar.',
    image: 'margherita.png',
    category: 'super-value',
    menu: 'pizza',
    price: 78000,
    variant: {
      except: {
        sizeIds: [],
        crustIds: [],
      },
      default: {
        sizeId: '2', 
        crustId: '4'
      },
    },
  },
  {
    id: '36',
    name: 'Beef Delight',
    description: 'Roti pizza dengan ketebalan sedang, Lembut di bagian dalam namun renyah di bagian luar.',
    image: 'beef-delight.png',
    category: 'super-value',
    menu: 'pizza',
    price: 80000,
    variant: {
      except: {
        sizeIds: [],
        crustIds: [],
      },
      default: {
        sizeId: '2', 
        crustId: '4'
      },
    },
  },
  {
    id: '37',
    name: 'Cheesy Sausage',
    description: 'Roti pizza dengan ketebalan sedang, Lembut di bagian dalam namun renyah di bagian luar.',
    image: 'cheesy-sausage.png',
    category: 'super-value',
    menu: 'pizza',
    price: 90000,
    variant: {
      except: {
        sizeIds: [],
        crustIds: [],
      },
      default: {
        sizeId: '2', 
        crustId: '4'
      },
    },
  },
  {
    id: '38',
    name: 'Chicken Pepperoni Feast',
    description: 'Roti pizza dengan ketebalan sedang, Lembut di bagian dalam namun renyah di bagian luar.',
    image: 'chicken-pepperoni-feast.png',
    category: 'super-value',
    menu: 'pizza',
    price: 70000,
    variant: {
      except: {
        sizeIds: [],
        crustIds: [],
      },
      default: {
        sizeId: '2', 
        crustId: '4'
      },
    },
  },
];

export default DUMMY_PIZZAS;