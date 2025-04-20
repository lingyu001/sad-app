import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface User {
  name: string;
}

interface HeaderProps {
  isLoggedIn?: boolean;
  user?: User | null;
  onLoginClick?: () => void;
  onSubscriptionClick?: () => void;
}

export default function Header({ isLoggedIn, user, onLoginClick, onSubscriptionClick }: HeaderProps) {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and company name */}
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-teal-400 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <span className="ml-2 text-xl font-bold text-gray-800">StockInsight</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/">
              <span className="text-gray-800 hover:text-blue-600 transition-colors font-medium">Home</span>
            </Link>
            <Link href="/about">
              <span className="text-gray-800 hover:text-blue-600 transition-colors font-medium">About</span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-800 hover:text-blue-600 transition-colors font-medium">Contact</span>
            </Link>
          </nav>

          {/* Login/Account & Subscription */}
          <div className="flex items-center space-x-4">
            {isLoggedIn && user ? (
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-700">
                  {user.name.charAt(0)}
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">{user.name}</span>
              </div>
            ) : (
              <button 
                onClick={onLoginClick}
                className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors font-medium text-sm"
              >
                Log In
              </button>
            )}
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onSubscriptionClick}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:shadow-md transition-all font-medium text-sm"
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
} 