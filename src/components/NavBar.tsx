import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import log from "../assets/Frame 1.jpg";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Menu,
  X,
  Filter,
  ChevronRight,
  Mountain,
  Home,
  Waves,
  MountainSnow,
  Music,
  Landmark,
  Gem,
  Ship,
  Trees,
  Search,
  User,
  Globe,
} from "lucide-react";

const Navbar: React.FC = () => {
  const categories = [
    { name: "Amazing views", icon: <Mountain /> },
    { name: "Cabins", icon: <Home /> },
    { name: "Beachfront", icon: <Waves /> },
    { name: "Skiing", icon: <MountainSnow /> },
    { name: "Grand pianos", icon: <Music /> },
    { name: "Mansions", icon: <Landmark /> },
    { name: "OMG!", icon: <Gem /> },
    { name: "Amazing pools", icon: <Waves /> },
    { name: "Luxe", icon: <Gem /> },
    { name: "Boats", icon: <Ship /> },
    { name: "Lakefront", icon: <Waves /> },
    { name: "Treehouses", icon: <Trees /> },
    { name: "Arrows", icon: <ArrowRight /> },
    { name: "Menu", icon: <Menu /> },
    { name: "Close", icon: <X /> },
    { name: "Filters", icon: <Filter /> },
    { name: "Chevrons", icon: <ChevronRight /> },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks login state
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // Set login state to true
    alert("You are now logged in!");
    navigate("/"); // Redirect to the home page after login
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Reset login state
    alert("You have been logged out!");
    navigate("/login");
  };

  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (confirmDelete) {
      alert("Your account has been deleted.");
      setIsLoggedIn(false); // Reset login state
      navigate("/signup");
    }
  };


  

    

  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="text-red-500 font-bold text-xl flex items-center">
          <img className="h-8 w-auto" src={log} alt="Logo" />
        </div>
        <div className="hidden md:flex items-center border rounded-full px-4 py-2 space-x-2">
          <button className="text-gray-700 font-medium">Anywhere</button>
          <span className="text-gray-400">|</span>
          <button className="text-gray-700 font-medium">Any week</button>
          <span className="text-gray-400">|</span>
          <button className="text-gray-400">Add guests</button>
          <button className="bg-red-500 text-white rounded-full p-2">
            <Search size={14} />
          </button>
        </div>
        <div className="flex items-center space-x-4 relative" ref={menuRef}>
          {isLoggedIn && (
            <button className="hidden md:block text-gray-700">Airbnb your home</button>
          )}
          <button className="hidden md:block text-gray-700">
            <Globe />
          </button>
          <div
            className="flex items-center border rounded-full px-3 py-1 space-x-2 cursor-pointer"
            onClick={handleToggle} // Toggle menu on click
          >
            <Menu />
            <User className="text-gray-500" size={20} />
          </div>
          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 w-48 bg-white py-2 z-10 mt-72">
              <Link
                to="/"
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Home
              </Link>
              <Link
                to="/login"
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                login
              </Link>
              {/* <Link
                to="/logout"
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </Link> */}
              <Link
                to="/signup"
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Sign Up
              </Link>
              <Link
                to="/HelpCenter"
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Help Center
              </Link>

              <Link
                to="/"
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Airbnb your home
              </Link>
            
            </div>
          )}
        </div>
      </nav>
      {/* Category Bar Section */}
      <div className="hidden md:flex items-center space-x-6 overflow-x-auto px-6 mt-6 border-b text-gray-700  shadow-2xl shadow-fuchsia-100 bg-white">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`flex flex-col items-center cursor-pointer text-sm ${
              selectedCategory === category.name ? "text-red-500 font-bold" : ""
            }`}
            onClick={() => setSelectedCategory(category.name)}
          >
            <div className="text-2xl">{category.icon}</div>
            <span className="mt-1">{category.name}</span>
          </div>
        ))}
        <button className="p-2 border rounded-full">
          <ChevronRight />
        </button>
        <button className="flex items-center px-4 py-2 border rounded-lg text-sm font-semibold ml-4">
          <Filter className="mr-2" /> Filters
        </button>
      </div>
    </div>
  );
};

export default Navbar;