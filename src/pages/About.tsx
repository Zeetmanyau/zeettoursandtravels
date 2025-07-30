import { Car, MapPin, Users, Award, Clock, Shield, Heart, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Car, value: '1000+', label: 'Happy Customers' },
    { icon: MapPin, value: '20+', label: 'Destinations Covered' },
    { icon: Clock, value: '17+', label: 'Years Experience' },
    { icon: Award, value: '100%', label: 'Customer Satisfaction' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'We prioritize your safety with regularly maintained vehicles and experienced drivers.'
    },
    {
      icon: Heart,
      title: 'Customer Care',
      description: 'Your comfort and satisfaction are at the heart of everything we do.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every service we provide, ensuring memorable experiences.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building lasting relationships with our customers and supporting local communities.'
    }
  ];

  return (
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              About
              <span className="block bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
              Zeet Tours & Travels
            </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are passionate about creating unforgettable travel experiences through premium car rentals
              and carefully curated travel packages across incredible destinations.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                  <div
                      key={index}
                      className="bg-white rounded-2xl p-6 border border-yellow-600/30 text-center hover:border-yellow-600/50 transition-all duration-300 group shadow-lg hover:shadow-xl"
                  >
                    <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
              );
            })}
          </div>

          {/* Our Story */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2008, Zeet Tours & Travels began with a simple mission: to make travel
                    accessible, safe, and enjoyable for everyone. What started as a small car rental
                    service has grown into a comprehensive travel solutions provider.
                  </p>
                  <p>
                    We believe that every journey should be memorable, whether it's a quick city ride
                    or an elaborate multi-day adventure. Our commitment to quality service and customer
                    satisfaction has earned us the trust of hundreds of satisfied customers.
                  </p>
                  <p>
                    Today, we operate a diverse fleet of well-maintained vehicles and offer curated
                    travel packages to some of India's most beautiful destinations. Our experienced
                    team is dedicated to ensuring your travel experience exceeds expectations.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden">
                  <img
                      src="/images/general/about.png"
                      alt="Our Fleet"
                      className="w-full h-80 object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These core values guide everything we do and shape how we serve our customers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-6 border border-yellow-600/30 hover:border-yellow-600/50 transition-all duration-300 group text-center shadow-lg hover:shadow-xl"
                    >
                      <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </div>
                );
              })}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 border border-yellow-600/30">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide exceptional travel experiences through reliable car rentals and thoughtfully
                designed travel packages, while ensuring the highest standards of safety, comfort, and
                customer satisfaction. We aim to make every journey memorable and stress-free.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 border border-yellow-600/30">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become the most trusted and preferred travel partner in India, known for our
                commitment to excellence, innovation in service delivery, and our contribution to
                sustainable tourism that benefits local communities and preserves natural beauty.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-yellow-50 to-stone-50 rounded-3xl p-12 border border-yellow-600/30">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Travel with Us?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who have trusted us with their travel needs.
              Let's create your next unforgettable journey together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                  href="tel:7002358895"
                  className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Call Us Now
              </a>
              <a
                  href="/car-rentals"
                  className="bg-white hover:bg-yellow-50 text-gray-800 px-8 py-4 rounded-full font-semibold transition-all duration-300 border border-yellow-600/30 hover:border-yellow-600/50 shadow-lg hover:shadow-xl"
              >
                View Our Fleet
              </a>
              <a
                  href="/travel-packages"
                  className="bg-white hover:bg-yellow-50 text-gray-800 px-8 py-4 rounded-full font-semibold transition-all duration-300 border border-yellow-600/30 hover:border-yellow-600/50 shadow-lg hover:shadow-xl"
              >
                View Our Travel Packages
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;