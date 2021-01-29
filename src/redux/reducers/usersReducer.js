const TEST_DATA = [
  {
    id: 1,
    name: 'Leanne Graham',
    email: 'Sincere@april.biz',
    isFave: false,
    imageURL:
      'https://t3.ftcdn.net/jpg/01/44/83/50/360_F_144835094_qVg3WPsSEt8VeHPZmxgT5l9Mo6edX1SD.jpg',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      imageUrl:
        'https://infatuation.imgix.net/media/images/guides/the-bar-greatest-hits-list-best-bars-in-sf/banners/1567201728.73.jpg?auto=format&fit=max&h=1200&w=3200',
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    email: 'Shanna@melissa.tv',
    isFave: true,
    imageURL:
      'https://www.ksat.com/resizer/w54svhnp16TLiQGwUPmWzcdYsSc=/900x600/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/cloudfront-us-east-1.images.arcpublishing.com/gmg/DJN5YBFF5FHEPDZRM4I5HL6QBE.jpg',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      imageUrl:
        'https://lh3.googleusercontent.com/DqORfiCiYpiBwVC8E20bybzDcUPByVcxyun5TjxoBsm1mAqEU44wXF3LPVC4RauTPGS4PN5u=w1080-h608-p-no-v0',
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    email: 'Nathan@yesenia.net',
    isFave: true,
    imageURL:
      'https://www.thespiritsbusiness.com/content/http://www.thespiritsbusiness.com/media/2018/03/Jillian-Vose.jpg',
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: {
        lat: '-68.6102',
        lng: '-47.0653',
      },
    },
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: {
      imageUrl:
        'https://cdn.theculturetrip.com/wp-content/uploads/2016/09/main-bar-at-tir-na-nog.jpg',
      name: 'Romaguera-Jacobson',
      catchPhrase: 'Face to face bifurcated interface',
      bs: 'e-enable strategic applications',
    },
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    email: 'Julianne.OConner@kory.org',
    isFave: false,
    imageURL: 'https://c.stocksy.com/a/dtYA00/z9/2517425.jpg',

    address: {
      street: 'Hoeger Mall',
      suite: 'Apt. 692',
      city: 'South Elvis',
      zipcode: '53919-4257',
      geo: {
        lat: '29.4572',
        lng: '-164.2990',
      },
    },
    phone: '493-170-9623 x156',
    website: 'kale.biz',
    company: {
      imageUrl:
        'https://www.discoverlosangeles.com/sites/default/files/business/black-market-liquor-bar/h_2000-crm-la-black-market-liquor-bar-99c6fb1e5056a36_99c6ffd5-5056-a36f-23d128f6fc6c91bb.jpg',
      name: 'Robel-Corkery',
      catchPhrase: 'Multi-tiered zero tolerance productivity',
      bs: 'transition cutting-edge web services',
    },
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    email: 'Lucio_Hettinger@annie.ca',
    isFave: false,
    imageURL:
      'https://i.ndtvimg.com/i/2018-03/working-woman_650x400_71522063014.jpg',
    address: {
      street: 'Skiles Walks',
      suite: 'Suite 351',
      city: 'Roscoeview',
      zipcode: '33263',
      geo: {
        lat: '-31.8129',
        lng: '62.5342',
      },
    },
    phone: '(254)954-1289',
    website: 'demarco.info',
    company: {
      imageUrl:
        'https://theexoticbean.com/wp-content/uploads/2016/02/rosette_pattern_coffee_art.png',
      name: 'Keebler LLC',
      catchPhrase: 'User-centric fault-tolerant solution',
      bs: 'revolutionize end-to-end systems',
    },
  },
  {
    id: 6,
    name: 'Den Schulist',
    email: 'Karley_Dach@jasper.info',
    isFave: false,
    imageURL:
      'https://tribune-reloaded.s3.amazonaws.com/media/images/2132901-workingwoman-1578482365/2132901-workingwoman-1578482365.png',
    address: {
      street: 'Norberto Crossing',
      suite: 'Apt. 950',
      city: 'South Christy',
      zipcode: '23505-1337',
      geo: {
        lat: '-71.4197',
        lng: '71.7478',
      },
    },
    phone: '1-477-935-8478 x6430',
    website: 'ola.org',
    company: {
      imageUrl:
        'https://searchengineland.com/figz/wp-content/seloads/2018/09/writer-writing-ss-1920.jpg',
      name: 'Considine-Lockman',
      catchPhrase: 'Synchronised bottom-line interface',
      bs: 'e-enable innovative applications',
    },
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    email: 'Telly.Hoeger@billy.biz',
    isFave: true,
    imageURL:
      'https://image.shutterstock.com/image-photo/young-beautiful-woman-wearing-fashion-260nw-1664221873.jpg',
    address: {
      street: 'Rex Trail',
      suite: 'Suite 280',
      city: 'Howemouth',
      zipcode: '58804-1099',
      geo: {
        lat: '24.8918',
        lng: '21.8984',
      },
    },
    phone: '210.067.6132',
    website: 'elvis.io',
    company: {
      imageUrl:
        'https://expertphotography.com/wp-content/uploads/2020/07/social-media-for-photographers-follow-1.jpg',
      name: 'Johns Group',
      catchPhrase: 'Configurable multimedia task-force',
      bs: 'generate enterprise e-tailers',
    },
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    isFave: false,
    imageURL:
      'https://latimesblogs.latimes.com/.a/6a00d8341c630a53ef0133f40266e8970b-pi',
    address: {
      street: 'Ellsworth Summit',
      suite: 'Suite 729',
      city: 'Aliyaview',
      zipcode: '45169',
      geo: {
        lat: '-14.3990',
        lng: '-120.7677',
      },
    },
    phone: '586.493.6943 x140',
    website: 'jacynthe.com',
    company: {
      imageUrl:
        'https://www.esquireme.com/public/images/2019/03/25/Torno-Subito-Massimo-Bottura-Dubai-w-Hotel-Palm-(2).jpg',
      name: 'Abernathy Group',
      catchPhrase: 'Implemented secondary concept',
      bs: 'e-enable extensible e-tailers',
    },
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    email: 'Chaim_McDermott@dana.io',
    isFave: true,
    imageURL:
      'https://koreyhowellphotography.com/wp-content/uploads/2017/09/AdobeStock_122362963-1028x675.jpg',
    address: {
      street: 'Dayna Park',
      suite: 'Suite 449',
      city: 'Bartholomebury',
      zipcode: '76495-3109',
      geo: {
        lat: '24.6463',
        lng: '-168.8889',
      },
    },
    phone: '(775)976-6794 x41206',
    website: 'conrad.com',
    company: {
      imageUrl:
        'https://infatuation.s3.amazonaws.com/media/images/guides/coffee-shops-nyc-for-doing-work/NoahDevereaux_CoffeeShops_028_DoubleDutch.JPG',
      name: 'Yost and Sons',
      catchPhrase: 'Switchable contextually-based project',
      bs: 'aggregate real-time technologies',
    },
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    email: 'Rey.Padberg@karina.biz',
    isFave: false,
    imageURL:
      'https://noobpreneur.com/wp-content/uploads/2016/07/women-entrepreneur.jpg',
    address: {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
      geo: {
        lat: '-38.2386',
        lng: '57.2232',
      },
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
      imageUrl:
        'https://buffer.com/resources/content/images/wp-content/uploads/2018/03/nafinia-putra-59655-unsplash.jpg',
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models',
    },
  },
];

export default (state = [...TEST_DATA], action) => {
  const stateCopy = { ...state };
  switch (action.type) {
    default:
      return state;
  }
};
