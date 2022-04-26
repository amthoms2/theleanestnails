export const aboutObj = {
  id: 'about',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topline: 'Aleana Morris',
  headline: 'JOB TITLE PLEASE PUT HERE!',
  description: 'Ask Leana for description of company',
  buttonLabel: 'Contact Me',
  imgStart: true,
  img: require('./media/leanas.jpg').default,
  alt: 'drawing of female character',
  dark: false,
  primary: false,
  darkText: true,
};

export const servicesObj = {
  id: 'services',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topline: 'Services',
  headline: 'SERVICES',
  description: 'DESCRIPTION OF SERVICES',
  buttonLabel: 'Read More',
  imgStart: false,
  img: require('./media/options.png').default,
  alt: 'list of services',
  dark: true,
  primary: true,
  darkText: false,
};

export const galleryObj = {
  id: 'gallery',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  // topline: 'Aleana Morris',
  headline: 'Gallery',
  // description: 'Ask Leana for description of company',
  buttonLabel: 'View',
  imgStart: true,
  img: require('./media/gallery.png').default,
  alt: 'drawing of female character',
  dark: false,
  primary: false,
  darkText: true,
};

export const services = [
  {
    id: 1,
    name: 'Manicure 1',
  },
  {
    id: 2,
    name: 'Manicure 2',
  },
  {
    id: 3,
    name: 'Manicure 3',
  },
  {
    id: 4,
    name: 'Manicure 4',
  },
  {
    id: 5,
    name: 'Manicure 5',
  },
  {
    id: 6,
    name: 'Manicure 6',
  },
];

// *****************ADMIN****************
export const ordersRowData = [
  {
    id: 123,
    products: ['Cinderella Press Ons'],
    img: require('./media/nailflower.jpg').default,
    date: '1 March',
    customer: 'Dana Scully',
    amount: 65,
    method: 'Online Payment',
    status: 'Approved',
  },

  {
    id: 456,
    products: ['Aladdin Press Ons'],
    customer: 'Thonas Mor',
    img: require('./media/leana.png').default,
    date: '1 March',
    amount: 75,
    method: 'Online Payment',
    status: 'Pending',
  },

  {
    id: 789,
    products: ['Hawaian Press Ons'],
    customer: 'Tommy Bahama',
    img: require('./media/lighting.jpg').default,
    date: '1 March',
    amount: 45,
    method: 'Cash',
    status: 'Approved',
  },

  {
    id: 321,
    products: ['Michael Scott Press Ons'],
    customer: 'Michael Scott',
    img: require('./media/options.png').default,
    date: '1 March',
    amount: 85,
    method: 'Online Payment',
    status: 'Pending',
  },
];

export const productsRowsData = [
  {
    id: 1,
    title: 'Cinderella Press Ons',
    img: require('./media/nailflower.jpg').default,
    description: 'these are great',
    inStock: 'true',
    quantity: 12,
    price: 55,
  },

  {
    id: 2,
    title: 'Aladdin Press Ons',
    img: require('./media/options.png').default,
    description: 'these are great',
    inStock: 'true',
    quantity: 1,
    price: 45,
  },

  {
    id: 3,
    title: 'Princess Tiana Press Ons',
    img: require('./media/lighting.jpg').default,
    description: 'these are great',
    inStock: 'true',
    quantity: 1,
    price: 49,
  },

  {
    id: 4,
    title: 'The Office Custom Press Ons',
    img: require('./media/leana.png').default,
    description: 'these are great',
    inStock: 'false',
    quantity: 0,
    price: 35,
  },
];


export const bookingsData = [
  {
    id: '6260e3ccd20deb0fbba549d3',
    name: 'Michael Scott',
    email: 'dm@gmail.com',
    number: '555-555-5555',
    comments: 'howdy partner',
    date: '2022-04-21T16:56:47.000+00:00',
    time: '11:30AM',
    services: ['Pedicure', 'Manicure'],
    availability: 'true',
  },
  {
    id: '5260edwld20deb0fbba549d3',
    name: 'Raven Thomas',
    email: 'rt@gmail.com',
    number: '545-554-5555',
    comments: 'skids',
    date: '2022-04-22T16:56:47.000+00:00',
    time: '10:30AM',
    services: ['Manicure'],
    availability: 'true',
  },
  {
    id: '1230edwld20deb0fbba549d3',
    name: 'Pirate',
    email: 'pirate@gmail.com',
    number: '225-554-5555',
    comments: 'ahoy',
    date: '2022-04-20T16:56:47.000+00:00',
    time: '10:00AM',
    services: ['Manicure'],
    availability: 'true',
  }
]

export const timeSlots = [
  {
    _id: '6261cf3978edbe9ebf09b7c8',
    date: '2022-04-29T17:00:04.000+00:00',
    isAvailable: 'true'
  },
  {
    _id: '6262de069152fdc432a3c4c1',
    date: '2022-04-28T05:00:17.000+00:00',
    isAvailable: 'false'
  },


]
