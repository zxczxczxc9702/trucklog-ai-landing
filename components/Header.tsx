import React, { useState, useEffect } from 'react';
import { Truck, Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="bg-brand-600 p-2 rounded-lg mr-2">
              <Truck className="h-6 w-6 text-white" />
            </div>
            <span className={`text-2xl font-bold ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              TruckLog<span className="text-brand-600">AI</span>
              <span className="ml-2 text-xs bg-red-600 text-white px-2 py-0.5 rounded-full uppercase tracking-wider font-bold animate-pulse">Early Bird</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-slate-600 hover:text-brand-600 font-medium">기능 소개</button>
            <button onClick={() => scrollToSection('demo')} className="text-slate-600 hover:text-brand-600 font-medium">성능 체험</button>
            <button onClick={() => scrollToSection('benefits')} className="text-slate-600 hover:text-brand-600 font-medium">할인 혜택</button>
            <Button variant="primary" size="sm" onClick={() => scrollToSection('apply')}>특가 신청하기</Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            <button onClick={() => scrollToSection('features')} className="text-left text-slate-600 font-medium py-2">기능 소개</button>
            <button onClick={() => scrollToSection('demo')} className="text-left text-slate-600 font-medium py-2">성능 체험</button>
            <button onClick={() => scrollToSection('benefits')} className="text-left text-slate-600 font-medium py-2">할인 혜택</button>
            <Button variant="primary" className="w-full" onClick={() => scrollToSection('apply')}>특가 신청하기</Button>
          </div>
        </div>
      )}
    </header>
  );
};