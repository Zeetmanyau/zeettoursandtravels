import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { sendContactEmail, ContactFormData } from '../services/emailService';

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const success = await sendContactEmail(formData);

      if (success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 70023 58895', '+91 97068 57182'],
      description: 'Call us for immediate assistance',
      href: 'tel:70023 58895'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['zeettours08@gmail.com'],
      description: 'Send us your queries anytime',
      href: 'mailto:zeettours08@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Kachujan', 'Tinsukia, Assam - 786125'],
      description: 'Visit our office for personalized service',
      href: 'https://www.google.com/maps/place/Zeet+Tours+%26+Travels/data=!4m2!3m1!1s0x0:0xdffc2f44c9064292?sa=X&ved=1t:2428&ictx=111'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 9:00 AM - 8:00 PM', 'Sun: 10:00 AM - 6:00 PM'],
      description: '24/7 Call support available',
      href: 'tel:70023 58895'
    }
  ];

  const services = [
    'Car Rental',
    'Travel Package',
    'Custom Tour Planning',
    'Corporate Travel',
    'Airport Transfer',
    'General Inquiry'
  ];

  return (
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              Get in
              <span className="block bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
              Touch
            </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about our services? Need help planning your next trip?
              We're here to help you every step of the way.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                  <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="bg-white rounded-2xl p-6 border border-yellow-600/30 hover:border-yellow-600/50 transition-all duration-300 group text-center shadow-lg hover:shadow-xl"
                  >
                    <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{info.title}</h3>
                    <div className="space-y-1 mb-3">
                      {info.details.map((detail, idx) => (
                          <div key={idx} className="text-gray-700 text-sm">{detail}</div>
                      ))}
                    </div>
                    <p className="text-gray-600 text-xs">{info.description}</p>
                  </a>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 border border-yellow-600/30 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-600 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Send us a Message</h2>
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-green-800 font-medium">Message sent successfully!</p>
                      <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="text-red-800 font-medium">Failed to send message</p>
                      <p className="text-red-700 text-sm">Please try again or contact us directly.</p>
                    </div>
                  </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-yellow-50 border border-yellow-600/30 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-yellow-600/50 transition-colors disabled:opacity-50"
                        placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-yellow-50 border border-yellow-600/30 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-yellow-600/50 transition-colors disabled:opacity-50"
                        placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-yellow-50 border border-yellow-600/30 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-yellow-600/50 transition-colors disabled:opacity-50"
                        placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-yellow-50 border border-yellow-600/30 rounded-lg text-gray-800 focus:outline-none focus:border-yellow-600/50 transition-colors disabled:opacity-50"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-yellow-50 border border-yellow-600/30 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-yellow-600/50 transition-colors resize-none disabled:opacity-50"
                      placeholder="Tell us about your travel plans or any questions you have..."
                  ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                  ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                  )}
                </button>
              </form>
            </div>

            {/* Quick Contact & FAQ */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-white rounded-2xl p-8 border border-yellow-600/30 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-600 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Quick Contact</h2>
                </div>

                <div className="space-y-4">
                  <a
                      href="tel:9706857182"
                      className="block p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
                  >
                    <h3 className="text-gray-800 font-medium mb-2">For Immediate Booking</h3>
                    <p className="text-yellow-600 font-semibold">+91 9706857182 </p>
                    <p className="text-gray-600 text-sm">Available for urgent bookings</p>
                  </a>

                  <a
                      href="https://wa.me/7002358895"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
                  >
                    <h3 className="text-gray-800 font-medium mb-2">WhatsApp Support</h3>
                    <p className="text-green-600 font-semibold">+91 7002358895</p>
                    <p className="text-gray-600 text-sm">Quick responses via WhatsApp</p>
                  </a>

                  <a
                      href="mailto:zeettours08@gmail.com"
                      className="block p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
                  >
                    <h3 className="text-gray-800 font-medium mb-2">Email Support</h3>
                    <p className="text-yellow-600 font-semibold">zeettours08@gmail.com</p>
                    <p className="text-gray-600 text-sm">Detailed queries and documentation</p>
                  </a>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-2xl p-8 border border-yellow-600/30 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>

                <div className="space-y-4">
                  <div className="border-b border-yellow-600/30 pb-4">
                    <h3 className="text-gray-800 font-medium mb-2">How do I book a car?</h3>
                    <p className="text-gray-600 text-sm">
                      You can book through our website, call us directly, or visit our office.
                      We'll need your travel dates, destination, and preferred vehicle type.
                    </p>
                  </div>

                  <div className="border-b border-yellow-600/30 pb-4">
                    <h3 className="text-gray-800 font-medium mb-2">Are your drivers experienced?</h3>
                    <p className="text-gray-600 text-sm">
                      Yes, all our drivers are licensed, experienced, and familiar with local routes.
                      They undergo regular training and background checks.
                    </p>
                  </div>

                  <div className="border-b border-yellow-600/30 pb-4">
                    <h3 className="text-gray-800 font-medium mb-2">Can I customize travel packages?</h3>
                    <p className="text-gray-600 text-sm">
                      Absolutely! We offer fully customizable packages based on your preferences,
                      budget, and travel dates. Contact us to discuss your requirements.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-gray-800 font-medium mb-2">What's your cancellation policy?</h3>
                    <p className="text-gray-600 text-sm">
                      Cancellation policies vary by service type. Generally, we offer flexible
                      cancellation with advance notice. Contact us for specific terms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Google Maps Section */}
          <div className="mt-16 bg-white rounded-2xl p-8 border border-yellow-600/30 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Visit Our Office</h2>

            {/* Replace this iframe with your actual Google Maps embed */}
            <div className="rounded-lg overflow-hidden">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.0047574762184!2d95.3647266!3d27.500227499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x373f6b1472b26def%3A0xdffc2f44c9064292!2sZeet%20Tours%20%26%20Travels!5e0!3m2!1sen!2sin!4v1752003294813!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zeet Tours & Travels Office Location"
              ></iframe>
            </div>

            {/* Address and directions */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <MapPin className="h-5 w-5 text-yellow-600 mr-2" />
                  Our Address
                </h3>
                <p className="text-gray-700">
                  Kachujan<br />
                  Tinsukia, Assam - 786125
                </p>
              </div>

              <div className="bg-yellow-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Get Directions</h3>
                <a
                    href="https://www.google.com/maps/place/Zeet+Tours+%26+Travels/@27.5002275,95.3647266,17z/data=!3m1!4b1!4m6!3m5!1s0x373f6b1472b26def:0xdffc2f44c9064292!8m2!3d27.5002275!4d95.3647266!16s%2Fg%2F11fn9chnwn?entry=ttu&g_ep=EgoyMDI1MDcwNi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-600 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contact;