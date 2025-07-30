// Travel packages data for Zeet Tours and Travels
export interface TravelPackage {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  highlights: string[];
  included: string[];
  category: 'Cultural' | 'Hill Station' | 'Pilgrimage' | 'Wildlife' | 'International' | 'Nature & Adventure';
  bestTime: string;
  description: string;
  isActive: boolean; // Set to false for commented packages
  detailedPdfUrl?: string; // Optional PDF link
  detailedItinerary?: {
    title: string;
    days: {
      day: number;
      title: string;
      activities: string[];
      meals?: string[];
      accommodation?: string;
    }[];
  };
}

// Editable Categories Configuration
export const PACKAGE_CATEGORIES = [
  'All',
  'Cultural',
  'Hill Station',
  'Pilgrimage',
  'Wildlife',
  'International',
  'Nature & Adventure',
] as const;

export const travelPackages: TravelPackage[] = [
  // ACTIVE PACKAGES (16 visible packages - 11 domestic + 5 international)

  // DOMESTIC PACKAGES (11 packages)
  {
    id: 'Majulli-tour',
    title: 'Majuli Tour (Minimum 4 perople for a trip)',
    location: 'Majuli, Assam',
    duration: '1 day',
    price: 1600,
    rating: 4.8,
    reviewCount: 142,
    imageUrl: '/images/packages/majuli.png',
    highlights: ['Satras (Vaishnavite Monasteries)', 'Mask Making at Samaguri Satra', 'Bird Watching', 'Lush Green Landscapes', 'Sattriya Dance', 'Sunset by the River',],
    included: ['Breakfast', 'For 4 people (Car type - Suzuki Desire)', 'For 7 people (Car type - Toyota Innova', 'For more than 7 people (Car type - Force Traveller)'],
    category: 'Cultural',
    bestTime: 'October and March',
    description: 'Explore Majuli, the world’s largest river island nestled in the Brahmaputra River, known for its serene beauty and cultural richness.',
    isActive: true,
  },
  {
    id: 'Andaman-tour',
    title: 'Andaman Tour',
    location: 'Andaman',
    duration: '9 Days / 8 Nights',
    price: 70000,
    rating: 4.9,
    reviewCount: 18,
    imageUrl: '/images/packages/andaman.png',
    highlights: ['Portblair', 'Havelock', 'Neil', 'Elephanta','Baratang','Diglipur','Ross','Rangat'],
    included: ['Breakfast', 'Accomodation'],
    category: 'Nature & Adventure',
    bestTime: 'October to May',
    description: 'Experience crystal-clear waters, white sandy beaches, vibrant coral reefs, and untouched natural beauty in the Andaman Islands. From the historic charm of Cellular Jail to the turquoise lagoons of Havelock and Neil Island, this tour offers the perfect blend of adventure, relaxation, and island magic.',
    isActive: true,
    detailedPdfUrl: 'https://drive.google.com/file/d/1E69vLdX9VH1evoXTaYflzuWF6pCX4UE2/view?usp=sharing',
    detailedItinerary: {
      title: 'Complete Andaman Tour Itinerary',
      days: [
        {
          day: 1,
          title: 'ARRIVAL IN PORT BLAIR – CELLULAR JAIL, CORBYN’S COVE & LIGHT & SOUND SHOW',
          activities: [
            'Corbyn\'s Cove Beach',
            'Cellular Jail Light and Sound Show',
          ],
          meals: ['Breakfast'],
          accommodation: 'Night stay at Port Blair'
        },
        {
          day: 2,
          title: 'PORT BLAIR TO HAVELOCK WITH PRIVATE CRUISE',
          activities: [
            'Sightseeing- Kalaphathar Beach, Radhanagar Beach',
            'Havelock Jetty Pickup to Hotel Drop',
            'Kalaphathar Beach',
            'Radhanagar Beach'
          ],
          meals: ['Breakfast'],
          accommodation: 'Night stay at Havelock'
        },
        {
          day: 3,
          title: 'DAY TOUR TO ELEPHANTA BEACH',
          activities: [
            'Elephant Beach Sightseeing',
          ],
          meals: ['Breakfast'],
          accommodation: 'Night stay at Neil Island'
        },
        {
          day: 4,
          title: 'HAVELOCK TO NEIL BY PRIVATE CRUISE',
          activities: [
            'Bharatpur beach',
            'Laxmanpur beach',
            'Natural Bridge',
          ],
          meals: ['Breakfast'],
          accommodation: 'Night stay at Neil Island'
        },
        {
          day: 5,
          title: 'NEIL TO PORT BLAIR RETURN WITH PRIVATE CRUISE',
          activities: [
            'Neil Island to Port Blair Jetty Drop',
            'Port Blair Jetty',
            'Sightseeing- Chidiyatapu Beach',
          ],
          meals: ['Breakfast',]
        },
        {
          day: 6,
          title: 'PORTBLAIR TO DIGILPUR VIA BARATANG LIME STONE CAVE',
          activities: [
            'Sightseeing- Digilpur, Baratang Island',
            'Lime Stone Cave Andaman Island\'s Limestone cave formations and mangrove',
          ],
          meals: ['Breakfast',],
          accommodation: 'Night stay at Digilpur'
        },
        {
          day: 7,
          title: 'VISIT ROSS, SMITH, KALIPUR BEACH & DIGILPUR MARKET',
          activities: [
            'Ross & Smith Islands',
            'Kalipur Beach',
          ],
          meals: ['Breakfast',],
          accommodation: 'Night stay at Digilpur'
        },
        {
          day: 8,
          title: 'RANGAT TOUR & RETURN TO PORTBLAIR',
          activities: [
            'Sightseeing- Dhani Nallah Mangrove Walkway, Moricedera beach',
            'Moricedera',
          ],
          meals: ['Breakfast',],
          accommodation: 'Overnight Stay in Portblair'
        },
        {
          day: 9,
          title: 'DEPART FROM PORTBLAIR',
          activities: [
            'Drop to Port Blair Airport for Return Journey with a Wonderful Holiday Memories.',
          ],
        }
      ]
    }
  },
  {
    id: 'georgia-tour',
    title: 'Georgia Tour',
    location: 'Georgia, Caucasus',
    duration: '5 Days / 4 Nights',
    price: 45999,
    rating: 4.9,
    reviewCount: 17,
    imageUrl: '/images/packages/geogia.png',
    highlights: ['Kazbegi Mountains', 'Tbilisi Old Town', 'Georgian Cuisine',],
    included: ['4★ Hotel Stay (Twin Sharing)', 'Daily Breakfast', 'All Transfers & Tours with Guide', 'Airport Transfers', 'All Taxes'],
    category: 'International',
    bestTime: 'July to August ',
    description: 'Uncover the beauty of Georgia — a land where ancient history meets stunning natural landscapes. Explore the charming streets of Tbilisi, taste world-famous wines in Kakheti, and marvel at the mountain views of Kazbegi. From historic sites to warm hospitality, this journey offers a perfect blend of culture, adventure, and relaxation.',
    isActive: true,
    detailedItinerary: {
      title: 'Complete Georgia Tour Itinerary',
      days: [
        {
          day: 1,
          title: 'Arrival in Tbilisi & checkin',
          activities: [
            'Arrive in Georgia’s charming capital, Tbilisi, and transfer to your hotel. Settle in, relax, and get ready to explore the rich culture, history, and beauty the city has to offer.',
          ],
          meals: ['Breakfast'],
        },
        {
          day: 2,
          title: 'Tbilisi City Tour (Old Town, Landmarks)',
          activities: [
            'Discover the heart of Tbilisi as you explore its vibrant Old Town, historic landmarks, colorful streets, ancient churches, and panoramic viewpoints that showcase the city’s unique charm.',
          ],
          meals: ['Breakfast'],
        },
        {
          day: 3,
          title: 'Full Day Annauri – Zhinvali – Gudauri – Kazbegi Tour',
          activities: [
            'Embark on a scenic journey through the Caucasus Mountains, visiting the majestic Ananuri Fortress, the serene Zhinvali Reservoir, the ski resort town of Gudauri, and the iconic Gergeti Trinity Church in Kazbegi.',
          ],
          meals: ['Breakfast'],
        },
        {
          day: 4,
          title: ' Mtskheta, Jvari & Uplistsikhe Cave City Tour Or Optional: Kakheti Wine Tour',
          activities: [
            'Explore Georgia’s ancient heritage with a visit to Mtskheta, the spiritual heart of the country, the hilltop Jvari Monastery, and the fascinating rock-hewn Uplistsikhe Cave City or, Enjoy a relaxing day in Georgia’s renowned wine region, Kakheti — tasting traditional wines, visiting charming vineyards, and experiencing the country’s rich winemaking heritage.',
          ],
          meals: ['Breakfast'],
        },
        {
          day: 5,
          title: 'Check-out & Airport Transfer',
          activities: [
            'Conclude your journey with a smooth check-out and comfortable transfer to the airport, carrying memories of your Georgian adventure.',
          ],
          meals: ['Breakfast']
        },
      ]
    }
  },
  {
    id: 'Dhekiakhowa-and-Moinaporia-Namghar',
    title: 'Dhekiakhowa Bor Namghar and Moinaporia Namghar Tour (Minimum 4 people for a trip)',
    location: 'Jorhat - Assam',
    duration: 'Single day',
    price: 1400,
    rating: 4.9,
    reviewCount: 12,
    imageUrl: '/images/packages/MPandDKNam.png',
    highlights: ['Spiritual Visit', 'Historic Namghars', 'Eternal Lamp', 'Village Experience'],
    included: ['Dhekiakhowa Namgahr Visit', 'Moinapoira Namghar Visit', 'Transportation',],
    category: 'Pilgrimage',
    bestTime: 'October to March',
    description: 'Step into Assam’s deep spiritual roots with a visit to two of its most revered Namghars Dhekiakhowa Bor Namghar, established by the saint-reformer Madhavdev in the 16th century, is famous for its eternal oil lamp that has been burning for centuries. Nearby, Moinaporia Namghar offers a peaceful spiritual retreat, echoing centuries of Vaishnavite devotion and community prayer.',
    isActive: true
  },
  {
    id: 'dubai-package',
    title: 'Dubai Tour',
    location: 'Dubai',
    duration: '4 Night / 5 Days',
    price: 55000,
    rating: 4.9,
    reviewCount: 10,
    imageUrl: '/images/packages/dubai.png',
    highlights: ['Burj Khalifa Experience', 'Jumeirah Beach & Palm Jumeirah', 'Desert Safari Adventure', 'Dubai Mall & Souk Shopping'],
    included: ['Star Rated Hotels', '4 day Breakfast', '4 day Dinner','All transfers','Dubai City Tour', 'Burj Khalifa (123 Floors)', 'Desert Safari', 'Cruise with Dinner',],
    category: 'International',
    bestTime: 'November to March',
    description: 'Experience the magic of Dubai, where futuristic skyscrapers rise from golden deserts and luxury meets tradition. From the awe-inspiring Burj Khalifa to thrilling desert safaris, pristine beaches, world-class shopping, and rich cultural gems — this package promises adventure, relaxation, and unforgettable memories in one of the world’s most iconic destinations.',
    isActive: true
  },
  {
    id: 'Agnivav-mandir-and-sivsagar-tour',
    title: 'Agninav Shiv Mandir and Sivsagar Tour (Minimum 4 people for a trip)',
    location: 'Nazira and Sivasagar',
    duration: '1 day',
    price: 1300,
    rating: 4.7,
    reviewCount: 17,
    imageUrl: '/images/packages/agninavSB.png',
    highlights: ['Heritage Sites', 'Spiritual Experience', 'Cultural Exploration', 'Historical Architecture', 'Scenic Views', 'Local Insights'],
    included: ['Agninav Shiv Mandir Tour', 'Kareng Ghar Tour', 'Talatal Ghar Tour', 'Rang Ghar Tour', 'Shiva Dol Tour'],
    category: 'Cultural',
    bestTime: 'October to March',
    description: 'Explore Assam’s rich history and spirituality in one journey. Visit the modern Agninav Shiv Mandir, the royal Kareng Ghar, and the mysterious Talatal Ghar. Witness the grandeur of Rang Ghar, Asia’s oldest amphitheatre, and end with blessings at the iconic Shiva Dol.',
    isActive: true
  },
  {
    id: 'Vietnam-tour',
    title: 'Vietnam Tour',
    location: 'Vietnam',
    duration: '4 Nights',
    price: 31499,
    rating: 5,
    reviewCount: 14,
    imageUrl: '/images/packages/vietnam.png',
    highlights: ['3 Star Hotel stay', 'Daily Breakfast', 'Tour Guide', 'Tours and Transport',],
    included: ['Japanese Bridge Tour (Hoi An)', 'Lantern Night Boat ride (Hoi An)', 'Fujiyan Assembly (Hoi An)', 'Coconut village Tour(Da Nang)','Basket Boat ride (Da Nang)','My Khe beach (Da Nang)','City Tour (Da Nang)','Dragon Bridge Tour (Da Nang)','Ba Na Hills Exploration (Ba Nah)', 'Cable car rides (Ba Nah)','Golden Bridge-"Hands of God" Tour (Ba Nah)'],
    category: 'International',
    bestTime: 'February to April, August to October',
    description: 'Uncover the beauty of Central Vietnam with a journey through the lantern-lit streets of Hoi An, the coastal vibes of Da Nang, and the fairytale charm of Ba Na Hills. This tour blends history, culture, and stunning landscapes—perfect for travelers seeking both relaxation and adventure.',
    isActive: true,
    detailedPdfUrl: "https://drive.google.com/file/d/18794jCSzfAGf0IGe-jJmnyvHx_BQS5u2/view?usp=sharing"
  },
  {
    id: 'Athkhelia-Deopani',
    title: 'Athkhelia Namghar & Deopani Mandir Tour (Minimum 4 people for a trip)',
    location: 'Golaghat',
    duration: 'Single Day',
    price: 2000,
    rating: 4.6,
    reviewCount: 12,
    imageUrl: '/images/packages/deopani.png',
    highlights: ['Peaceful Atmosphere', 'Vaishnavite Heritage', 'Goddess Durga Temple', 'Cultural Experience', 'Lush Surroundings'],
    included: ['Athkhelia Namghar Visit', 'Deopani Mandir Visit', 'Transportation'],
    category: 'Pilgrimage',
    bestTime: 'October to March',
    description: 'Experience peace and devotion at Athkhelia Namghar, a historic Vaishnavite prayer hall near Golaghat. Then visit Deopani Mandir, a serene temple dedicated to Goddess Durga, set amid lush greenery. Ideal for a quiet spiritual retreat surrounded by nature.',
    isActive: true
  },
  {
    id: 'malinithan-jagannathtemple-tour',
    title: 'Malinithan, Jagannath Temple & Bogibeel Bridge Tour (Minimum 4 people for a trip)',
    location: 'Likabali, Dibrugarh',
    duration: 'Single Day',
    price: 1100,
    rating: 4.4,
    reviewCount: 32,
    imageUrl: '/images/packages/bogibeel.png',
    highlights: ['Temple Architecture', 'Mythological Site', 'Scenic Bridge Views', 'Photography Spots','Scenic Drive'],
    included: ['Transportation', 'Malinithan Tour', 'Jagannatth Temple Tour', 'Bogibeel Bridge Tour'],
    category: 'Pilgrimage',
    bestTime: 'October to March',
    description: 'Discover ancient legends at Malinithan, seek divine blessings at Jagannath Temple, and enjoy stunning views from the iconic Bogibeel Bridge—a perfect blend of history, spirituality, and scenic beauty.',
    isActive: true
  },
  {
    id: 'Nagaon-temples',
    title: 'Mahamrityunjay Temple and Batadrava Than Tour (Minimum 4 people for a trip)',
    location: 'Nagaon - Assam',
    duration: 'Single Day',
    price: 2950,
    rating: 4.7,
    reviewCount: 15,
    imageUrl: '/images/packages/Nagaontemples.png',
    highlights: ['Tallest Shivling', 'Spiritual Ambience', 'Birthplace of Guru Sankardev', 'Vaishnavite Heritage'],
    included: ['Transport', 'Mahamrityunjay Temple Tour', 'Batadrava Than Tour'],
    category: 'Pilgrimage',
    bestTime: 'June to September',
    description: 'Visit the majestic Mahamrityunjay Temple, home to the world’s tallest Shivling, and explore Batadrava Than, the birthplace of Srimanta Sankardev and a center of Vaishnavite faith. A perfect spiritual retreat blending divine energy and Assamese cultural heritage',
    isActive: true
  },
  {
    id: 'Golden-padoga-parsuram',
    title: 'Golden Pagoda, Parshuram Kund & Dhola–Sadiya Bridge Tour (Minimum 4 people for a trip)',
    location: 'Arunachal Pradesh',
    duration: 'Single Day',
    price: 1500,
    rating: 4.6,
    reviewCount: 43,
    imageUrl: '/images/packages/Goldenpadoga.png',
    highlights: ['Buddhist Architecture', 'Longest River Bridge', 'River & Hill Views', 'Peaceful Atmosphere', 'Scenic Drive'],
    included: ['Transportation', 'Golden Pagoda Visit', 'Parshuram Kund Tour'],
    category: 'Hill Station',
    bestTime: 'November to February',
    description: 'Visit the majestic Golden Pagoda in Namsai, the sacred Parshuram Kund nestled in the hills, and drive across the stunning Dhola–Sadiya Bridge, India’s longest. A perfect mix of spirituality, scenic beauty, and cultural exploration.',
    isActive: true
  },
  {
    id: 'Anini',
    title: 'Anini Tour',
    location: 'Dibang Valley - Arunachal Pradesh',
    duration: '3 Days',
    price: 7750,
    rating: 4.8,
    reviewCount: 26,
    imageUrl: '/images/packages/anini.png',
    highlights: ['Pristine Landscapes', 'Snow-Capped Mountains', 'Dibang Valley Views', 'Tribal Culture','Peaceful Retreat','Adventure Gateway'],
    included: ['Transportation', 'Lodging (Nightstay)', 'Roing Visit', 'Chigu Camp','Bruni Tour'],
    category: 'Hill Station',
    bestTime: 'October to March',
    description: 'Explore the untouched beauty of Anini and its surroundings with this scenic adventure. Travel through the peaceful valleys of Bruni, discover the cultural charm of Roing, and unwind at the picturesque Chigu Camp, nestled amidst forests and rivers, A perfect offbeat escape into the heart of Arunachal’s wilderness and heritage.',
    isActive: true
  },
  {
    id: 'lakhimpur-temples',
    title: 'Sri Sri Basudev Than & Jagannath Temple Tour (Minimum 4 people for a trip)',
    location: 'Lakhimpur, Dibrugarh',
    duration: 'Single day',
    price: 1300,
    rating: 4.5,
    reviewCount: 34,
    imageUrl: '/images/packages/lakhimpur.png',
    highlights: ['Vaishnavite Pilgrimage', 'Vaishnavite Pilgrimage', 'Spiritual Retreat', 'Temple Architecture'],
    included: ['Transportation', 'Sri Sri Basudev Than Tour', 'Jagannath Temple Tour'],
    category: 'Pilgrimage',
    bestTime: 'October to March',
    description: 'Visit the sacred Sri Sri Basudev Than, a serene Vaishnavite pilgrimage site dedicated to Lord Krishna. Then explore the beautifully crafted Jagannath Temple in Dibrugarh, offering divine peace and architectural charm.',
    isActive: true
  },
  {
    id: 'darjeeling-hill-station-retreat',
    title: 'Darjeeling Hill Station Retreat',
    location: 'Darjeeling',
    duration: '3 Days / 2 Nights',
    price: 8500,
    rating: 4.8,
    reviewCount: 165,
    imageUrl: '/images/packages/darjeeling-hills.jpg',
    highlights: ['Tiger Hill Sunrise', 'Toy Train Ride', 'Tea Gardens', 'Himalayan Views'],
    included: ['Accommodation', 'Breakfast', 'Toy Train', 'Sightseeing'],
    category: 'Hill Station',
    bestTime: 'March to May, September to November',
    description: 'Experience the queen of hill stations with breathtaking sunrise views and world-famous tea gardens.',
    isActive: false
  },
  {
    id: 'HKDV',
    title: 'Hayuliang, kibithu and Dong valey Tour',
    location: 'Arunachal Pradesh ',
    duration: '3 Days',
    price: 7750,
    rating: 4.7,
    reviewCount: 34,
    imageUrl: '/images/packages/HKDV.png',
    highlights: ['First Sunrise', 'Scenic Drives', 'Mountain Valleys', 'Remote Wilderness', 'Peaceful Retreat'],
    included: ['Accommodation'],
    category: 'Hill Station',
    bestTime: 'October to April',
    description: 'Discover the easternmost beauty of India as you explore the serene valleys of Hayuliang, the strategic village of Kibithu near the Indo-China border, and witness the first sunrise of India in the breathtaking Dong Valley.',
    isActive: true
  },
  {
    id: 'Tawang-tour',
    title: 'Tawang Trip with Kaziranga Visit',
    location: 'Arunachal Pradesh and Assam ',
    duration: '5 Days',
    price: 14500,
    rating: 4.5,
    reviewCount: 23,
    imageUrl: '/images/packages/tawang.png',
    highlights: ['Tawang Monastery', 'Kaziranga Safari', 'Wildlife Spotting', 'Madhuri Lake', 'Sela Pass'],
    included: ['Lodging (Nightstay)'],
    category: 'Hill Station',
    bestTime: 'October to March',
    description: 'Embark on a breathtaking journey through the Eastern Himalayas as you explore the spiritual and scenic wonders of Tawang – from the iconic Tawang Monastery to the stunning Sela Pass and crystal-clear Madhuri Lake. On your return, immerse yourself in the wild beauty of Kaziranga National Park, where you can spot the world-famous one-horned rhinoceros on an exciting jungle safari. This tour blends mountain serenity with thrilling wildlife encounters for an unforgettable North-East experience.',
    isActive: true
  },

];

// Filter function to get only active packages
export const getActivePackages = (): TravelPackage[] => {
  return travelPackages.filter(pkg => pkg.isActive);
};

// Get package by ID
export const getPackageById = (id: string): TravelPackage | undefined => {
  return travelPackages.find(pkg => pkg.id === id);
};

// Get packages by category
export const getPackagesByCategory = (category: string): TravelPackage[] => {
  if (category === 'All') return getActivePackages();
  return getActivePackages().filter(pkg => pkg.category === category);
};

// Sort packages by different criteria
export const sortPackages = (packages: TravelPackage[], sortBy: string): TravelPackage[] => {
  switch (sortBy) {
    case 'price-low':
      return [...packages].sort((a, b) => a.price - b.price);
    case 'price-high':
      return [...packages].sort((a, b) => b.price - a.price);
    case 'rating':
      return [...packages].sort((a, b) => b.rating - a.rating);
    case 'duration':
      return [...packages].sort((a, b) => {
        const aDays = parseInt(a.duration.split(' ')[0]);
        const bDays = parseInt(b.duration.split(' ')[0]);
        return aDays - bDays;
      });
    default:
      return packages;
  }
};