import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Car, Users, Fuel, Settings, Calendar, MapPin, Clock, ExternalLink, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { getCarById, BOOKING_FORMS } from '../data/cars';

const CarDetail = () => {
  const { id } = useParams();
  const car = getCarById(id!);

  if (!car) {
    return (
        <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Car Not Found</h1>
            <Link
                to="/car-rentals"
                className="text-yellow-600 hover:text-yellow-500 font-medium"
            >
              Back to Car Rentals
            </Link>
          </div>
        </div>
    );
  }

  const handleBookNow = () => {
    if (car.availability === 'Available') {
      window.open(BOOKING_FORMS.CAR_RENTAL, '_blank');
    }
  };

  const isAvailable = car.availability === 'Available';

  return (
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link
              to="/car-rentals"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-8 transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Car Rentals</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Car Image */}
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden">
                <img
                    src={car.imageUrl}
                    alt={car.name}
                    className={`w-full h-96 object-cover ${!isAvailable ? 'grayscale opacity-75' : ''}`}
                />
              </div>
              <div className="absolute top-6 left-6">
              <span className="bg-gray-700 text-white px-4 py-2 rounded-full font-medium">
                {car.type}
              </span>
              </div>

              {/* Availability Badge */}
              <div className="absolute top-6 right-6">
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium ${
                    isAvailable
                        ? 'bg-yellow-600 text-white'
                        : 'bg-red-600 text-white'
                }`}>
                  {isAvailable ? (
                      <CheckCircle className="h-5 w-5" />
                  ) : (
                      <XCircle className="h-5 w-5" />
                  )}
                  <span>{car.availability}</span>
                </div>
              </div>

              {/* Unavailable Overlay */}
              {!isAvailable && (
                  <div className="absolute inset-0 bg-gray-900/30 rounded-2xl flex items-center justify-center">
                    <div className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold text-xl">
                      Currently Unavailable
                    </div>
                  </div>
              )}
            </div>

            {/* Car Details */}
            <div className="space-y-6">
              <div>
                <h1 className={`text-4xl font-bold mb-4 ${
                    isAvailable ? 'text-gray-800' : 'text-gray-600'
                }`}>
                  {car.name}
                </h1>
                <p className={`text-lg leading-relaxed ${
                    isAvailable ? 'text-gray-600' : 'text-gray-500'
                }`}>
                  {car.description}
                </p>
              </div>

              {/* Availability Status Alert */}
              {!isAvailable && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="h-6 w-6 text-red-600" />
                      <div>
                        <h3 className="text-red-800 font-medium">Vehicle Currently Unavailable</h3>
                        <p className="text-red-700 text-sm">
                          This vehicle is temporarily unavailable. It may be out for maintenance,
                          already booked, or undergoing service. Please contact us for alternative options
                          or to check when it will be available again.
                        </p>
                      </div>
                    </div>
                  </div>
              )}

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <div className={`font-medium ${isAvailable ? 'text-gray-800' : 'text-gray-600'}`}>
                      {car.seatingCapacity} Passengers
                    </div>
                    <div className="text-gray-600 text-sm">Seating Capacity</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-stone-100 p-3 rounded-lg">
                    <Fuel className="h-6 w-6 text-stone-600" />
                  </div>
                  <div>
                    <div className={`font-medium ${isAvailable ? 'text-gray-800' : 'text-gray-600'}`}>
                      {car.fuelType}
                    </div>
                    <div className="text-gray-600 text-sm">Fuel Type</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <Settings className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <div className={`font-medium ${isAvailable ? 'text-gray-800' : 'text-gray-600'}`}>
                      {car.transmission}
                    </div>
                    <div className="text-gray-600 text-sm">Transmission</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-stone-100 p-3 rounded-lg">
                    <Car className="h-6 w-6 text-stone-600" />
                  </div>
                  <div>
                    <div className={`font-medium ${isAvailable ? 'text-gray-800' : 'text-gray-600'}`}>
                      {car.type}
                    </div>
                    <div className="text-gray-600 text-sm">Vehicle Type</div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${
                    isAvailable ? 'text-gray-800' : 'text-gray-600'
                }`}>
                  Features & Amenities
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-yellow-600" />
                        <span className={isAvailable ? 'text-gray-700' : 'text-gray-500'}>
                      {feature}
                    </span>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className={`mt-12 bg-white rounded-2xl p-8 border shadow-lg ${
              isAvailable ? 'border-yellow-600/30' : 'border-red-200'
          }`}>
            <h2 className={`text-2xl font-bold mb-6 ${
                isAvailable ? 'text-gray-800' : 'text-gray-600'
            }`}>
              Pricing Details
            </h2>

            {car.pricingModel === 'daily' ? (
                // Special pricing layout for Tempo Traveller
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className={`p-6 rounded-xl border ${
                        isAvailable
                            ? 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-600/30'
                            : 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200'
                    }`}>
                      <div className="flex items-center space-x-3 mb-4">
                        <Calendar className={`h-6 w-6 ${isAvailable ? 'text-yellow-600' : 'text-gray-500'}`} />
                        <h3 className={`text-lg font-semibold ${
                            isAvailable ? 'text-gray-800' : 'text-gray-600'
                        }`}>
                          Daily Rate
                        </h3>
                      </div>
                      <div className={`text-3xl font-bold mb-2 ${
                          isAvailable ? 'text-yellow-600' : 'text-gray-500'
                      }`}>
                        ₹{car.basePrice.toLocaleString()}/day
                      </div>
                      <div className="text-gray-600">
                        {car.baseHours} hours rental
                      </div>
                    </div>

                    <div className={`p-6 rounded-xl border ${
                        isAvailable
                            ? 'bg-gradient-to-br from-stone-50 to-stone-100 border-stone-200'
                            : 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200'
                    }`}>
                      <div className="flex items-center space-x-3 mb-4">
                        <MapPin className={`h-6 w-6 ${isAvailable ? 'text-stone-600' : 'text-gray-500'}`} />
                        <h3 className={`text-lg font-semibold ${
                            isAvailable ? 'text-gray-800' : 'text-gray-600'
                        }`}>
                          Per Kilometer
                        </h3>
                      </div>
                      <div className={`text-3xl font-bold mb-2 ${
                          isAvailable ? 'text-stone-600' : 'text-gray-500'
                      }`}>
                        ₹{car.extraKmRate}/km
                      </div>
                      <div className="text-gray-600">
                        From start of trip (0 km)
                      </div>
                    </div>
                  </div>

                  {/* Extra Hours Rate (if applicable) */}
                  {car.hourlyRate > 0 && (
                      <div className={`p-6 rounded-xl border ${
                          isAvailable
                              ? 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200'
                              : 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200'
                      }`}>
                        <div className="flex items-center space-x-3 mb-4">
                          <Clock className={`h-6 w-6 ${isAvailable ? 'text-gray-600' : 'text-gray-500'}`} />
                          <h3 className={`text-lg font-semibold ${
                              isAvailable ? 'text-gray-800' : 'text-gray-600'
                          }`}>
                            Extra Hours
                          </h3>
                        </div>
                        <div className={`text-3xl font-bold mb-2 ${
                            isAvailable ? 'text-gray-600' : 'text-gray-500'
                        }`}>
                          ₹{car.hourlyRate}/hr
                        </div>
                        <div className="text-gray-600">
                          Beyond {car.baseHours} hours
                        </div>
                      </div>
                  )}

                  {/* Hilly Region Pricing */}
                  {car.hillyRegionPricing && (
                      <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-orange-800 mb-4 flex items-center">
                          <MapPin className="h-5 w-5 mr-2" />
                          Hilly Region Pricing
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-orange-600">₹{car.hillyRegionPricing.dailyRate.toLocaleString()}/day</div>
                            <div className="text-orange-700 text-sm">Daily rate for hilly areas</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-orange-600">₹{car.hillyRegionPricing.perKmRate}/km</div>
                            <div className="text-orange-700 text-sm">Per km rate for hilly areas</div>
                          </div>
                        </div>
                        <p className="text-orange-700 text-sm mt-3">
                          *Hilly regions include areas like Tawang, Bomdila, and other mountainous destinations
                        </p>
                      </div>
                  )}
                </div>
            ) : (
                // Standard pricing layout for Package Pricing Model
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className={`p-6 rounded-xl border ${
                      isAvailable
                          ? 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-600/30'
                          : 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200'
                  }`}>
                    <div className="flex items-center space-x-3 mb-4">
                      <MapPin className={`h-6 w-6 ${isAvailable ? 'text-yellow-600' : 'text-gray-500'}`} />
                      <h3 className={`text-lg font-semibold ${
                          isAvailable ? 'text-gray-800' : 'text-gray-600'
                      }`}>
                        Base Package
                      </h3>
                    </div>
                    <div className={`text-3xl font-bold mb-2 ${
                        isAvailable ? 'text-yellow-600' : 'text-gray-500'
                    }`}>
                      ₹{car.basePrice.toLocaleString()}
                    </div>
                    <div className="text-gray-600">
                      For {car.baseDistance}km ({car.baseHours} hours)
                    </div>
                  </div>

                  <div className={`p-6 rounded-xl border ${
                      isAvailable
                          ? 'bg-gradient-to-br from-stone-50 to-stone-100 border-stone-200'
                          : 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200'
                  }`}>
                    <div className="flex items-center space-x-3 mb-4">
                      <MapPin className={`h-6 w-6 ${isAvailable ? 'text-stone-600' : 'text-gray-500'}`} />
                      <h3 className={`text-lg font-semibold ${
                          isAvailable ? 'text-gray-800' : 'text-gray-600'
                      }`}>
                        Extra Distance
                      </h3>
                    </div>
                    <div className={`text-3xl font-bold mb-2 ${
                        isAvailable ? 'text-stone-600' : 'text-gray-500'
                    }`}>
                      ₹{car.extraKmRate}/km
                    </div>
                    <div className="text-gray-600">
                      Above {car.baseDistance}km
                    </div>
                  </div>

                  {car.hourlyRate > 0 && (
                      <div className={`p-6 rounded-xl border ${
                          isAvailable
                              ? 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200'
                              : 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200'
                      }`}>
                        <div className="flex items-center space-x-3 mb-4">
                          <Clock className={`h-6 w-6 ${isAvailable ? 'text-gray-600' : 'text-gray-500'}`} />
                          <h3 className={`text-lg font-semibold ${
                              isAvailable ? 'text-gray-800' : 'text-gray-600'
                          }`}>
                            Extra Hours
                          </h3>
                        </div>
                        <div className={`text-3xl font-bold mb-2 ${
                            isAvailable ? 'text-gray-600' : 'text-gray-500'
                        }`}>
                          ₹{car.hourlyRate}/hr
                        </div>
                        <div className="text-gray-600">
                          Beyond {car.baseHours} hours
                        </div>
                      </div>
                  )}
                </div>
            )}

            {/* Special Notes */}
            {car.pricingModel === 'daily' && (
                <div className="mt-6 space-y-4">
                  <div className="p-4 bg-yellow-50 border border-yellow-600/30 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="h-5 w-5 text-yellow-600" />
                      <span className="font-medium text-yellow-800">Pricing Options</span>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Choose between daily rate (₹{car.basePrice}/day) or per kilometer rate (₹{car.extraKmRate}/km from start).
                      We'll calculate the most economical option for your trip.
                    </p>
                  </div>
                </div>
            )}
          </div>

          {/* Booking Section */}
          <div className={`mt-12 rounded-2xl p-8 border text-center ${
              isAvailable
                  ? 'bg-gradient-to-r from-yellow-50 to-stone-50 border-yellow-600/30'
                  : 'bg-gradient-to-r from-gray-50 to-red-50 border-red-200'
          }`}>
            <h2 className={`text-2xl font-bold mb-4 ${
                isAvailable ? 'text-gray-800' : 'text-gray-600'
            }`}>
              {isAvailable ? 'Ready to Book?' : 'Vehicle Unavailable'}
            </h2>
            <p className={`mb-6 ${isAvailable ? 'text-gray-600' : 'text-gray-500'}`}>
              {isAvailable
                  ? `Get this amazing ${car.name} for your next journey. Click below to fill out our booking form.`
                  : `This ${car.name} is currently unavailable. Please contact us for alternative vehicles or to check availability.`
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                  onClick={handleBookNow}
                  disabled={!isAvailable}
                  className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2 ${
                      isAvailable
                          ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white transform hover:scale-105 shadow-lg hover:shadow-xl'
                          : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  }`}
              >
                {isAvailable ? (
                    <>
                      <ExternalLink className="h-5 w-5" />
                      <span>Book Now - {car.name}</span>
                    </>
                ) : (
                    <>
                      <XCircle className="h-5 w-5" />
                      <span>Currently Unavailable</span>
                    </>
                )}
              </button>

              {!isAvailable && (
                  <Link
                      to="/contact"
                      className="bg-yellow-600 hover:bg-yellow-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Contact for Alternatives
                  </Link>
              )}
            </div>
            <div className="mt-4 text-gray-500 text-sm">
              {isAvailable
                  ? '* Booking will open in a new tab. Please have your travel details ready.'
                  : '* Contact us for real-time availability updates and alternative vehicle options.'
              }
            </div>
          </div>
        </div>
      </div>
  );
};

export default CarDetail;