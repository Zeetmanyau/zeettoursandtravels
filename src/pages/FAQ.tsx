import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Phone, Mail, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqCategories = [
    {
      title: 'Booking & Reservations',
      icon: HelpCircle,
      questions: [
        {
          question: 'How do I book a car or travel package?',
          answer: 'You can book through our website by clicking the "Book Now" button on any car or package. This will open a Google Form where you can provide your details and requirements. Alternatively, you can call us directly or visit our office for personalized assistance.'
        },
        {
          question: 'What information do I need to provide when booking?',
          answer: 'For car rentals, we need your travel dates, pickup/drop-off locations, preferred vehicle type, and contact details. For travel packages, we need your preferred dates, number of travelers, accommodation preferences, and any special requirements or dietary restrictions.'
        },
        {
          question: 'How far in advance should I book?',
          answer: 'We recommend booking at least 7-15 days in advance, especially during peak seasons (October to March) and festivals. For popular destinations like Tawang or during Durga Puja, booking 3-4 weeks ahead is advisable to ensure availability.'
        },
        {
          question: 'Can I modify my booking after confirmation?',
          answer: 'Yes, modifications are possible subject to availability and may incur additional charges. Changes to travel dates, vehicle type, or package components should be requested at least 48 hours before your scheduled departure.'
        }
      ]
    },
    {
      title: 'Payment & Pricing',
      icon: HelpCircle,
      questions: [
        {
          question: 'What are your payment terms?',
          answer: 'We typically require a 30% advance payment to confirm your booking, with the balance due before departure. For packages above ₹20,000, we offer flexible payment plans. We accept bank transfers, credit cards, UPI, and digital wallets.'
        },
        {
          question: 'What is the cancellation policy?',
          answer: 'Cancellations made 7+ days before departure receive a full refund minus 10% processing fee. Cancellations 3-6 days before receive 50% refund. Cancellations within 48 hours are non-refundable. Emergency cancellations due to medical reasons are reviewed case-by-case.'
        },
        {
          question: 'Are there any hidden charges?',
          answer: 'No, we believe in transparent pricing. All costs are clearly mentioned in your booking confirmation. The only additional charges might be for extra kilometers (beyond package limits), toll taxes on certain routes, or optional activities not included in the package.'
        },
        {
          question: 'Do you offer group discounts?',
          answer: 'Yes, we offer attractive discounts for groups of 8+ people. Corporate bookings and repeat customers also enjoy special rates. Contact us directly to discuss group pricing and customized packages for your specific requirements.'
        }
      ]
    },
    {
      title: 'Vehicles & Drivers',
      icon: HelpCircle,
      questions: [
        {
          question: 'Are your cars chauffeur-driven?',
          answer: 'Yes, all our vehicles come with experienced, licensed drivers who are familiar with local routes and destinations. Our drivers are professionally trained, courteous, and committed to ensuring your safety and comfort throughout the journey.'
        },
        {
          question: 'What if I want to drive myself?',
          answer: 'Currently, we only offer chauffeur-driven services for safety and insurance reasons. Our drivers are well-trained and familiar with local conditions, especially important for challenging terrains in Northeast India.'
        },
        {
          question: 'Are your vehicles well-maintained?',
          answer: 'Absolutely! All our vehicles undergo regular maintenance and safety checks. We ensure they are clean, comfortable, and equipped with necessary safety features. Each vehicle is inspected before every trip.'
        },
        {
          question: 'What happens if the vehicle breaks down?',
          answer: 'In the unlikely event of a breakdown, we provide immediate roadside assistance and arrange a replacement vehicle as quickly as possible. Our 24/7 support team ensures minimal disruption to your travel plans.'
        }
      ]
    },
    {
      title: 'Travel Packages',
      icon: HelpCircle,
      questions: [
        {
          question: 'Can I customize a tour package?',
          answer: 'Absolutely! We specialize in creating customized travel experiences. You can modify existing packages or create entirely new itineraries based on your preferences, budget, and time constraints. Our travel experts will work with you to design the perfect trip.'
        },
        {
          question: 'What is included in the package price?',
          answer: 'Package inclusions vary by tour but typically include accommodation, specified meals, transportation, entry fees to attractions, and guide services. Detailed inclusions are listed on each package page. Personal expenses, tips, and optional activities are usually excluded.'
        },
        {
          question: 'Do you provide travel insurance?',
          answer: 'While we don\'t directly provide travel insurance, we strongly recommend purchasing comprehensive travel insurance for your trip. We can guide you to reputable insurance providers and help you understand what coverage would be best for your specific travel plans.'
        },
        {
          question: 'What about permits for restricted areas?',
          answer: 'We handle all necessary permits for destinations like Arunachal Pradesh, Sikkim, and other restricted areas. The permit costs are included in our packages, and we manage the entire application process. You just need to provide required documents.'
        }
      ]
    },
    {
      title: 'Safety & Support',
      icon: HelpCircle,
      questions: [
        {
          question: 'How do you ensure passenger safety?',
          answer: 'Safety is our top priority. All drivers are verified and trained, vehicles are regularly maintained, we provide 24/7 support, and our itineraries are planned considering weather and road conditions. We also maintain emergency contacts at all destinations.'
        },
        {
          question: 'What support do you provide during the trip?',
          answer: 'We provide 24/7 phone support throughout your journey. Our local representatives are available at major destinations, and we maintain regular check-ins for longer trips. Emergency assistance is always just a phone call away.'
        },
        {
          question: 'What should I do in case of emergency?',
          answer: 'Contact our 24/7 emergency helpline immediately. We have established protocols for medical emergencies, vehicle issues, and other unforeseen circumstances. Our team will coordinate with local authorities and provide necessary assistance.'
        },
        {
          question: 'Are your packages suitable for elderly travelers?',
          answer: 'Many of our packages are suitable for elderly travelers, especially our cultural and wildlife tours. We can customize itineraries to include comfortable accommodations, shorter travel distances, and appropriate activities. Please inform us of any special requirements when booking.'
        }
      ]
    }
  ];

  const toggleFaq = (categoryIndex: number, questionIndex: number) => {
    const faqId = categoryIndex * 100 + questionIndex;
    setOpenFaq(openFaq === faqId ? null : faqId);
  };

  return (
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              Frequently Asked
              <span className="block bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
              Questions
            </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our travel packages, car rentals, and services.
              Can't find what you're looking for? Contact us directly.
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <a
                href="tel:9706857182"
                className="bg-white rounded-2xl p-6 border border-yellow-600/30 text-center hover:border-yellow-600/50 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <div className="bg-yellow-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Call Us</h3>
              <p className="text-yellow-600 font-medium">+91 9706857182</p>
              <p className="text-gray-600 text-sm">Call Support Available</p>
            </a>

            <a
                href="mailto:zeettours08@gmail.com"
                className="bg-white rounded-2xl p-6 border border-yellow-600/30 text-center hover:border-yellow-600/50 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <div className="bg-yellow-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Us</h3>
              <p className="text-yellow-600 font-medium">zeettours08@gmail.com</p>
              <p className="text-gray-600 text-sm">Quick Response Guaranteed</p>
            </a>

            <a
                href="https://wa.me/7002358895"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-6 border border-yellow-600/30 text-center hover:border-yellow-600/50 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <div className="bg-yellow-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">WhatsApp</h3>
              <p className="text-yellow-600 font-medium">+91 7002358895</p>
              <p className="text-gray-600 text-sm">Instant Messaging Support</p>
            </a>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                  <div key={categoryIndex} className="bg-white rounded-2xl border border-yellow-600/30 overflow-hidden shadow-lg">
                    {/* Category Header */}
                    <div className="bg-gradient-to-r from-yellow-50 to-stone-50 px-6 py-4 border-b border-yellow-600/30">
                      <div className="flex items-center space-x-3">
                        <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 w-10 h-10 rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-800">{category.title}</h2>
                      </div>
                    </div>

                    {/* Questions */}
                    <div className="divide-y divide-yellow-600/30">
                      {category.questions.map((faq, questionIndex) => {
                        const faqId = categoryIndex * 100 + questionIndex;
                        const isOpen = openFaq === faqId;

                        return (
                            <div key={questionIndex}>
                              <button
                                  onClick={() => toggleFaq(categoryIndex, questionIndex)}
                                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-yellow-50 transition-colors"
                              >
                                <h3 className="text-lg font-medium text-gray-800 pr-4">{faq.question}</h3>
                                {isOpen ? (
                                    <ChevronUp className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                                )}
                              </button>

                              {isOpen && (
                                  <div className="px-6 pb-4">
                                    <div className="bg-yellow-50 rounded-lg p-4">
                                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                    </div>
                                  </div>
                              )}
                            </div>
                        );
                      })}
                    </div>
                  </div>
              );
            })}
          </div>

          {/* Still Have Questions Section */}
          <div className="mt-16 bg-gradient-to-r from-yellow-50 to-stone-50 rounded-3xl p-12 border border-yellow-600/30 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our travel experts are here to help you plan the perfect trip. Get in touch with us for
              personalized assistance and detailed information about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                  href="/contact"
                  className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </a>
              <a
                  href="tel:7002358895"
                  className="bg-white hover:bg-yellow-50 text-gray-800 px-8 py-4 rounded-full font-semibold transition-all duration-300 border border-yellow-600/30 hover:border-yellow-600/50 shadow-lg hover:shadow-xl"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default FAQ;