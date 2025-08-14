// Car fleet data for Zeet Tours and Travels
export interface Car {
  id: string;
  name: string;
  type: 'Sedan' | 'SUV' | 'Hatchback' | 'MPV' | 'Tempo traveller';
  basePrice: number; // Price for base package (100km or daily)
  extraKmRate: number; // Rate per km above base
  hourlyRate: number; // Rate per hour beyond base hours
  baseDistance: number; // Base distance included (in km)
  baseHours: number; // Base hours included
  features: string[];
  seatingCapacity: number;
  fuelType: 'Petrol' | 'Diesel' | 'CNG';
  transmission: 'Manual' | 'Automatic';
  imageUrl: string;
  description: string;
  isActive: boolean; // Set to false for commented cars
  availability: 'Available' | 'Unavailable'; // NEW: Availability status
}

export const cars: Car[] = [
  // ACTIVE CARS
  {
    id: 'suzuki-dezire',
    name: 'Suzuki Dezire',
    type: 'Sedan',
    basePrice: 2200,
    extraKmRate: 11,
    hourlyRate: 120,
    baseDistance: 100,
    baseHours: 10,
    features: ['AC', 'Power Steering', 'Music System', 'Comfortable Seating'],
    seatingCapacity: 5,
    fuelType: 'Petrol',
    transmission: 'Manual',
    imageUrl:"/images/cars/suzuki_desire.png",
    description: 'Perfect sedan for city rides and outstation trips with excellent fuel efficiency.',
    isActive: true,
    availability: 'Available'
  },
  {
    id: 'suzuki-breeza',
    name: 'Suzuki Breeza',
    type: 'SUV',
    basePrice: 2600,
    extraKmRate: 12,
    hourlyRate: 150,
    baseDistance: 100,
    baseHours: 10,
    features: ['AC', 'Power Steering', 'Touchscreen', 'High Ground Clearance'],
    seatingCapacity: 5,
    fuelType: 'Petrol',
    transmission: 'Manual',
    imageUrl: '/images/cars/suzuki_brezza.png',
    description: 'Compact SUV ideal for both city driving and highway adventures.',
    isActive: true,
    availability: 'Available'
  },
  {
    id: 'alto-k10',
    name: 'Suzuki Alto K10',
    type: 'Hatchback',
    basePrice: 1700,
    extraKmRate: 10,
    hourlyRate: 100,
    baseDistance: 100,
    baseHours: 10,
    features: ['AC', 'Power Steering', 'Central Locking', 'Fuel Efficient'],
    seatingCapacity: 4,
    fuelType: 'Petrol',
    transmission: 'Manual',
    imageUrl: '/images/cars/maruti_suzuki_altok10.png',
    description: 'Budget-friendly hatchback perfect for short trips and city commutes.',
    isActive: true,
    availability: 'Available'
  },
  {
    id: 'wagonr',
    name: 'Suzuki WagonR',
    type: 'Hatchback',
    basePrice: 1900,
    extraKmRate: 11,
    hourlyRate: 110,
    baseDistance: 100,
    baseHours: 10,
    features: ['AC', 'Power Steering', 'Spacious Interior', 'Easy Parking'],
    seatingCapacity: 5,
    fuelType: 'Petrol',
    transmission: 'Manual',
    imageUrl: '/images/cars/Suzuki_Wagonr.png',
    description: 'Spacious and reliable hatchback with excellent maneuverability.',
    isActive: true,
    availability: 'Available'
  },
  {
    id: 'ertiga',
    name: 'Suzuki Ertiga',
    type: 'MPV',
    basePrice: 3200,
    extraKmRate: 12,
    hourlyRate: 150,
    baseDistance: 100,
    baseHours: 10,
    features: ['AC', 'Power Steering', '7 Seater', 'Large Boot Space'],
    seatingCapacity: 7,
    fuelType: 'Petrol',
    transmission: 'Manual',
    imageUrl: '/images/cars/suzuki_ertiga.jpg',
    description: '7-seater MPV perfect for family trips and group travel.',
    isActive: true,
    availability: 'Available'
  },
  {
    id: 'innova-crysta',
    name: 'Toyota Innova Crysta',
    type: 'MPV',
    basePrice: 3500,
    extraKmRate: 13,
    hourlyRate: 200,
    baseDistance: 100,
    baseHours: 10,
    features: ['AC', 'Power Steering', 'Premium Interior', 'Captain Seats'],
    seatingCapacity: 7,
    fuelType: 'Diesel',
    transmission: 'Manual',
    imageUrl: '/images/cars/Innova.png',
    description: 'Premium MPV with luxurious features and superior comfort.',
    isActive: true,
    availability: 'Available'
  },
  {
    id: 'innova-old',
    name: 'Toyota Innova (Old Gen)',
    type: 'MPV',
    basePrice: 3000,
    extraKmRate: 13,
    hourlyRate: 180,
    baseDistance: 100,
    baseHours: 10,
    features: ['AC', 'Power Steering', 'Reliable Engine', 'Spacious'],
    seatingCapacity: 7,
    fuelType: 'Diesel',
    transmission: 'Manual',
    imageUrl: '/images/cars/innova_old.png',
    description: 'Proven and reliable MPV for comfortable group travel.',
    isActive: true,
    availability: 'Available'
  },
  {
    id: 'traveller',
    name: 'Traveller',
    type: 'Tempo traveller',
    basePrice: 5000, // Per day
    extraKmRate: 13, // From start (zero km)
    hourlyRate: 0, // Not applicable for daily rental
    baseDistance: 0, // No base distance - charged from start
    baseHours: 24, // Full day
    features: ['AC', 'Push Back Seats', 'Music System', 'Large Capacity'],
    seatingCapacity: 12,
    fuelType: 'Diesel',
    transmission: 'Manual',
    imageUrl: '/images/cars/Traveller.png',
    description: 'Large capacity vehicle perfect for group tours and outstation trips. Special pricing for hilly regions available.',
    isActive: true,
    availability: 'Available'
  },

  // FUTURE CAR SLOTS (7 commented cars for future addition)
  /* Future Car Slot #1 - Sedan Category
  {
    id: 'honda-amaze',
    name: 'Honda Amaze',
    type: 'Sedan',
    basePrice: 2400,
    extraKmRate: 12,
    hourlyRate: 130,
    baseDistance: 100,
    baseHours: 10,
    features: ['AC', 'Power Steering', 'Touchscreen', 'Safety Features'],
    seatingCapacity: 5,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    imageUrl: '/images/cars/honda-amaze.jpg',
    description: 'Premium sedan with automatic transmission and advanced features.',
    isActive: false,
    availability: 'Available'
  },
  */

  /* Future Car Slot #2 - SUV Category
  {
    id: 'tata-nexon',
    name: 'Tata Nexon',
    type: 'SUV',
    basePrice: 3100,
    extraKmRate: 13,
    hourlyRate: 160,
    baseDistance: 100,
    baseHours: 10,
    features: ['AC', 'Touchscreen', '5-Star Safety', 'Premium Interior'],
    seatingCapacity: 5,
    fuelType: 'Petrol',
    transmission: 'Manual',
    imageUrl: '/images/cars/tata-nexon.jpg',
    description: '5-star safety rated compact SUV with modern features.',
    isActive: false,
    availability: 'Available'
  },
  */

  /* Future Car Slot #3 - Hatchback Category
  {
    id: 'hyundai-i20',
    name: 'Hyundai i20',
    type: 'Hatchback',
    basePrice: 2100,
    extraKmRate: 11,
    hourlyRate: 115,
    baseDistance: 100,
    baseHours: 10,
    features: ['AC', 'Touchscreen', 'Premium Features', 'Stylish Design'],
    seatingCapacity: 5,
    fuelType: 'Petrol',
    transmission: 'Manual',
    imageUrl: '/images/cars/hyundai-i20.jpg',
    description: 'Premium hatchback with modern styling and advanced features.',
    isActive: false,
    availability: 'Unavailable'
  },
  */

  /* Future Car Slot #4 - MPV Category
  {
    id: 'mahindra-bolero',
    name: 'Mahindra Bolero',
    type: 'MPV',
    basePrice: 2800,
    extraKmRate: 12,
    hourlyRate: 140,
    baseDistance: 100,
    baseHours: 10,
    features: ['AC', 'Rugged Build', 'High Ground Clearance', '8 Seater'],
    seatingCapacity: 8,
    fuelType: 'Diesel',
    transmission: 'Manual',
    imageUrl: '/images/cars/mahindra-bolero.jpg',
    description: 'Rugged and reliable MPV perfect for rough terrain travel.',
    isActive: false,
    availability: 'Available'
  },
  */

  /* Future Car Slot #5 - Luxury Sedan
  {
    id: 'honda-city',
    name: 'Honda City',
    type: 'Sedan',
    basePrice: 2600,
    extraKmRate: 13,
    hourlyRate: 140,
    baseDistance: 100,
    baseHours: 10,
    features: ['AC', 'Sunroof', 'Leather Seats', 'Premium Audio'],
    seatingCapacity: 5,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    imageUrl: '/images/cars/honda-city.jpg',
    description: 'Luxury sedan with premium features and automatic transmission.',
    isActive: false,
    availability: 'Available'
  },
  */

  /* Future Car Slot #6 - Premium SUV
  {
    id: 'hyundai-creta',
    name: 'Hyundai Creta',
    type: 'SUV',
    basePrice: 3300,
    extraKmRate: 14,
    hourlyRate: 170,
    baseDistance: 100,
    baseHours: 10,
    features: ['AC', 'Panoramic Sunroof', 'Premium Interior', 'Advanced Safety'],
    seatingCapacity: 5,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    imageUrl: '/images/cars/hyundai-creta.jpg',
    description: 'Premium compact SUV with luxury features and automatic transmission.',
    isActive: false,
    availability: 'Unavailable'
  },
  */

  /* Future Car Slot #7 - Large Tempo Traveller
  {
    id: 'tempo-traveller-17',
    name: 'Tempo Traveller 17 Seater',
    type: 'Tempo traveller',
    basePrice: 5500,
    extraKmRate: 15,
    hourlyRate: 0,
    baseDistance: 150,
    baseHours: 24,
    features: ['AC', 'Push Back Seats', 'Music System', 'Extra Large Capacity'],
    seatingCapacity: 17,
    fuelType: 'Diesel',
    transmission: 'Manual',
    imageUrl: '/images/cars/tempo-traveller-17.jpg',
    description: 'Large capacity tempo traveller for big group tours and events.',
    isActive: false,
    availability: 'Available'
  },
  */
];

