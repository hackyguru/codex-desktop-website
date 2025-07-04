import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

export default function Header({ currentPage = "", isScrolled = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleJoinCommunity = () => {
    window.open("https://discord.com/invite/codex-storage", "_blank", "noopener,noreferrer");
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-md border-b border-gray-800/50' 
        : 'bg-black/20 backdrop-blur-sm'
    }`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-0'
      }`}>
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'h-14' : 'h-16 sm:h-20'
        }`}>
          {/* Left Side - Logo (Mobile) & About/Join Community (Desktop) */}
          <div className="flex items-center space-x-6">
            {/* Mobile Logo */}
            <div className="md:hidden">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Codex Desktop"
                  width={180}
                  height={40}
                  className="w-auto h-8 cursor-pointer"
                  style={{
                    transform: isScrolled ? 'scale(0.75)' : 'scale(1)',
                    transition: 'transform 0.3s ease'
                  }}
                  priority
                />
              </Link>
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={handleJoinCommunity}
                className="text-gray-300 hover:text-[#6BE4A8] text-sm font-medium transition-colors"
              >
                Join Community
              </button>
            </div>
          </div>

          {/* Center - Logo (Desktop only) */}
          <div className="hidden md:flex flex-1 justify-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Codex Desktop"
                width={180}
                height={40}
                className="w-auto h-8 sm:h-10 cursor-pointer"
                style={{
                  transform: isScrolled ? 'scale(0.8)' : 'scale(1)',
                  transition: 'transform 0.3s ease'
                }}
                priority
              />
            </Link>
          </div>

          {/* Right Side - Download Button (Desktop) & Mobile Menu Button */}
          <div className="flex items-center">
            {/* Desktop Download Button */}
            <div className="hidden md:flex items-center">
              <Link href="/download-macos">
                <div className="bg-[#6BE4A8] hover:bg-[#5DD494] text-black px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download for macOS
                </div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={handleMenuToggle}
                className="text-gray-300 hover:text-[#6BE4A8] p-2 rounded-md"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileNav 
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          currentPage={currentPage}
        />
      </div>
    </header>
  );
} 