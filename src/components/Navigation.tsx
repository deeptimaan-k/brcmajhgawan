import { useState } from 'react';
import { Menu, X, LogIn } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#004d40] py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <ul className={`
            absolute md:relative
            left-0 
            w-full md:w-auto
            bg-[#004d40] md:bg-transparent
            py-4 md:py-0
            space-y-4 md:space-y-0
            flex flex-col md:flex-row
            items-center
            md:space-x-8
            text-white
            ${isOpen ? 'top-16' : '-top-full md:top-0'}
            transition-all duration-300
            z-50
          `}>
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300">About</a></li>
            <li><a href="/gallery" className="hover:text-gray-300">Gallery</a></li>
            <li><a href="/notice-board" className="hover:text-gray-300">Notice Board</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
          </ul>

          {/* Login button */}
          <a 
            href="/login" 
            className="flex items-center gap-2 bg-white text-[#004d40] px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            <LogIn size={18} />
            <span>Login</span>
          </a>
        </div>
      </div>
    </nav>
  );
}