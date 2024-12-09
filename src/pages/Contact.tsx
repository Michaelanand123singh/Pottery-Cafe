import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Star, Wine, ChefHat, Calendar } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState('contact');

  return (
    <div className="bg-gradient-to-br from-amber-50 via-white to-amber-100 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-12"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-700">
            Culinary Connections
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Discover a world of exquisite dining. Whether you're planning a reservation, 
            seeking catering, or simply want to share your experience, we're here to serve you.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white shadow-lg rounded-full p-2 flex space-x-2">
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'contact' 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white' 
                  : 'text-slate-600 hover:bg-amber-100'
              }`}
            >
              Contact Us
            </button>
            <button
              onClick={() => setActiveTab('reservations')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'reservations' 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white' 
                  : 'text-slate-600 hover:bg-amber-100'
              }`}
            >
              Reservations
            </button>
          </div>
        </div>

        {/* Contact & Reservation Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-amber-100/50">
              <h2 className="text-3xl font-semibold mb-6 text-amber-800">
                {activeTab === 'contact' ? 'Get in Touch' : 'Book Your Experience'}
              </h2>
              
              {activeTab === 'contact' ? (
                <div className="space-y-6">
                  <ContactItem
                    icon={<MapPin className="h-7 w-7" />}
                    title="Restaurant Location"
                    content="123 Gourmet Boulevard, Culinary District"
                  />
                  
                  <ContactItem
                    icon={<Phone className="h-7 w-7" />}
                    title="Reservations & Inquiries"
                    content="+1 (555) DINE-NOW"
                  />
                  
                  <ContactItem
                    icon={<Mail className="h-7 w-7" />}
                    title="Email"
                    content="experience@finedining.com"
                  />
                  
                  <ContactItem
                    icon={<Clock className="h-7 w-7" />}
                    title="Dining Hours"
                    content="Wed-Sun: 5 PM - 10 PM | Closed Mon-Tue"
                  />
                </div>
              ) : (
                <div className="space-y-6">
                  <ContactItem
                    icon={<Calendar className="h-7 w-7" />}
                    title="Advance Booking"
                    content="We recommend booking 2-3 weeks in advance"
                  />
                  
                  <ContactItem
                    icon={<Star className="h-7 w-7" />}
                    title="Private Dining"
                    content="Exclusive chef's table and private room available"
                  />
                  
                  <ContactItem
                    icon={<Wine className="h-7 w-7" />}
                    title="Wine Pairing"
                    content="Sommelier-curated wine experiences available"
                  />
                  
                  <ContactItem
                    icon={<ChefHat className="h-7 w-7" />}
                    title="Special Dietary Needs"
                    content="Custom menus available upon request"
                  />
                </div>
              )}
            </div>

            {/* Location Map */}
            <div className="bg-white/80 backdrop-blur-lg p-4 rounded-2xl shadow-2xl border border-amber-100/50">
              <img
                src="/api/placeholder/600/400"
                alt="Restaurant Location"
                className="w-full h-72 object-cover rounded-xl transform transition hover:scale-105 duration-300"
              />
            </div>
          </div>

          {/* Right Column - Contact/Reservation Form */}
          <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-amber-100/50">
            <h2 className="text-3xl font-semibold mb-6 text-amber-800">
              {activeTab === 'contact' ? 'Send us a Message' : 'Reserve Your Table'}
            </h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/60"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/60"
                />
              </div>

              {activeTab === 'contact' ? (
                <>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/60"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/60"
                    ></textarea>
                  </div>
                </>
              ) : (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/60"
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-slate-700 mb-1">
                        Preferred Time
                      </label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/60"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-slate-700 mb-1">
                      Number of Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/60"
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1} Guest{i > 0 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </>
              )}

              <Button 
                type="submit" 
                variant="primary" 
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white py-3 rounded-full transition-all duration-300"
              >
                {activeTab === 'contact' ? 'Send Message' : 'Confirm Reservation'}
              </Button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ContactItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  content: string;
}> = ({ icon, title, content }) => (
  <div className="flex items-start space-x-4">
    <div className="text-amber-600">{icon}</div>
    <div>
      <h3 className="font-medium text-slate-900">{title}</h3>
      <p className="text-slate-600">{content}</p>
    </div>
  </div>
);

export default Contact;