// Filter function to get only active cars
export const getActiveCars = (): Car[] => {
  return cars.filter(car => car.isActive);
};

// Get car by ID
export const getCarById = (id: string): Car | undefined => {
  return cars.find(car => car.id === id);
};

// Get cars by type
export const getCarsByType = (type: string): Car[] => {
  if (type === 'All') return getActiveCars();
  return getActiveCars().filter(car => car.type === type);
};

// Get cars by availability
export const getCarsByAvailability = (availability: string): Car[] => {
  if (availability === 'All') return getActiveCars();
  return getActiveCars().filter(car => car.availability === availability);
};

// Get cars by type and availability
export const getCarsByTypeAndAvailability = (type: string, availability: string): Car[] => {
  let cars = getActiveCars();

  if (type !== 'All') {
    cars = cars.filter(car => car.type === type);
  }

  if (availability !== 'All') {
    cars = cars.filter(car => car.availability === availability);
  }

  return cars;
};

// Google Form URLs - Update these with your actual Google Form links
export const BOOKING_FORMS = {
  CAR_RENTAL: 'https://docs.google.com/forms/d/e/1FAIpQLSfLJbDUPXLNMByWzeEJoHtiwPpCRzaEItOz_iWlcNlcr9J9ng/viewform?usp=sharing&ouid=101642107306155374619', // Replace with actual Google Form URL
  TRAVEL_PACKAGE: 'https://docs.google.com/forms/d/e/1FAIpQLScZcr2rQ4RvdXtKYHjZQtetSY5cosXXzvFq7qKBml00KpINwA/viewform?usp=sharing&ouid=101642107306155374619' // Replace with actual Google Form URL
};