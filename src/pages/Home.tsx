import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Coffee, Clock, MapPin, Star, Leaf, Wine, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-amber-50 via-white to-amber-100">
      {/* Hero Section with Gradient Overlay */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=2847&q=80"
            alt="Gourmet Restaurant Interior"
            className="w-full h-full object-cover opacity-100 blur-sm"
          />
          <div className="absolute inset-0 " />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-200">
              Culinary Artistry
            </h1>
            <p className="text-xl mb-8 font-light text-white/90">
              An exquisite dining experience that blends innovative cuisine, 
              artisanal craftsmanship, and unparalleled hospitality.
            </p>
            <div className="flex space-x-4">
              <Link to="/menu">
                <Button variant="primary" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
                  Explore Menu
                </Button>
              </Link>
              <Link to="/reservations">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Reserve Table
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Unique Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature 
            icon={<Leaf className="h-8 w-8" />}
            title="Farm-to-Table"
            description="Locally sourced, seasonally inspired ingredients from regional farmers and producers."
          />
          <Feature 
            icon={<Wine className="h-8 w-8" />}
            title="Curated Wines"
            description="An extensive selection of premium wines carefully paired with our signature dishes."
          />
          <Feature 
            icon={<ChefHat className="h-8 w-8" />}
            title="Master Chefs"
            description="Internationally trained chefs creating culinary masterpieces with passion and precision."
          />
        </div>
      </section>

      {/* Chef's Showcase Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-amber-900">
              Meet Our Head Chef
            </h2>
            <p className="text-xl text-slate-700 mb-6">
              Executive Chef Elena Rodriguez brings a world of culinary experience, 
              blending traditional techniques with modern innovation. With michelin-starred 
              training and a passion for local ingredients, she creates dining experiences 
              that are both memorable and transformative.
            </p>
            <Link to="/about-chef">
              <Button variant="primary" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
                Chef's Journey
              </Button>
            </Link>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1595475207225-428b62bda831?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" 
              alt="Chef Elena Rodriguez"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Gallery Section with Gradient */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">
          Culinary Moments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GalleryImage 
            src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Gourmet Plating"
          />
          <GalleryImage 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Elegant Dining Space"
          />
          <GalleryImage 
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Signature Cocktails"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">
          What Our Guests Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Testimonial 
            quote="An extraordinary culinary journey that awakens all senses."
            author="Michael Thompson"
            position="Food Critic"
          />
          <Testimonial 
            quote="The most innovative and delightful dining experience in the city."
            author="Sarah Chen"
            position="Renowned Chef"
          />
          <Testimonial 
            quote="Every dish tells a story of passion, creativity, and perfection."
            author="David Rodriguez"
            position="Hospitality Magazine"
          />
        </div>
      </section>

      {/* Location Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12 flex items-center bg-gradient-to-r from-amber-50 to-white">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-amber-900">
                  Find Our Sanctuary
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-amber-600" />
                    <p className="text-lg">123 Culinary Boulevard, Gourmet District</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-amber-600" />
                    <p className="text-lg">Dinner: 5 PM - 10 PM | Reservations Recommended</p>
                  </div>
                </div>
                <Link to="/contact" className="inline-block">
                  <Button variant="primary" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
                    Book Your Experience
                  </Button>
                </Link>
              </div>
            </div>
            <div className="h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                alt="Restaurant Location"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Feature: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-white p-8 rounded-xl shadow-2xl text-center transition-all duration-300 hover:shadow-2xl"
  >
    <div className="text-amber-600 mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-amber-900">{title}</h3>
    <p className="text-slate-700">{description}</p>
  </motion.div>
);

const GalleryImage: React.FC<{
  src: string;
  alt: string;
}> = ({ src, alt }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="rounded-xl overflow-hidden shadow-2xl"
  >
    <img src={src} alt={alt} className="w-full h-64 object-cover" />
  </motion.div>
);

const Testimonial: React.FC<{
  quote: string;
  author: string;
  position: string;
}> = ({ quote, author, position }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-white p-8 rounded-xl shadow-xl text-center"
  >
    <p className="text-xl italic text-slate-700 mb-4">
      &ldquo;{quote}&rdquo;
    </p>
    <div>
      <p className="font-semibold text-amber-900">{author}</p>
      <p className="text-slate-600 text-sm">{position}</p>
    </div>
  </motion.div>
);