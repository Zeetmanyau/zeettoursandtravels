import { Link } from 'react-router-dom';
import { MapPin, Clock, Star, Users, ExternalLink } from 'lucide-react';
import { TravelPackage } from '../data/packages';
import { BOOKING_FORMS } from '../data/cars';

interface PackageCardProps {
  package: TravelPackage;
}

const PackageCard: React.FC<PackageCardProps> = ({ package: pkg }) => {
  const handleBookNow = () => {
    window.open(BOOKING_FORMS.TRAVEL_PACKAGE, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-yellow-600/30 hover:border-yellow-600/50 transition-all duration-300 group hover:transform hover:scale-105 shadow-lg hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={pkg.imageUrl}
          alt={pkg.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            <span className="text-gray-800 text-sm font-medium">{pkg.rating}</span>
            <span className="text-gray-600 text-xs ml-1">({pkg.reviewCount})</span>
          </div>
        </div>
        {pkg.originalPrice && (
          <div className="absolute bottom-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Save ₹{(pkg.originalPrice - pkg.price).toLocaleString()}
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-yellow-600 transition-colors line-clamp-1">
            {pkg.title}
          </h3>
          <div className="text-right">
            {pkg.originalPrice && (
              <div className="text-gray-500 text-sm line-through">
                ₹{pkg.originalPrice.toLocaleString()}
              </div>
            )}
            <div className="text-xl font-bold text-yellow-600">
              ₹{pkg.price.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="flex items-center text-gray-600 text-sm mb-3">
          <MapPin className="h-4 w-4 mr-2 text-yellow-600" />
          <span className="mr-4">{pkg.location}</span>
          <Clock className="h-4 w-4 mr-2 text-stone-600" />
          <span>{pkg.duration}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {pkg.description}
        </p>

        <div className="mb-4">
          <div className="text-xs text-gray-600 mb-2">Highlights</div>
          <div className="flex flex-wrap gap-2">
            {pkg.highlights.slice(0, 3).map((highlight, index) => (
              <span
                key={index}
                className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md text-xs"
              >
                {highlight}
              </span>
            ))}
            {pkg.highlights.length > 3 && (
              <span className="text-yellow-600 text-xs">
                +{pkg.highlights.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-700 text-sm">
            <Users className="h-4 w-4 mr-2 text-gray-600" />
            <span>{pkg.category}</span>
          </div>
          <div className="text-gray-500 text-xs">
            Best time: {pkg.bestTime}
          </div>
        </div>

        <div className="flex space-x-3">
          <Link
            to={`/package/${pkg.id}`}
            className="flex-1 bg-yellow-100 hover:bg-yellow-200 text-gray-800 py-3 px-4 rounded-lg text-center font-medium transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <MapPin className="h-4 w-4" />
            <span>View Details</span>
          </Link>
          <button
            onClick={handleBookNow}
            className="flex-1 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Book Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;