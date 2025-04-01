import React from 'react';
import { FaHeart } from 'react-icons/fa'; // Import the heart icon from React Icons
import myimg1 from '../assets/Image -1.png';
import myimg2 from '../assets/Image -2.png';
import myimg3 from '../assets/Image -3.png';
import myimg4 from '../assets/Image -4.png';
import myimg5 from '../assets/Image -5.png';
import myimg6 from '../assets/Image -6.png';
import myimg7 from '../assets/Image -7.png';
import myimg8 from '../assets/Image -8.png';
import myimg9 from '../assets/Image -9.png';
import myimg10 from '../assets/Image -10.png';
import myimg11 from '../assets/Image -11.png';
import myimg12 from '../assets/Image -12.png';
import myimg13 from '../assets/Image -13.png';
import myimg14 from '../assets/Image -14.png';
import myimg15 from '../assets/Image -15.png';
import myimg16 from '../assets/Image -16.png';
import myimg17 from '../assets/Image -17.png';
import myimg18 from '../assets/Image -18.png';
import myimg19 from '../assets/Image -19.png';
import myimg20 from '../assets/Image -20.png';

// Array of images
const images = [
  myimg1, myimg2, myimg3, myimg4, myimg5,
  myimg6, myimg7, myimg8, myimg9, myimg10,
  myimg11, myimg12, myimg13, myimg14, myimg15,
  myimg16, myimg17, myimg18, myimg19, myimg20,
];

// Generate properties dynamically
const properties = images.map((image, index) => ({
  image,
  location: `Location ${index + 1}, California, US`,
  description: "Beautiful property with amazing views",
  date: "22–27 Oct · Individual Host",
  price: `£${(1500 + index * 50).toLocaleString()} total`,
  rating: (4.5 + (index % 5) * 0.1).toFixed(1),
}));

function Hero() {
  return (
    <div>

      {/* Hero Section */}
      

      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <div key={index} className="overflow-hidden shadow-sm relative rounded-lg">
              {/* Image Section */}
              <img
                src={property.image}
                alt={`Property ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg" // Increased image height
              />

              {/* Heart Icon */}
              <div className="absolute top-2 right-2 p-1 rounded-full shadow-md cursor-pointer bg-white">
                <FaHeart className="text-gray-700 w-5 h-5" />
              </div>

              {/* Property Details */}
              <div className="p-4">
                <h3 className="text-sm font-semibold">{property.location}</h3>
                <p className="text-gray-600 text-sm">{property.description}</p>
                <p className="text-gray-500 text-xs">{property.date}</p>
                <p className="text-black font-bold underline mt-3">{property.price}</p>
                <p className="text-sm text-gray-700 mt-2">⭐ {property.rating}</p> {/* Moved rating here */}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className="px-4 py-2 bg-black text-white rounded-lg">Show more</button>
        </div>
      </div>

      
      <div className="bg-gray-100 py-10 px-6 text-gray-700">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Inspiration for future getaways</h2>

          <nav className="flex space-x-6 border-b pb-4">
            {['Popular', 'Historic', 'Coastal', 'Islands', 'Lakes', 'Unique stays', 'Categories', 'Things to do'].map((item) => (
              <button key={item} className="text-gray-800 font-medium hover:underline">{item}</button>
            ))}
          </nav>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">
            {Array(12).fill("Aberfeldy").map((location, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900">{location}</h3>
                <p className="text-sm text-gray-600">{['Holiday rentals', 'Flat rentals', 'Villa rentals', 'Cottage rentals', 'House rentals'][index % 5]}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t pt-6 mt-6 text-sm">
            <div>
              <h4 className="font-semibold">Support</h4>
              {['Help centre', 'AirCover', 'Anti-discrimination', 'Disability support', 'Cancellation options', 'Report neighbourhood concern'].map((item) => (
                <p key={item} className="hover:underline cursor-pointer">{item}</p>
              ))}
            </div>
            <div>
              <h4 className="font-semibold">Hosting</h4>
              {['Airbnb your home', 'AirCover for hosts', 'Hosting resources', 'Community forum', 'Hosting responsibly'].map((item) => (
                <p key={item} className="hover:underline cursor-pointer">{item}</p>
              ))}
            </div>
            <div>
              <h4 className="font-semibold">Airbnb</h4>
              {['Newsroom', 'New features', 'Careers', 'Investors', 'Gift cards', 'Airbnb.org emergency stays'].map((item) => (
                <p key={item} className="hover:underline cursor-pointer">{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;