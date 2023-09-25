// // Categories:
// category: 'Smartwatches',
// category: 'FitnessTrackers',
// category: 'Headphones',
// category: 'SmartGlasses',
// category: 'VRHeadsets',
// category: 'FitnessApparel',

// category: 'Clothing',

const Products = {
  category: [
    {
      category: 'Smartwatches',
      data: [
        {
          id: 1,
          category: 'Smartwatches',
          name: 'Apple Watch Series 6',
          price: 399.99,
          image: require('../images/apple_watch.png'),
          description:
            'The ultimate smartwatch by Apple with advanced health features and a stunning display.',
        },
        {
          id: 2,
          category: 'Smartwatches',
          name: 'Samsung Galaxy Watch 4',
          price: 349.99,
          image: require('../images/samsung_galaxy_watch.jpg'),
          description:
            'A feature-packed smartwatch with a sleek design and long battery life by Samsung.',
        },
        {
          id: 3,
          category: 'Smartwatches',
          name: 'Samsung Galaxy Watch 4',
          price: 349.99,
          image: require('../images/samsung_galaxy_watch.jpg'),
          description:
            'A feature-packed smartwatch with a sleek design and long battery life by Samsung.',
        },
      ],
    },

    {
      category: 'FitnessTrackers',
      data: [
        {
          id: 11,
          category: 'FitnessTrackers',
          name: 'Fitbit Charge 4',
          price: 149.99,
          image: require('../images/fitbit_charge.jpg'),
          description: 'An advanced fitness tracker with built-in GPS and heart rate monitoring.',
        },
        {
          id: 12,
          category: 'FitnessTrackers',
          name: 'Garmin Vivosmart 4',
          price: 129.99,
          image: require('../images/garmin_vivosmart.webp'),
          description: 'Slim and stylish fitness tracker with advanced health tracking features by Garmin.',
        },
      ],
    },
    {
      category: 'Headphones',
      data: [
        {
          id: 21,
          category: 'Headphones',
          name: 'Sony WH-1000XM4',
          price: 349.99,
          image: require('../images/sony_headphones.webp'),
          description: 'Industry-leading noise-canceling headphones with exceptional sound quality.',
        },
        {
          id: 22,
          category: 'Headphones',
          name: 'Bose QuietComfort 35 II',
          price: 299.99,
          image: require('../images/bose_headphones.webp'),
          description: 'Comfortable over-ear headphones with world-class noise cancellation.',
        },
      ],
    },
    {
      category: 'SmartGlasses',
      data: [
        {
          id: 31,
          category: 'SmartGlasses',
          name: 'Google Glass EE-2',
          price: 999.99,
          image: require('../images/google_glass.jpg'),
          description: 'Advanced smart glasses designed for enterprise use with AR capabilities.',
        },
        {
          id: 32,
          category: 'SmartGlasses',
          name: 'Microsoft HoloLens 2',
          price: 3499.99,
          image: require('../images/hololens.png'),
          description: 'Mixed reality smart glasses for professionals with cutting-edge technology.',
        },
      ],
    },
    {
      category: 'VRHeadsets',
      data: [
        {
          id: 41,
          category: 'VRHeadsets',
          name: 'Oculus Quest 2',
          price: 299.99,
          image: require('../images/oculus_quest.webp'),
          description: 'All-in-one virtual reality headset with wireless freedom and a vast content library.',
        },
        {
          id: 42,
          category: 'VRHeadsets',
          name: 'Sony PlayStation VR',
          price: 299.99,
          image: require('../images/psvr.jpg'),
          description: 'Immersive virtual reality experience for PlayStation gamers.',
        },
      ],
    },
    {
      category: 'FitnessApparel',
      data: [
        {
          id: 51,
          category: 'FitnessApparel',
          name: 'Nike Dri-FIT Jacket',
          price: 79.99,
          image: require('../images/nike_jacket.jpg'),
          description: 'Stay dry and comfortable while you run with this lightweight jacket from Nike.',
        },
        {
          id: 52,
          category: 'FitnessApparel',
          name: 'Adidas Ultra Runners',
          price: 149.99,
          image: require('../images/adidas_shoes.webp'),
          description: 'Experience ultimate comfort and energy return with these running shoes from Adidas.',
        },
      ],
    },
    {
      category: 'Clothing',
      data: [
        {
          id: 71,
          category: 'Clothing',
          name: 'Men\'s Casual Shirt',
          price: 49.99,
          image: require('../images/mens_shirt.jpg'),
          description: 'A comfortable and stylish casual shirt for men.',
        },
        {
          id: 72,
          category: 'Clothing',
          name: 'Women\'s Yoga Leggings',
          price: 59.99,
          image: require('../images/womens_leggings.webp'),
          description: 'Stretchable and breathable leggings perfect for yoga and workouts.',
        },
      ],
    },

    // --------------------------------------------------------------------------------------------------
  ],
};

export default Products;
