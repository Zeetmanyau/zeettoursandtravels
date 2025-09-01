// Car fleet data for Zeet Tours and Travels
export interface Car {
  id: string;
  name: string;
  type: 'Sedan' | 'SUV' | 'Hatchback' | 'MPV' | 'Tempo traveller' | 'Bus';

  // Pricing Model Configuration
  pricingModel: 'package' | 'daily'; // 'package' for traditional, 'daily' for per-day pricing

  // Traditional Package Pricing (for pricingModel: 'package')
  basePrice: number; // Price for base package (e.g., 100km + 10hrs) OR daily rate
  baseDistance: number; // Base distance included (in km) - 0 for daily model
  baseHours: number; // Base hours included - for daily model, this is total hours per day

  // Additional Rates (applicable to both models)
  extraKmRate: number; // Rate per km (above base for package model, from 0km for daily model)
  hourlyRate: number; // Rate per hour beyond base hours (0 if not applicable)

  // Optional: Daily rate (for cars that support both models)
  dailyRate?: number; // Alternative daily rate option

  // Hilly Region Pricing (optional)
  hillyRegionPricing?: {
    dailyRate: number;
    perKmRate: number;
  };

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
  // ACTIVE CARS (8 visible cars)
  {
    id: 'suzuki-dezire',
    name: 'Suzuki Dezire',
    type: 'Sedan',
    pricingModel: 'package',
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
    pricingModel: 'package',
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
    pricingModel: 'package',
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
    pricingModel: 'package',
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
    pricingModel: 'package',
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
    pricingModel: 'package',
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
    pricingModel: 'package',
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
    pricingModel: 'daily',
    basePrice: 5000, // Daily rate
    extraKmRate: 13, // Per km from start (0km)
    hourlyRate: 0, // Not applicable for daily rental
    baseDistance: 0, // No base distance included
    baseHours: 24, // Full day (24 hours)
    hillyRegionPricing: {
      dailyRate: 6000,
      perKmRate: 15
    },
    features: ['AC', 'Push Back Seats', 'Music System', 'Large Capacity'],
    seatingCapacity: 12,
    fuelType: 'Diesel',
    transmission: 'Manual',
    imageUrl: '/images/cars/Traveller.png',
    description: 'Large capacity vehicle perfect for group tours and outstation trips. Special pricing for hilly regions available.',
    isActive: true,
    availability: 'Available'
  },
  {
    id: 'Fortuner',
    name: 'Toyota Fortuner',
    type: 'SUV',
    pricingModel: 'daily',
    basePrice: 8000, // Daily rate
    extraKmRate: 13, // Per km from start (0km)
    hourlyRate: 500, // Rate per hour beyond 10 hours
    baseDistance: 0, // No base distance included
    baseHours: 10, // Base hours per day
    features: ['AC', 'Power Steering', 'GPS', 'Premium Interior'],
    seatingCapacity: 7,
    fuelType: 'Diesel',
    transmission: 'Manual',
    imageUrl: '/images/cars/fortuner.png',
    description: 'Experience power and luxury on every drive — the perfect blend of rugged performance and premium comfort.',
    isActive: true,
    availability: 'Available'
  },
  {
    id: 'slavia',
    name: 'Skoda slavia',
    type: 'Sedan',
    pricingModel: 'daily',
    basePrice: 4000, // Daily rate
    extraKmRate: 9, // Per km from start (0km)
    hourlyRate: 500, // Rate per hour beyond 10 hours
    baseDistance: 0, // No base distance included
    baseHours: 10, // Base hours per day
    features: ['AC', 'Power Steering', 'GPS', 'Premium Interior'],
    seatingCapacity: 7,
    fuelType: 'Petrol',
    transmission: 'Manual',
    imageUrl: '/images/cars/slavia.png',
    description: 'Drive in style and comfort — a sleek sedan that combines elegance, space, and modern performance.',
    isActive: true,
    availability: 'Available'
  },
  {
    id: 'starbus',
    name: 'Tata Starbus Ultra',
    type: 'Bus',
    pricingModel: 'daily',
    basePrice: 8000, // Daily rate
    extraKmRate: 20, // Per km from start (0km)
    hourlyRate: 500, // Rate per hour beyond 10 hours
    baseDistance: 0, // No base distance included
    baseHours: 10, // Base hours per day
    features: ['Comfortable Ride', 'lower NVH (Noise, Vibration, Harshness)', 'Reclining Seats', 'Ample Legroom'],
    seatingCapacity: 50,
    fuelType: 'Diesel',
    transmission: 'Manual',
    imageUrl: '/images/cars/starbus.png',
    description: 'Planning a trip with family, friends, or a tour group? Our Tata Starbus is the perfect choice for hassle-free travel. With spacious seating, wide windows for scenic views, and smooth rides even on long journeys, it’s designed to keep your group comfortable throughout the trip. The bus is well-maintained, reliable, and operated by experienced drivers to ensure a safe and enjoyable travel experience. Ideal for city tours, outstation trips, picnics, and holidays.',
    isActive: true,
    availability: 'Available'
  },


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
  CAR_RENTAL: 'https://forms.google.com/car-rental-booking', // Replace with actual Google Form URL
  TRAVEL_PACKAGE: 'https://forms.google.com/travel-package-booking' // Replace with actual Google Form URL
};