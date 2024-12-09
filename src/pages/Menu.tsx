import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Leaf, Search, Filter } from 'lucide-react';

const menuItems = [
  {
    id: '1',
    name: 'Avocado Toast',
    description: 'Smashed avocado on sourdough with poached eggs',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1603046891744-1f76eb10aec1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    category: 'breakfast',
    dietary: ['vegetarian', 'healthy'],
    tags: ['popular']
  },
  {
    id: '2',
    name: 'Specialty Latte',
    description: 'House-blend espresso with steamed milk',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    category: 'beverages',
    tags: ['bestseller']
  },
  {
    id: '3',
    name: 'Mediterranean Mezze Platter',
    description: 'Hummus, falafel, olives, and warm pita bread',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1540116832172-3a5adffff3a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    category: 'snacks',
    dietary: ['vegetarian', 'vegan'],
    tags: ['chef-special']
  },
  {
    id: '4',
    name: 'Matcha Green Tea Tiramisu',
    description: 'Delicate layers of matcha-infused mascarpone',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1558326370-c6f0e876c063?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    category: 'desserts',
    dietary: ['vegetarian']
  },
  // More menu items...
] as const;

const categories = [
  { id: 'all', name: 'All', icon: <Coffee /> },
  { id: 'breakfast', name: 'Breakfast', icon: <Coffee /> },
  { id: 'beverages', name: 'Beverages', icon: <Coffee /> },
  { id: 'snacks', name: 'Small Plates', icon: <Leaf /> },
  { id: 'desserts', name: 'Desserts', icon: <Coffee /> }
];

export const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = menuItems.filter(item => 
    (selectedCategory === 'all' || item.category === selectedCategory) &&
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-br from-amber-50 via-white to-amber-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-600">
            Culinary Selections
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            A carefully curated journey through flavors, textures, and culinary innovations. 
            Each dish is a testament to our commitment to quality and creativity.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
          <div className="relative w-full max-w-md">
            <input 
              type="text" 
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-amber-200 focus:border-amber-500 transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-600" />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(category => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 shadow-md ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white'
                  : 'bg-white text-slate-600 hover:bg-amber-50'
              }`}
            >
              {category.icon}
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-2xl text-slate-600">
              No items found. Try a different search or category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const MenuItem: React.FC<{ item: typeof menuItems[number] }> = ({ item }) => (
  <motion.div
    whileHover={{ y: -10, scale: 1.03 }}
    className="bg-white rounded-xl shadow-2xl overflow-hidden relative transition-all duration-300 hover:shadow-2xl"
  >
    <div className="h-56 relative">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover"
      />
      {item.tags?.map(tag => (
        <div 
          key={tag} 
          className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-semibold ${
            tag === 'bestseller' 
              ? 'bg-amber-500 text-white' 
              : tag === 'chef-special'
              ? 'bg-green-500 text-white'
              : 'bg-blue-500 text-white'
          }`}
        >
          {tag === 'bestseller' ? 'Bestseller' : tag === 'chef-special' ? "Chef's Special" : tag}
        </div>
      ))}
    </div>
    
    <div className="p-6">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-amber-900">{item.name}</h3>
        <span className="text-amber-600 font-bold text-lg">${item.price.toFixed(2)}</span>
      </div>
      <p className="text-slate-700 mb-4">{item.description}</p>
      
      <div className="flex items-center gap-2">
        {item.dietary?.map(diet => (
          <span 
            key={diet} 
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              diet === 'vegetarian' 
                ? 'bg-green-100 text-green-800'
                : diet === 'vegan'
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-blue-100 text-blue-800'
            }`}
          >
            {diet}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);