import { useState, useMemo } from 'react';
import { Filter, Search, CheckCircle, XCircle } from 'lucide-react';
import CarCard from '../components/CarCard';
import { getActiveCars, getCarsByTypeAndAvailability } from '../data/cars';

const CarRentals = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedAvailability, setSelectedAvailability] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const carTypes = ['All', 'Sedan', 'SUV', 'Hatchback', 'MPV', 'Tempo traveller'];
  const availabilityOptions = ['All', 'Available', 'Unavailable'];

  const filteredCars = useMemo(() => {
    let cars = getCarsByTypeAndAvailability(selectedType, selectedAvailability);

    if (searchTerm) {
      cars = cars.filter(car =>
          car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return cars;
  }, [selectedType, selectedAvailability, searchTerm]);

  // Get availability statistics
  const availabilityStats = useMemo(() => {
    const allCars = getActiveCars();
    const available = allCars.filter(car => car.availability === 'Available').length;
    const unavailable = allCars.filter(car => car.availability === 'Unavailable').length;
    return { available, unavailable, total: allCars.length };
  }, []);

  return (
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Our Premium
              <span className="block bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
              Car Fleet
            </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our diverse collection of well-maintained vehicles for your perfect journey
            </p>
          </div>
          {/* Note for variable price */}
          <div className="p-6 bg-yellow-50 rounded-2xl border border-yellow-600/30 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Note</h3>
            <p className="text-gray-600 text-sm">
              Please note that Car prices may slightly vary as per the timings like beyond 12/10 hrs and economical situations
            </p>
          </div>

          {/* Availability Statistics */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-lg p-4 border border-yellow-600/30 text-center">
              <div className="text-2xl font-bold text-gray-800">{availabilityStats.total}</div>
              <div className="text-gray-600 text-sm">Total Cars</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-200 text-center">
              <div className="text-2xl font-bold text-green-600">{availabilityStats.available}</div>
              <div className="text-gray-600 text-sm">Available</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-red-200 text-center">
              <div className="text-2xl font-bold text-red-600">{availabilityStats.unavailable}</div>
              <div className="text-gray-600 text-sm">Unavailable</div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                <input
                    type="text"
                    placeholder="Search cars..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-yellow-600/30 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-yellow-600/50 transition-colors"
                />
              </div>

              {/* Filter Toggle (Mobile) */}
              <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center space-x-2 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </button>

              {/* Desktop Filters */}
              <div className="hidden lg:flex items-center space-x-4">
                {/* Car Type Filters */}
                <div className="flex items-center space-x-2">
                  <span className="text-gray-700 font-medium">Type:</span>
                  {carTypes.map((type) => (
                      <button
                          key={type}
                          onClick={() => setSelectedType(type)}
                          className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                              selectedType === type
                                  ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-white shadow-lg'
                                  : 'bg-white text-gray-700 hover:bg-yellow-100 border border-yellow-600/30'
                          }`}
                      >
                        {type}
                      </button>
                  ))}
                </div>

                {/* Availability Filters */}
                <div className="flex items-center space-x-2">
                  <span className="text-gray-700 font-medium">Status:</span>
                  {availabilityOptions.map((availability) => (
                      <button
                          key={availability}
                          onClick={() => setSelectedAvailability(availability)}
                          className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-1 ${
                              selectedAvailability === availability
                                  ? availability === 'Available'
                                      ? 'bg-green-600 text-white'
                                      : availability === 'Unavailable'
                                          ? 'bg-red-600 text-white'
                                          : 'bg-yellow-600 text-white'
                                  : 'bg-white text-gray-700 hover:bg-yellow-100 border border-yellow-600/30'
                          }`}
                      >
                        {availability === 'Available' && <CheckCircle className="h-4 w-4" />}
                        {availability === 'Unavailable' && <XCircle className="h-4 w-4" />}
                        <span>{availability}</span>
                      </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
                <div className="lg:hidden mt-4 p-4 bg-white rounded-lg border border-yellow-600/30 space-y-4">
                  {/* Car Type Filters */}
                  <div>
                    <span className="text-gray-700 font-medium mb-2 block">Car Type:</span>
                    <div className="grid grid-cols-2 gap-2">
                      {carTypes.map((type) => (
                          <button
                              key={type}
                              onClick={() => {
                                setSelectedType(type);
                              }}
                              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                  selectedType === type
                                      ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-white shadow-lg'
                                      : 'bg-yellow-100 text-gray-700 hover:bg-yellow-200'
                              }`}
                          >
                            {type}
                          </button>
                      ))}
                    </div>
                  </div>

                  {/* Availability Filters */}
                  <div>
                    <span className="text-gray-700 font-medium mb-2 block">Availability:</span>
                    <div className="grid grid-cols-3 gap-2">
                      {availabilityOptions.map((availability) => (
                          <button
                              key={availability}
                              onClick={() => {
                                setSelectedAvailability(availability);
                                setShowFilters(false);
                              }}
                              className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-1 ${
                                  selectedAvailability === availability
                                      ? availability === 'Available'
                                          ? 'bg-green-600 text-white'
                                          : availability === 'Unavailable'
                                              ? 'bg-red-600 text-white'
                                              : 'bg-yellow-600 text-white'
                                      : 'bg-yellow-100 text-gray-700 hover:bg-yellow-200'
                              }`}
                          >
                            {availability === 'Available' && <CheckCircle className="h-4 w-4" />}
                            {availability === 'Unavailable' && <XCircle className="h-4 w-4" />}
                            <span>{availability}</span>
                          </button>
                      ))}
                    </div>
                  </div>
                </div>
            )}
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredCars.length} car{filteredCars.length !== 1 ? 's' : ''}
              {selectedType !== 'All' && ` in ${selectedType} category`}
              {selectedAvailability !== 'All' && ` that are ${selectedAvailability.toLowerCase()}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          {/* Cars Grid */}
          {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCars.map((car) => (
                    <CarCard key={car.id} car={car} />
                ))}
              </div>
          ) : (
              <div className="text-center py-16">
                <div className="bg-white rounded-2xl p-12 border border-yellow-600/30 max-w-md mx-auto shadow-lg">
                  <div className="text-gray-600 mb-4">
                    <Search className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">No cars found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                  </div>
                  <button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedType('All');
                        setSelectedAvailability('All');
                      }}
                      className="bg-yellow-600 hover:bg-yellow-500 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
          )}

          {/* Note about availability */}
          <div className="mt-16 p-6 bg-yellow-50 rounded-2xl border border-yellow-600/30">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Vehicle Availability</h3>
            <p className="text-gray-600 text-sm mb-3">
              Vehicle availability is updated in real-time. Unavailable vehicles may be out for maintenance,
              already booked, or temporarily out of service. Contact us for specific availability dates.
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-gray-700">Available for booking</span>
              </div>
              <div className="flex items-center space-x-1">
                <XCircle className="h-4 w-4 text-red-600" />
                <span className="text-gray-700">Currently unavailable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CarRentals;