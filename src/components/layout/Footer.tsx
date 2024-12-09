import React from 'react';
import { Coffee, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-bold">Pottery Cafe</span>
            </div>
            <p className="text-slate-400">
              Experience the perfect blend of artisanal coffee and unique atmosphere.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/menu" className="text-slate-400 hover:text-amber-500">Menu</Link></li>
              <li><Link to="/reservations" className="text-slate-400 hover:text-amber-500">Reservations</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-amber-500">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <p className="text-slate-400">Open 24/7</p>
            <p className="text-slate-400">Always here to serve you</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-amber-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-500">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Pottery Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};