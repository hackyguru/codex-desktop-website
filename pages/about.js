import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Squares from "../components/Squares";
import SEO from "../components/SEO";
import Header from "../components/Header";

export default function About() {

  return (
    <>
      <SEO 
        title="About Codex Desktop - The Future of Decentralized File Storage"
        description="Learn about Codex Desktop's mission to revolutionize file storage with Web3 technology, military-grade encryption, and decentralized networks. Discover how we're putting data ownership back in your hands."
        keywords="about codex desktop, decentralized storage mission, web3 file storage, privacy-first storage, data ownership, blockchain storage, torrent technology"
        url="https://codexdesktop.com/about"
        image="https://codexdesktop.com/codexdesktop-og.png"
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Codex Desktop",
          "description": "Learn about Codex Desktop's mission to revolutionize file storage with Web3 technology, military-grade encryption, and decentralized networks.",
          "url": "https://codexdesktop.com/about",
          "mainEntity": {
            "@type": "Organization",
            "name": "Codex Desktop",
            "url": "https://codexdesktop.com",
            "logo": "https://codexdesktop.com/logo.png",
            "description": "Codex Desktop revolutionizes how you store, share, and manage files with cutting-edge Web3 technology and military-grade security.",
            "foundingDate": "2024",
            "applicationCategory": "File Storage Software",
            "sameAs": [
              "https://github.com/hackyguru/codex-desktop"
            ]
          }
        }}
      />
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
      <Header currentPage="about" />

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
                    <Link href="/download-macos">
                      <div className="bg-[#6BE4A8] hover:bg-[#5DD494] text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-[#6BE4A8]/25 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                        Download for macOS
                      </div>
                    </Link>
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
    </>
  );
} 