import { Link } from 'react-router-dom';
import { Car, Users, Fuel, Settings, ExternalLink, CheckCircle, XCircle } from 'lucide-react';
import { Car as CarType, BOOKING_FORMS } from '../data/cars';

interface CarCardProps {
  car: CarType;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const handleBookNow = () => {
    if (car.availability === 'Available') {
      window.open(BOOKING_FORMS.CAR_RENTAL, '_blank');
    }
  };

  const isAvailable = car.availability === 'Available';

  return (
    <div className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 group hover:transform hover:scale-105 shadow-lg hover:shadow-xl ${
      isAvailable 
        ? 'border-yellow-600/30 hover:border-yellow-600/50' 
        : 'border-red-200 hover:border-red-300'
    }`}>
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
        <img
          src={car.imageUrl}
          alt={car.name}
          className={`w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 ${
            !isAvailable ? 'grayscale opacity-75' : ''
          }`}
        />
        <div className="absolute top-4 right-4">
          <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-medium">
            {car.type}
          </span>
        </div>
        
        {/* Availability Badge */}
        <div className="absolute top-4 left-4">
          <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${
            isAvailable 
              ? 'bg-yellow-600 text-white' 
              : 'bg-red-600 text-white'
          }`}>
            {isAvailable ? (
              <CheckCircle className="h-4 w-4" />
            ) : (
              <XCircle className="h-4 w-4" />
            )}
            <span>{car.availability}</span>
          </div>
        </div>

        {/* Unavailable Overlay */}
        {!isAvailable && (
          <div className="absolute inset-0 bg-gray-900/20 flex items-center justify-center">
            <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold text-lg">
              Currently Unavailable
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className={`text-xl font-bold transition-colors ${
            isAvailable 
              ? 'text-gray-800 group-hover:text-yellow-600' 
              : 'text-gray-600'
          }`}>
            {car.name}
          </h3>
          <div className="flex items-center text-yellow-600">
            <span className="text-lg font-bold">₹{car.basePrice.toLocaleString()}</span>
          </div>
        </div>

        <p className={`text-sm mb-4 line-clamp-2 ${
          isAvailable ? 'text-gray-600' : 'text-gray-500'
        }`}>
          {car.description}
        </p>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className={`flex items-center text-sm ${
            isAvailable ? 'text-gray-700' : 'text-gray-500'
          }`}>
            <Users className="h-4 w-4 mr-2 text-yellow-600" />
            <span>{car.seatingCapacity} Seats</span>
          </div>
          <div className={`flex items-center text-sm ${
            isAvailable ? 'text-gray-700' : 'text-gray-500'
          }`}>
            <Fuel className="h-4 w-4 mr-2 text-stone-600" />
            <span>{car.fuelType}</span>
          </div>
          <div className={`flex items-center text-sm ${
            isAvailable ? 'text-gray-700' : 'text-gray-500'
          }`}>
            <Settings className="h-4 w-4 mr-2 text-gray-600" />
            <span>{car.transmission}</span>
          </div>
        </div>

        <div className={`rounded-lg p-3 mb-4 ${
          isAvailable ? 'bg-yellow-50' : 'bg-gray-100'
        }`}>
          <div className={`text-xs mb-1 ${
            isAvailable ? 'text-gray-600' : 'text-gray-500'
          }`}>Pricing</div>
          <div className={`text-sm ${
            isAvailable ? 'text-gray-800' : 'text-gray-600'
          }`}>
            <div>₹{car.basePrice} for {car.baseDistance}km</div>
            <div>₹{car.extraKmRate}/km above {car.baseDistance}km</div>
            {car.hourlyRate > 0 && (
              <div>₹{car.hourlyRate}/hr beyond {car.baseHours}hrs</div>
            )}
          </div>
        </div>

        <div className="flex space-x-3">
          <Link
            to={`/car/${car.id}`}
            className={`flex-1 py-3 px-4 rounded-lg text-center font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
              isAvailable 
                ? 'bg-yellow-100 hover:bg-yellow-200 text-gray-800' 
                : 'bg-gray-300 text-gray-600 cursor-not-allowed'
            }`}
          >
            <Car className="h-4 w-4" />
            <span>View Details</span>
          </Link>
          <button
            onClick={handleBookNow}
            disabled={!isAvailable}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
              isAvailable 
                ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white shadow-lg hover:shadow-xl' 
                : 'bg-gray-400 text-gray-600 cursor-not-allowed'
            }`}
          >
            <ExternalLink className="h-4 w-4" />
            <span>{isAvailable ? 'Book Now' : 'Unavailable'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;