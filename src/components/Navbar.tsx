'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Leaf } from 'lucide-react';
import logo from '../../public/logo.png'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md fixed w-full z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            {/* <Leaf className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">Wild Earth</span> */}
            <img src={logo.src} className="h-8 w-8 " alt="Wild Earth Jungle Camp" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-text hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/booking" className="text-text hover:text-primary transition-colors">
              Book Now
            </Link>
            <Link href="/gallery" className="text-text hover:text-primary transition-colors">
              Gallery
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-text hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/booking"
                className="text-text hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
              <Link
                href="/gallery"
                className="text-text hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}