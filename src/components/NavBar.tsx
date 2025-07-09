"use client";

import { useState, useEffect } from "react";
import { ThemeSwitcher } from "@/components/utils/ThemeSwitcher";
import PageDetailsFile from "@p/configs/page_details.json";
import { Menu, X } from "lucide-react";

const sections = PageDetailsFile.menu.filter((s: any) => s.isActive);

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-500 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-primary/10 shadow-lg' 
        : 'bg-background/80 backdrop-blur-sm'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#hero" 
            className="text-2xl font-semibold gradient-text hover:opacity-80 transition-all duration-300 font-serif"
          >
            Sumit Sharma
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {sections.map((item: any) => (
              <a
                key={item.section}
                href={`#${item.section.toLowerCase()}`}
                className="nav-link relative group"
              >
                {item.section.charAt(0).toUpperCase() + item.section.slice(1)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-500 group-hover:w-full"></span>
              </a>
            ))}
            <ThemeSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-md hover:bg-accent transition-all duration-300"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden">
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-primary/10 shadow-lg animate-elegant-fade-in">
            <div className="container py-6">
              <div className="flex flex-col gap-4">
                {sections.map((item: any) => (
                  <a
                    key={item.section}
                    href={`#${item.section.toLowerCase()}`}
                    className="nav-link text-base py-3 px-4 rounded-md hover:bg-accent transition-all duration-300"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.section.charAt(0).toUpperCase() + item.section.slice(1)}
                  </a>
                ))}
                <div className="pt-4 border-t border-primary/10">
                  <ThemeSwitcher />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar; 