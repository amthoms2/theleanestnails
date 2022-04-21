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
