const goPaths = [
  [
    { latitude: 37.86602102736735, longitude: 127.7487168858128 },
    { latitude: 37.86597308488341, longitude: 127.7488935186692 },
    { latitude: 37.86614964295406, longitude: 127.7490565384393 },
    { latitude: 37.86678585336956, longitude: 127.7497484741482 },
    { latitude: 37.8675122104588, longitude: 127.7502192741921 },
    { latitude: 37.86768578732872, longitude: 127.7505765153803 },
    { latitude: 37.86782145734462, longitude: 127.7506654307179 },
    { latitude: 37.86852019855936, longitude: 127.7504131658332 },
    { latitude: 37.86828592942151, longitude: 127.7493358897203 },
    { latitude: 37.86829413750795, longitude: 127.7483808023067 },
    { latitude: 37.86842552417284, longitude: 127.748133972292 },
    { latitude: 37.8691361100833, longitude: 127.7479906125434 },
    { latitude: 37.86945696412096, longitude: 127.7477231422472 },
    { latitude: 37.86974655590431, longitude: 127.7471499915645 },
    { latitude: 37.86978732532678, longitude: 127.744430111889 },
    { latitude: 37.87003811140247, longitude: 127.7441808930695 },
    { latitude: 37.87053268769021, longitude: 127.7440742483129 },
    { latitude: 37.87080625742522, longitude: 127.7429323847283 },
    { latitude: 37.86921499456311, longitude: 127.7423346338157 },
    { latitude: 37.86789606289946, longitude: 127.7401145101411 },
    { latitude: 37.86660363771815, longitude: 127.7412913576611 },
    { latitude: 37.86668528877598, longitude: 127.7417594720057 },
  ],
]
const comePaths = [
  [
    { latitude: 37.86668528877598, longitude: 127.7417594720057 },
    { latitude: 37.86697519175282, longitude: 127.7421183688011 },
    { latitude: 37.86757686408449, longitude: 127.7419640398661 },
    { latitude: 37.86842978715524, longitude: 127.7412321446482 },
    { latitude: 37.86913824340649, longitude: 127.7424416865173 },
    { latitude: 37.8706700980536, longitude: 127.7429948000515 },
    { latitude: 37.87043666517553, longitude: 127.7439639261447 },
    { latitude: 37.87000148736363, longitude: 127.7440542486459 },
    { latitude: 37.86968031855783, longitude: 127.7443934480805 },
    { latitude: 37.86963159524052, longitude: 127.7471538373186 },
    { latitude: 37.86938838496117, longitude: 127.7476295124839 },
    { latitude: 37.8691465521502, longitude: 127.7478483565658 },
    { latitude: 37.86839857651218, longitude: 127.747993869216 },
    { latitude: 37.86817916507559, longitude: 127.7484003578467 },
    { latitude: 37.86817099622093, longitude: 127.7493619124457 },
    { latitude: 37.86837243808474, longitude: 127.7503169002782 },
    { latitude: 37.86782919980846, longitude: 127.7505129689854 },
    { latitude: 37.86774889503635, longitude: 127.7504744051104 },
    { latitude: 37.8675906313633, longitude: 127.7501590667835 },
    { latitude: 37.86683477227245, longitude: 127.7496593063718 },
    { latitude: 37.86625288761761, longitude: 127.7489942393487 },
    { latitude: 37.86637706417435, longitude: 127.7487638474067 },
    { latitude: 37.86624257982016, longitude: 127.7485801820109 },
    { latitude: 37.86607798157161, longitude: 127.7485886996954 },
  ],
]
const locations = [
  {
    name: '운행시작 [미래도서관]',
    image: require('../../assets/public/map/1.jpg'),
    coords: { latitude: 37.86602102736735, longitude: 127.7487168858128 },
    color: '#FF5757',
  },
  {
    name: '동생대2호관',
    image: require('../../assets/public/map/2.jpg'),
    coords: { latitude: 37.868289, longitude: 127.749243 },
    color: '#FF5757',
  },
  {
    name: '경영대2호관(기숙사행)',
    image: require('../../assets/public/map/3.jpg'),
    coords: { latitude: 37.86974, longitude: 127.746166 },
    color: '#FF5757',
  },
  {
    name: '미래광장(기숙사행)',
    image: require('../../assets/public/map/4.jpg'),
    coords: { latitude: 37.87061, longitude: 127.743802 },
    color: '#FF5757',
  },
  {
    name: '백록관',
    image: require('../../assets/public/map/5.jpg'),
    coords: { latitude: 37.868834, longitude: 127.741717 },
    color: '#FF5757',
  },
  {
    name: '회차',
    image: require('../../assets/public/map/6.jpg'),
    coords: { latitude: 37.86668528877598, longitude: 127.7417594720057 },
    color: '#2c3e50',
  },
  {
    name: '함인섭광장',
    image: require('../../assets/public/map/7.jpg'),
    coords: { latitude: 37.8685755, longitude: 127.74155 },
    color: '#38B6FF',
  },
  {
    name: '미래광장(미도행)',
    image: require('../../assets/public/map/8.jpg'),
    coords: { latitude: 37.8705345, longitude: 127.7434255 },
    color: '#38B6FF',
  },
  {
    name: '경영대2호관(미도행)',
    image: require('../../assets/public/map/9.jpg'),
    coords: { latitude: 37.8696339, longitude: 127.7465747 },
    color: '#38B6FF',
  },
  {
    name: '의생대',
    image: require('../../assets/public/map/10.jpg'),
    coords: { latitude: 37.8682864, longitude: 127.7498744 },
    color: '#38B6FF',
  },
  {
    name: '운행종료',
    image: require('../../assets/public/map/11.jpg'),
    coords: { latitude: 37.86607798157161, longitude: 127.7485886996954 },
    color: '#38B6FF',
  },
]

export { goPaths, comePaths, locations }
