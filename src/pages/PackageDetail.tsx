import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Star, Users, Calendar, CheckCircle, ExternalLink, FileText, Coffee, Bed } from 'lucide-react';
import { getPackageById } from '../data/packages';
import { BOOKING_FORMS } from '../data/cars';

const PackageDetail = () => {
  const { id } = useParams();
  const pkg = getPackageById(id!);

  if (!pkg) {
    return (
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Package Not Found</h1>
          <Link
            to="/travel-packages"
            className="text-yellow-600 hover:text-yellow-500 font-medium"
          >
            Back to Travel Packages
          </Link>
        </div>
      </div>
    );
  }

  const handleBookNow = () => {
    window.open(BOOKING_FORMS.TRAVEL_PACKAGE, '_blank');
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          to="/travel-packages"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-8 transition-colors group"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Travel Packages</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Package Image */}
          <div className="relative">
            <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden">
              <img
                src={pkg.imageUrl}
                alt={pkg.title}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute top-6 right-6">
              <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-3 py-2">
                <Star className="h-5 w-5 text-yellow-500 mr-1" />
                <span className="text-gray-800 font-medium">{pkg.rating}</span>
                <span className="text-gray-600 text-sm ml-1">({pkg.reviewCount})</span>
              </div>
            </div>
          </div>

          {/* Package Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{pkg.title}</h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                {pkg.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <div className="text-gray-800 font-medium">{pkg.location}</div>
                  <div className="text-gray-600 text-sm">Destination</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-stone-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-stone-600" />
                </div>
                <div>
                  <div className="text-gray-800 font-medium">{pkg.duration}</div>
                  <div className="text-gray-600 text-sm">Duration</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-stone-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-stone-600" />
                </div>
                <div>
                  <div className="text-gray-800 font-medium">{pkg.category}</div>
                  <div className="text-gray-600 text-sm">Tour Type</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <div className="text-gray-800 font-medium">{pkg.bestTime}</div>
                  <div className="text-gray-600 text-sm">Best Time to Visit</div>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-r from-yellow-50 to-stone-50 p-6 rounded-xl border border-yellow-600/30">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">
                    ₹{pkg.price.toLocaleString()}
                  </div>
                  {pkg.originalPrice && (
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500 line-through">
                        ₹{pkg.originalPrice.toLocaleString()}
                      </span>
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                        Save ₹{(pkg.originalPrice - pkg.price).toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
                <div className="text-gray-600 text-sm">
                  Per person
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-12 bg-white rounded-2xl p-8 border border-yellow-600/30 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Package Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pkg.highlights.map((highlight, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                <span className="text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What's Included */}
        <div className="mt-12 bg-white rounded-2xl p-8 border border-yellow-600/30 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pkg.included.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-yellow-600" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Itinerary */}
        {pkg.detailedItinerary && (
          <div className="mt-12 bg-white rounded-2xl p-8 border border-yellow-600/30 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{pkg.detailedItinerary.title}</h2>
            <div className="space-y-6">
              {pkg.detailedItinerary.days.map((day, index) => (
                <div key={index} className="border-l-4 border-yellow-600 pl-6 pb-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-yellow-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-3">
                      {day.day}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{day.title}</h3>
                  </div>
                  
                  <div className="ml-11 space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Activities:</h4>
                      <ul className="space-y-1">
                        {day.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-start space-x-2 text-gray-600 text-sm">
                            <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {day.meals && (
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <Coffee className="h-4 w-4 text-stone-600" />
                          <span className="text-sm text-gray-600">Meals: {day.meals.join(', ')}</span>
                        </div>
                      </div>
                    )}
                    
                    {day.accommodation && (
                      <div className="flex items-center space-x-2">
                        <Bed className="h-4 w-4 text-gray-600" />
                        <span className="text-sm text-gray-600">Stay: {day.accommodation}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Booking Section */}
        <div className="mt-12 bg-gradient-to-r from-yellow-50 to-stone-50 rounded-2xl p-8 border border-yellow-600/30 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready for Your Adventure?</h2>
          <p className="text-gray-600 mb-6">
            Book this amazing {pkg.title} package and create memories that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-1">
                ₹{pkg.price.toLocaleString()}
              </div>
              <div className="text-gray-600 text-sm">Per person</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              {pkg.detailedPdfUrl && (
                <a
                  href={pkg.detailedPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-yellow-50 text-gray-800 px-6 py-3 rounded-full font-semibold transition-all duration-300 border border-yellow-600/30 hover:border-yellow-600/50 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <FileText className="h-5 w-5" />
                  <span>Detailed PDF</span>
                </a>
              )}
              <button
                onClick={handleBookNow}
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <ExternalLink className="h-5 w-5" />
                <span>Book {pkg.title}</span>
              </button>
            </div>
          </div>
          <div className="mt-4 text-gray-500 text-sm">
            * Booking will open in a new tab. Please have your travel preferences ready.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;