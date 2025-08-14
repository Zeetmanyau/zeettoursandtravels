import { Link } from 'react-router-dom';
import { Car, MapPin, Star, ArrowRight, Shield, Clock, Users, Phone } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Car,
      title: 'Premium Fleet',
      description: 'Wide range of well-maintained vehicles for all your travel needs'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'All vehicles are regularly serviced and safety checked'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for your convenience'
    },
    {
      icon: Users,
      title: 'Expert Guides',
      description: 'Experienced drivers and tour guides for the best experience'
    }
  ];

  const testimonials = [
    {
      name: 'Supriya Dutta',
      rating: 5,
      comment: 'We took this cab service for 2 days. Wonderful experience, drivers are very well mannered and polite, and very punctual, they reached right on time. We even make a few stops but drivers did not ask any extra cash. Very affordable prices also.',
      location: 'Tinsukia - Assam'
    },
    {
      name: 'Prantik Goswami',
      rating: 5,
      comment: 'Excellent experience with Zeet tours and travels rental services! Friendly staff, clean and well-maintained vehicle, and a very responsive host. Highly recommended.',
      location: 'Tinsukia - Assam'
    },
    {
      name: 'Samujjhal Bharadwaj',
      rating: 5,
      comment: 'Booked the service with rest room and Innova with Zeet Tours and Travels. The owner himself is very cooperative and he made all the arrangements as promised over phone. The driver of the vehicle Mr. Bhaskar Baruah, who drove us to Parasuram Kund and back was also very skilled and cooperative. I recommend the service to you all!',
      location: 'Tinsukia - Assam'
    }
  ];

  return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0">
            <img
                src="public/images/general/homeback.jpg"
                alt="Zeet Tours & Travels Background"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40"></div>
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="text-center pt-16">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                Zeet Tours & Travels
                <span className="block text-yellow-400 drop-shadow-2xl">
                Your Travel Partner
              </span>
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                    to="/car-rentals"
                    className="group bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Car className="h-5 w-5" />
                  <span>Rent a Car</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                    to="/travel-packages"
                    className="group bg-white hover:bg-yellow-50 text-gray-800 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 border border-yellow-600/30 hover:border-yellow-600/50 shadow-lg hover:shadow-xl"
                >
                  <MapPin className="h-5 w-5" />
                  <span>Explore Packages</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <p className="text-xl text-white/90 mt-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                Discover amazing destinations and rent premium vehicles with Zeet Tours and Travels.
                Your comfort and safety are our top priorities.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Zeet Tours?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We provide exceptional service with attention to detail that makes your journey memorable
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-6 border border-yellow-600/20 hover:border-yellow-600/40 transition-all duration-300 group hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-yellow-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Car Rentals */}
              <div className="bg-white rounded-3xl p-8 border border-yellow-600/20 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Car className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Car Rentals</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Choose from our premium fleet of well-maintained vehicles. From compact cars to luxury SUVs,
                  we have the perfect vehicle for your journey.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">15+</div>
                    <div className="text-gray-600 text-sm">Vehicle Types</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">24/7</div>
                    <div className="text-gray-600 text-sm">Availability</div>
                  </div>
                </div>
                <Link
                    to="/car-rentals"
                    className="inline-flex items-center space-x-2 text-yellow-600 hover:text-yellow-500 font-medium"
                >
                  <span>Explore Fleet</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Travel Packages */}
              <div className="bg-white rounded-3xl p-8 border border-yellow-600/20 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Travel Packages</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Discover incredible destinations with our carefully curated travel packages.
                  From adventure tours to cultural experiences, we have something for everyone.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">20+</div>
                    <div className="text-gray-600 text-sm">Destinations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">100%</div>
                    <div className="text-gray-600 text-sm">Customizable</div>
                  </div>
                </div>
                <Link
                    to="/travel-packages"
                    className="inline-flex items-center space-x-2 text-yellow-600 hover:text-yellow-500 font-medium"
                >
                  <span>View Packages</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
              <p className="text-xl text-gray-600">Real experiences from our valued customers</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                  <div
                      key={index}
                      className="bg-white rounded-2xl p-6 border border-yellow-600/20 hover:border-yellow-600/40 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                    <div className="border-t border-yellow-600/20 pt-4">
                      <div className="font-semibold text-gray-800">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.location}</div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-50/50 to-stone-50/50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 border border-yellow-600/20 shadow-lg">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Start Your Journey?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Book your perfect vehicle or explore our amazing travel packages today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href="tel:9706857182"
                    className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Us Now</span>
                </a>
                <Link
                    to="/about"
                    className="bg-white hover:bg-yellow-50 text-gray-800 px-8 py-4 rounded-full font-semibold transition-all duration-300 border border-yellow-600/30 hover:border-yellow-600/50 shadow-lg hover:shadow-xl"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Home;