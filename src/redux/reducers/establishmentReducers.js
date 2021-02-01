const TEST_DATA = [
  {
    id: '401fa5c1-8e45-4b14-9604-8693797b9dd0',
    name: 'Coffee Shop',
    city: 'New Rhettbury',
    isOpen: true,
    rating: 5,
    imageUrl:
      'https://media3.s-nbcnews.com/j/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p_67dfb6820f7d3898b5486975903c2e51.fit-1240w.jpg',
  },
  {
    id: '281eaef1-2537-4319-9201-d14579dd730b',
    name: 'Club',
    city: 'West Rae',
    isOpen: false,
    rating: 3,
    imageUrl:
      'https://www.faceclubbucharest.com/wp-content/uploads/2017/11/face_club_bucharest_00009-1150x650.jpg',
  },
  {
    id: '01d1f085-6edd-40a6-9c8f-26c1b7253062',
    name: 'Barbershop',
    city: 'East Clintonbury',
    isOpen: false,
    rating: 3.4,
    imageUrl:
      'https://parkerbarber.com/wp-content/uploads/2017/10/parker-barber-blog.png',
  },
  {
    id: '825bcda8-7021-481f-ba2c-0341aede6ebf',
    name: 'Salon',
    city: 'Quigleystad',
    isOpen: true,
    rating: 3.5,
    imageUrl: 'https://www.thepostoakhotel.com/img/wellness/salon-hero-7.jpg',
  },
  {
    id: 'f49eb496-3d31-40a0-a671-0952e3edb7ab',
    name: 'Restaurant',
    city: 'East Cierra',
    isOpen: true,
    rating: 5,
    imageUrl:
      'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
  },
  {
    id: '5daac3b3-ea03-48ad-9a72-15c71621bf16',
    name: 'Coffee shop',
    city: 'Madalynburgh',
    isOpen: true,
    rating: 3.7,
    imageUrl:
      'https://buffer.com/resources/content/images/wp-content/uploads/2018/03/nafinia-putra-59655-unsplash.jpg',
  },
  {
    id: 'fb5defee-0070-4e79-bb93-7a92b578e973',
    name: 'Coffee Shop',
    city: 'Ferryfurt',
    isOpen: true,
    rating: 5,
    imageUrl:
      'https://infatuation.s3.amazonaws.com/media/images/guides/coffee-shops-nyc-for-doing-work/NoahDevereaux_CoffeeShops_028_DoubleDutch.JPG',
  },
];

export default (state = [...TEST_DATA], action) => {
  const stateCopy = { ...state };
  switch (action.type) {
    default:
      return state;
  }
};
