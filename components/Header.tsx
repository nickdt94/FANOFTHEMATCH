import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle smooth scrolling, accounting for the fixed header
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (!targetId) return;
    
    const id = targetId.substring(1);

    // Close mobile menu if it's open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    
    // For #home, just scroll to the very top.
    if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    const targetElement = document.getElementById(id);

    if (targetElement) {
      const headerOffset = 80; // Height of fixed header + extra space for better visibility
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="bg-header-custom fixed top-0 left-0 right-0 z-[9999]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" onClick={handleScrollTo} className="text-2xl font-black tracking-tighter text-white">
            Fan of the <span style={{ color: '#FF7A00' }}>Match</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#what-how" onClick={handleScrollTo} className="text-main transition hover:text-[#FF7A00]">What & How</a>
            <a href="#cases" onClick={handleScrollTo} className="text-main transition hover:text-[#FF7A00]">Cases</a>
            <a href="#spelmodi" onClick={handleScrollTo} className="text-main transition hover:text-[#FF7A00]">Concepts</a>
            <a href="#contact" onClick={handleScrollTo} className="brand-button brand-button--header">Start the Conversation</a>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden border-t border-brand-border`}>
        <a href="#what-how" onClick={handleScrollTo} className="block py-3 px-6 text-sm text-main hover:text-[#FF7A00]">What & How</a>
        <a href="#cases" onClick={handleScrollTo} className="block py-3 px-6 text-sm text-main hover:text-[#FF7A00]">Cases</a>
        <a href="#spelmodi" onClick={handleScrollTo} className="block py-3 px-6 text-sm text-main hover:text-[#FF7A00]">Concepts</a>
        <div className="p-4">
          <a href="#contact" onClick={handleScrollTo} className="block brand-button brand-button--header text-center w-full">Start the Conversation</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
