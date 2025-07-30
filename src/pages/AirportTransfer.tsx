import { Plane, Users, Clock, MapPin, CheckCircle, Star, Phone, Mail, ArrowRight } from 'lucide-react';

const AirportTransfer = () => {
  const features = [
    {
      icon: Users,
      title: 'Shared Rides',
      description: 'Cost-effective shared taxi service with other passengers'
    },
    {
      icon: Clock,
      title: '12 Hours Advance',
      description: 'Book at least 12 hours before your travel time'
    },
    {
      icon: CheckCircle,
      title: 'Reliable Service',
      description: 'Professional drivers and well-maintained vehicles'
    },
    {
      icon: MapPin,
      title: 'Convenient Route',
      description: 'Direct connection from Tinsukia to Dibrugarh Airport'
    }
  ];

  const testimonials = [
    {
      name: 'Santosh Shah',
      rating: 5,
      comment: 'Clean cars with well behaved deivers.',
      route: 'Tinsukia'
    },
    {
      name: 'Ujjal Kr Dutta',
      rating: 5,
      comment: 'So far, nice experience. Look forward for them to continue the good service.',
      route: 'Tinsukia'
    },
    {
      name: 'Plaban Dutta',
      rating: 5,
      comment: 'Had a very great experience. Very good response and politeness overloaded, would have given 7 stars if there was an option.',
      route: 'Tinsukia'
    }
  ];

  return (
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              Airport Share
              <span className="block bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
              Taxi Transfer
            </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Travel easily between Dibrugarh Airport and Tinsukia with our reliable shared taxi service.
              Call us 12 hours in advance for guaranteed service!
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                  <div
                      key={index}
                      className="bg-white rounded-2xl p-6 border border-yellow-600/30 hover:border-yellow-600/50 transition-all duration-300 group text-center shadow-lg hover:shadow-xl"
                  >
                    <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
              );
            })}
          </div>

          {/* Route Information */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Service Route</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Connecting Dibrugarh Airport to Tinsukia town with reliable shared taxi service
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl p-8 border border-yellow-600/30 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-100 p-4 rounded-lg mr-6">
                    <Plane className="h-8 w-8 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-800">Dibrugarh Airport</h3>
                    <div className="flex items-center text-gray-600 text-lg mt-2">
                      <ArrowRight className="h-5 w-5 mx-3" />
                      <span>Tinsukia</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600">₹500</div>
                    <div className="text-gray-600 text-sm">Per person</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-gray-800">54 mins</div>
                    <div className="text-gray-600 text-sm">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-gray-800">47.6 km</div>
                    <div className="text-gray-600 text-sm">Distance</div>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-8 text-gray-600">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    <span>Shared ride</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>12hrs advance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16 bg-white rounded-2xl p-8 border border-yellow-600/30 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How It Works</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-yellow-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Call Us</h3>
                <p className="text-gray-600 text-sm">Contact us via phone at least 12 hours before your travel time</p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Get Confirmation</h3>
                <p className="text-gray-600 text-sm">Receive pickup time, meeting point, and driver contact details</p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Meet & Travel</h3>
                <p className="text-gray-600 text-sm">Meet at the designated point and enjoy your comfortable shared ride</p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Reach Destination</h3>
                <p className="text-gray-600 text-sm">Arrive safely at your destination with fellow travelers</p>
              </div>
            </div>
          </div>

          {/* Booking Requirements & Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 border border-yellow-600/30 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Booking Requirements</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600" />
                  <span className="text-gray-700">Call minimum 12 hours in advance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600" />
                  <span className="text-gray-700">Provide flight details and contact number</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600" />
                  <span className="text-gray-700">Confirm pickup location preference</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600" />
                  <span className="text-gray-700">Payment on arrival or advance as preferred</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-yellow-600/30 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Service Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600" />
                  <span className="text-gray-700">Up to 60% cheaper than private taxis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600" />
                  <span className="text-gray-700">Fixed pricing - no surge charges</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600" />
                  <span className="text-gray-700">Professional and experienced drivers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-yellow-600" />
                  <span className="text-gray-700">Safe and comfortable vehicles</span>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="mb-16 bg-yellow-50 rounded-2xl p-8 border border-yellow-600/30">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Clock className="h-6 w-6 text-yellow-600 mr-3" />
              Important Booking Information
            </h3>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Advance Booking Required:</strong> All airport transfer bookings must be made at least 12 hours before your scheduled travel time to ensure availability and proper coordination.
              </p>
              <p>
                <strong>Phone Booking Only:</strong> To ensure clear communication and immediate confirmation, we only accept bookings via phone call. Our team will take all your details and provide instant confirmation.
              </p>
              <p>
                <strong>Confirmation Process:</strong> Once booked, you'll receive confirmation with driver details, pickup time, and meeting point information via phone or message.
              </p>
              <p>
                <strong>Flexibility:</strong> While we operate shared rides, we can accommodate special requests and timing preferences based on availability.
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Passengers Say</h2>
              <p className="text-gray-600">Real experiences from our satisfied customers</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                  <div
                      key={index}
                      className="bg-white rounded-2xl p-6 border border-yellow-600/30 hover:border-yellow-600/50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                    <div className="border-t border-yellow-600/30 pt-4">
                      <div className="font-semibold text-gray-800">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.route}</div>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* Booking Section */}
          <div className="bg-gradient-to-r from-yellow-50 to-stone-50 rounded-3xl p-12 border border-yellow-600/30 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Book Your Transfer?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Book your seat for Dibrugarh Airport to City Center - Only ₹500 per person.
              Call us at least 12 hours in advance for guaranteed service!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                  href="tel:7002358895"
                  className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Phone className="h-5 w-5" />
                <span>Call to Book Now</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto text-sm text-gray-600 mb-4">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 7002358895</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>zeettours08@gmail.com</span>
              </div>
            </div>

            <div className="text-yellow-700 text-sm font-medium bg-yellow-100 rounded-lg p-3 max-w-lg mx-auto">
              Call us at least 12 hours before your travel time for guaranteed service
            </div>
          </div>
        </div>
      </div>
  );
};

export default AirportTransfer;