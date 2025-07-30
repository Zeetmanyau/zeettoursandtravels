import { useState, useMemo } from 'react';
import { Filter, Search, ArrowUpDown } from 'lucide-react';
import PackageCard from '../components/PackageCard';
import {getPackagesByCategory, sortPackages, PACKAGE_CATEGORIES } from '../data/packages';

const TravelPackages = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [showFilters, setShowFilters] = useState(false);

  // Use the editable categories from the data file
  const categories = PACKAGE_CATEGORIES;
  
  const sortOptions = [
    { value: 'default', label: 'Default' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'duration', label: 'Duration' }
  ];

  const filteredPackages = useMemo(() => {
    let packages = getPackagesByCategory(selectedCategory);
    
    if (searchTerm) {
      packages = packages.filter(pkg =>
        pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pkg.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pkg.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return sortPackages(packages, sortBy);
  }, [selectedCategory, searchTerm, sortBy]);

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Discover Amazing
            <span className="block bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
              Travel Destinations
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore incredible destinations both in Northeast India and around the world with our carefully curated travel packages designed for unforgettable experiences
          </p>

        </div>

        <div className="p-6 bg-yellow-50 rounded-2xl border border-yellow-600/30 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Note</h3>
          <p className="text-gray-600 text-sm">
            Please note that package prices may slightly vary depending on the season.
          </p>
        </div>

        {/* Search, Filters, and Sort */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
              <input
                type="text"
                placeholder="Search packages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-yellow-600/30 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-yellow-600/50 transition-colors"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-2">
              <ArrowUpDown className="h-5 w-5 text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-yellow-600/30 text-gray-800 px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-600/50 transition-colors"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value} className="bg-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter Toggle (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center space-x-2 bg-white border border-yellow-600/30 px-4 py-3 rounded-lg text-gray-800 hover:bg-yellow-50 transition-colors"
            >
              <Filter className="h-5 w-5" />
              <span>Categories</span>
            </button>

            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center space-x-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-yellow-100 border border-yellow-600/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden mt-4 p-4 bg-white rounded-lg border border-yellow-600/30">
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowFilters(false);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-white shadow-lg'
                        : 'bg-yellow-100 text-gray-700 hover:bg-yellow-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredPackages.length} package{filteredPackages.length !== 1 ? 's' : ''} 
            {selectedCategory !== 'All' && ` in ${selectedCategory} category`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Packages Grid */}
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPackages.map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 mb-16">
            <div className="bg-white rounded-2xl p-12 border border-yellow-600/30 max-w-md mx-auto shadow-lg">
              <div className="text-gray-600 mb-4">
                <Search className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No packages found</h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSortBy('default');
                }}
                className="bg-yellow-600 hover:bg-yellow-500 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}

        {/* Category Statistics */}
        <div className="mb-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.slice(1).map((category) => {
            const count = getPackagesByCategory(category).length;
            return (
              <div
                key={category}
                className="bg-white rounded-lg p-4 border border-yellow-600/30 text-center hover:border-yellow-600/50 transition-all duration-300"
              >
                <div className="text-2xl font-bold text-yellow-600">{count}</div>
                <div className="text-gray-600 text-sm">{category}</div>
              </div>
            );
          })}
        </div>

        {/* Note about upcoming packages */}
        <div className="p-6 bg-yellow-50 rounded-2xl border border-yellow-600/30">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">More Adventures Coming Soon</h3>
          <p className="text-gray-600 text-sm">
            We're constantly adding new and exciting travel packages to our collection. 
            Stay tuned for more amazing destinations and experiences across Northeast India and international destinations!
          </p>
        </div>
      </div>
    </div>
  )
};

export default TravelPackages;