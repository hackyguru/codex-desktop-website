import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Squares from "../components/Squares";

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDownload = () => {
    // Placeholder for download functionality
    console.log("Download clicked");
  };

  const handleAbout = () => {
    console.log("About clicked");
  };

  const handleJoinCommunity = () => {
    console.log("Join Community clicked");
  };

  return (
    <div className="h-screen max-h-screen bg-black overflow-hidden relative">
      {/* Hexagon Background */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Squares
          direction="diagonal"
          speed={0.5}
          borderColor="#1a1a1a"
          squareSize={100}
          hoverFillColor="#222222"
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Left Side - About & Join Community */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/about"
                className="text-[#6BE4A8] hover:text-[#5DD494] text-sm font-medium transition-colors"
              >
                About
              </Link>
              <button
                onClick={handleJoinCommunity}
                className="text-gray-300 hover:text-[#6BE4A8] text-sm font-medium transition-colors"
              >
                Join Community
              </button>
            </div>

            {/* Center - Logo */}
            <div className="flex-1 flex justify-center">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="CodexDesktop"
                  width={180}
                  height={40}
                  className="h-8 sm:h-10 w-auto cursor-pointer"
                  priority
                />
              </Link>
            </div>

            {/* Right Side - Download Button */}
            <div className="hidden md:flex items-center">
              <button
                onClick={handleDownload}
                className="bg-[#6BE4A8] hover:bg-[#5DD494] text-black px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                Download for macOS
              </button>
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

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/90 backdrop-blur-sm rounded-lg mt-2 p-4">
              <div className="flex flex-col space-y-3">
                <Link
                  href="/about"
                  className="text-[#6BE4A8] hover:text-[#5DD494] text-left py-2 transition-colors"
                >
                  About
                </Link>
                <button
                  onClick={handleJoinCommunity}
                  className="text-gray-300 hover:text-[#6BE4A8] text-left py-2 transition-colors"
                >
                  Join Community
                </button>
                <button
                  onClick={handleDownload}
                  className="bg-[#6BE4A8] hover:bg-[#5DD494] text-black px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                >
                  Download for macOS
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* About Section */}
      <section className="pt-20 sm:pt-24 md:pt-32 h-full overflow-hidden relative z-10 pointer-events-none p-4 sm:p-6 md:p-8">
        <div className="w-full h-full relative bg-[#0a0a0a] rounded-3xl border border-gray-800/50 overflow-hidden">
          <div className="h-full overflow-y-auto p-8 sm:p-12 md:p-16 lg:p-20">
            <div className="max-w-4xl mx-auto">
              {/* About Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#6BE4A8]/10 text-[#6BE4A8] text-xs sm:text-sm font-medium mb-6 border border-[#6BE4A8]/20">
                  <span className="mr-2">ℹ️</span>
                  About CodexStorage
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  The Future of
                  <span className="text-[#6BE4A8]">{" "}File Storage</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                  CodexStorage revolutionizes how you store, share, and manage files with 
                  cutting-edge Web3 technology and military-grade security.
                </p>
              </div>

              {/* Mission Section */}
              <div className="mb-16 pointer-events-auto">
                <div className="bg-[#151515] rounded-2xl p-8 border border-[#6BE4A8]/20">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                    Our Mission
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    We believe that your data should truly belong to you. In an era where tech giants 
                    control and monetize personal information, CodexStorage offers a decentralized 
                    alternative that puts privacy and ownership back in your hands.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Built on Web3 principles and powered by torrent technology, our platform ensures 
                    your files are distributed, secure, and always accessible - without relying on 
                    centralized servers that can fail or be compromised.
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 pointer-events-auto">
                <div className="bg-[#151515] rounded-2xl p-8 border border-gray-700/30 hover:border-[#6BE4A8]/30 transition-colors">
                  <div className="w-12 h-12 bg-[#6BE4A8]/10 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Military-Grade Security</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Your files are encrypted with AES-256 encryption before leaving your device. 
                    Only you hold the keys to decrypt your data.
                  </p>
                </div>

                <div className="bg-[#151515] rounded-2xl p-8 border border-gray-700/30 hover:border-[#6BE4A8]/30 transition-colors">
                  <div className="w-12 h-12 bg-[#6BE4A8]/10 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Decentralized Network</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Files are distributed across a peer-to-peer network, eliminating single points 
                    of failure and ensuring 99.9% uptime.
                  </p>
                </div>

                <div className="bg-[#151515] rounded-2xl p-8 border border-gray-700/30 hover:border-[#6BE4A8]/30 transition-colors">
                  <div className="w-12 h-12 bg-[#6BE4A8]/10 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Lightning Fast</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Optimized for macOS with native performance. Upload and download files 
                    at incredible speeds using advanced torrent protocols.
                  </p>
                </div>

                <div className="bg-[#151515] rounded-2xl p-8 border border-gray-700/30 hover:border-[#6BE4A8]/30 transition-colors">
                  <div className="w-12 h-12 bg-[#6BE4A8]/10 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-2xl">💎</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">True Ownership</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Built on Web3 principles, you maintain complete ownership and control 
                    over your files without intermediaries.
                  </p>
                </div>
              </div>

              {/* Team Section */}
              <div className="mb-16 pointer-events-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    Built by Innovators
                  </h2>
                  <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    Our team combines decades of experience in cryptography, distributed systems, 
                    and user experience design.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center pointer-events-auto">
                <div className="bg-gradient-to-r from-[#6BE4A8]/10 to-[#6BE4A8]/5 rounded-2xl p-12 border border-[#6BE4A8]/20">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                    Ready to Take Control?
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                    Join thousands of users who have already made the switch to truly private, 
                    decentralized file storage.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={handleDownload}
                      className="bg-[#6BE4A8] hover:bg-[#5DD494] text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-[#6BE4A8]/25"
                    >
                      Download for macOS
                    </button>
                    <Link
                      href="/"
                      className="border border-[#6BE4A8]/30 hover:border-[#6BE4A8] text-[#6BE4A8] px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 bg-transparent inline-flex items-center justify-center"
                    >
                      Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 