import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Calendar, Users, Clock, Mail, User, BookOpen } from 'lucide-react';

export const Reservations: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    specialRequests: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated form submission
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setFormData({
      name: '',
      email: '',
      date: '',
      time: '',
      guests: '2',
      occasion: '',
      specialRequests: ''
    });
  };

  if (formSubmitted) {
    return (
      <div className="bg-gradient-to-br from-amber-50 via-white to-amber-100 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-xl shadow-2xl p-12 text-center max-w-md"
        >
          <BookOpen className="mx-auto mb-6 text-amber-600" size={64} />
          <h2 className="text-3xl font-bold mb-4 text-amber-900">Reservation Confirmed!</h2>
          <p className="text-slate-700 mb-6">
            Your table has been reserved. We look forward to welcoming you to our restaurant.
          </p>
          <div className="space-y-4">
            <p className="font-semibold text-slate-800">
              Reservation Details:
            </p>
            <div className="bg-amber-50 p-4 rounded-lg">
              <p className="flex items-center gap-2">
                <User className="text-amber-600" size={20} />
                {formData.name}
              </p>
              <p className="flex items-center gap-2">
                <Calendar className="text-amber-600" size={20} />
                {formData.date}
              </p>
              <p className="flex items-center gap-2">
                <Clock className="text-amber-600" size={20} />
                {formData.time}
              </p>
              <p className="flex items-center gap-2">
                <Users className="text-amber-600" size={20} />
                {formData.guests} {formData.guests === '1' ? 'Guest' : 'Guests'}
              </p>
            </div>
            <Button onClick={resetForm} variant="primary" className="w-full">
              Make Another Reservation
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-amber-50 via-white to-amber-100 min-h-screen py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4"
      >
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Reservation Information Side */}
            <div className="bg-gradient-to-br from-amber-600 to-orange-600 p-12 text-white flex items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Dining Reservation</h2>
                <p className="text-xl mb-6">
                  Experience our culinary journey. Reserve your table and let us create an 
                  unforgettable dining experience tailored just for you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Calendar className="text-white" size={24} />
                    <p>Available 7 days a week</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="text-white" size={24} />
                    <p>Dinner: 5 PM - 10 PM</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Users className="text-white" size={24} />
                    <p>Up to 8 guests per reservation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reservation Form Side */}
            <div className="p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                      <User className="text-amber-600" size={16} /> Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                      <Mail className="text-amber-600" size={16} /> Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                      <Calendar className="text-amber-600" size={16} /> Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                      <Clock className="text-amber-600" size={16} /> Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                      <Users className="text-amber-600" size={16} /> Number of Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="occasion" className="block text-sm font-medium text-slate-700 mb-2">
                      Special Occasion
                    </label>
                    <input
                      type="text"
                      id="occasion"
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      placeholder="Birthday, Anniversary, etc."
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-medium text-slate-700 mb-2">
                    Special Requests
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any dietary restrictions or special arrangements?"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  ></textarea>
                </div>

                <div className="text-center">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="px-12 py-3 text-lg bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
                  >
                    Confirm Reservation
                  </Button>
                </div>
              </form>
            </div>
          </div>
            </div>
      </motion.div>
    </div>
  );
};