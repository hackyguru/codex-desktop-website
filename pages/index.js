import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Squares from "../components/Squares";
import CardSwap, { Card } from "../components/CardSwap";
import SEO from "../components/SEO";
import Header from "../components/Header";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedMilestone, setSelectedMilestone] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const milestones = [
    {
      id: 0,
      quarter: "Q3 2025",
      title: "Alpha Launch & Alturistic Mode",
      status: "IN PROGRESS",
      statusColor: "text-[#6BE4A8]",
      dotColor: "bg-[#6BE4A8]",
      description: "The inception of Codex Desktop - enabling the Codex testnet experience outside the terminal.",
      features: [
        "Launched as Guru's hobby project",
        "Support for macOS Silicon",
        "Support for macOS Intel",
        "Support for Linux",
        "Support for Windows",
        "Alturistic p2p functionalities with Codex Testnet"
      ]
    },
    {
      id: 1,
      quarter: "Q4 2025",
      title: "Incentivized Testnet",
      status: "PLANNED",
      statusColor: "text-gray-500",
      dotColor: "bg-gray-500",
      description: "With the incentivized testnet, you can purchase storage space to persist your files on the Codex Testnet.",
      features: [
        "Decentralized persistence with Codex Testnet",
        "Storage incentivization",
        "Basic Access controls",
        "Integration with pinning services"
      ]
    },
    {
      id: 2,
      quarter: "Q1 2026",
      title: "Cross-Platform Support",
      status: "PLANNED",
      statusColor: "text-gray-500",
      dotColor: "bg-gray-500",
      description: "Cross-platform support for multiple devices with enhanced access control capabilities.",
      features: [
        "Codex Mobile (iOS/Android)",
        "Smart sync with multiple devices",
        "Storage provider incentives",
        "Improved access controls",
      ]
    },
    {
      id: 3,
      quarter: "Q2 2026",
      title: "Mainnet",
      status: "PLANNED",
      statusColor: "text-gray-500",
      dotColor: "bg-gray-500",
      description: "The dream mainnet integration with Codex",
      features: [
        "Mainnet integration with Codex",
        "Storage provider incentives",
        "Improved file sharing controls",
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Codex Desktop - Decentralized File Storage with Web3 Technology"
        description="Experience lightning-fast file storage with military-grade encryption. Codex Desktop combines torrent technology with Web3 for secure, decentralized file management on macOS. Now available for beta download."
        keywords="decentralized storage, web3, torrent, file storage, encryption, macOS, blockchain, peer-to-peer, privacy, secure storage, codex desktop, torrent client, distributed storage, web3 storage"
        url="https://codexdesktop.com"
        image="https://codexdesktop.com/codexdesktop-og.png"
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Codex Desktop",
          "description": "Experience lightning-fast file storage with military-grade encryption. Codex Desktop combines torrent technology with Web3 for secure, decentralized file management on macOS.",
          "url": "https://codexdesktop.com",
          "image": "https://codexdesktop.com/codexdesktop-og.png",
          "applicationCategory": "UtilityApplication",
          "operatingSystem": "macOS",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Codex Desktop",
            "url": "https://codexdesktop.com",
            "logo": "https://codexdesktop.com/logo.png"
          },
          "softwareVersion": "Beta",
          "downloadUrl": "https://github.com/hackyguru/codex-desktop/releases",
          "screenshot": [
            "https://codexdesktop.com/screenshot1.png",
            "https://codexdesktop.com/screenshot2.png",
            "https://codexdesktop.com/screenshot3.png"
          ],
          "featureList": [
            "Military-grade AES-256 encryption",
            "Decentralized Web3 storage",
            "Torrent-powered file sharing",
            "Native macOS integration",
            "Peer-to-peer networking",
            "Smart synchronization across devices",
            "Collaborative folder sharing",
            "Enhanced privacy controls"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "127"
          }
        }}
      />
      <div className="min-h-screen bg-black overflow-x-hidden relative">
        {/* Hexagon Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
        <Squares
          direction="diagonal"
          speed={0.5}
          borderColor="#1a1a1a"
          squareSize={100}
          hoverFillColor="#222222"
        />
              </div>

      {/* Header */}
      <Header currentPage="home" isScrolled={isScrolled} />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 min-h-screen relative z-10 p-2 sm:p-4 md:p-6 lg:p-8">
        <div className="w-full min-h-[calc(100vh-12rem)] relative bg-[#0a0a0a] rounded-2xl sm:rounded-3xl border border-gray-800/50 overflow-hidden">
          {/* Content Section */}
          <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 pb-48 sm:pb-60 md:pb-72 lg:pb-16 h-full flex flex-col justify-center">
            <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl lg:pr-96 xl:pr-80">
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#6BE4A8]/10 text-[#6BE4A8] text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-[#6BE4A8]/20">
                <span className="mr-1 sm:mr-2">🚀</span>
                Alpha available for macOS Silicon
              </div>
              
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
                Ever imagined a torrent powered with
                <span className="text-[#6BE4A8]">{" "}decentralized storage?</span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
               Codex Desktop is a torrent-styled desktop client that helps you run a Codex node & interact with the Alturistic p2p network with a single click - it's censorship resistant, fast and decentralized with the power of Codex Storage.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6">
                <Link href="/download-macos">
                  <div className="bg-[#6BE4A8] hover:bg-[#5DD494] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-[#6BE4A8]/25 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    Download for macOS
                  </div>
                </Link>
                
                <a 
                  href="https://youtu.be/JADZo-7MEVQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border border-[#6BE4A8]/30 hover:border-[#6BE4A8] text-[#6BE4A8] px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-semibold transition-all transform hover:scale-105 bg-transparent inline-flex items-center justify-center"
                >
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
          
          {/* Mobile - Single Card */}
          <div className="absolute bottom-4 left-4 right-4 z-0 flex justify-center lg:hidden">
            <div className="relative scale-45 sm:scale-55 md:scale-65 origin-bottom">
              <div className="w-[900px] h-[600px] border-[#6BE4A8]/30 bg-black rounded-lg shadow-2xl overflow-hidden">
                <div className="w-full h-full flex flex-col">
                  {/* macOS Window Header */}
                  <div className="flex items-center px-4 py-3 bg-black border-b border-[#6BE4A8]/30">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 transition-colors"></div>
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 transition-colors"></div>
                      <div className="w-3 h-3 rounded-full bg-[#28ca42] hover:bg-[#28ca42]/80 transition-colors"></div>
                    </div>
                  </div>
                  {/* Window Content */}
                  <div className="flex-1 relative">
                    <Image
                      src="/screenshot1.png"
                      alt="CodexStorage App Interface Screenshot 1"
                      width={900}
                      height={600}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  {/* Bottom Info Bar */}
                  <div className="px-4 py-3 bg-[#1a1a1a] border-t border-[#6BE4A8]/30">
                    <div className="text-white">
                      <h3 className="text-lg font-bold mb-1 text-[#6BE4A8]">Secure Storage</h3>
                      <p className="text-gray-300 text-xs">
                        Military-grade encryption keeps your files safe and secure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop - CardSwap */}
          <div className="absolute bottom-0 right-0 z-0 scale-100 origin-bottom-right hidden lg:block">
            <div className="relative">
              <CardSwap
                width={900}
                height={600}
                cardDistance={120}
                verticalDistance={130}
                delay={4000}
                pauseOnHover={true}
              >
                <Card className="border-[#6BE4A8]/30 bg-black p-0 shadow-2xl overflow-hidden">
                  <div className="w-full h-full flex flex-col">
                    {/* macOS Window Header */}
                    <div className="flex items-center px-4 py-3 bg-black border-b border-[#6BE4A8]/30">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 transition-colors"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 transition-colors"></div>
                        <div className="w-3 h-3 rounded-full bg-[#28ca42] hover:bg-[#28ca42]/80 transition-colors"></div>
                      </div>
                    </div>
                    {/* Window Content */}
                    <div className="flex-1 relative">
                      <Image
                        src="/screenshot1.png"
                        alt="CodexStorage App Interface Screenshot 1"
                        width={900}
                        height={600}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                    {/* Bottom Info Bar */}
                    <div className="px-4 py-3 bg-[#1a1a1a] border-t border-[#6BE4A8]/30">
                      <div className="text-white">
                        <h3 className="text-lg font-bold mb-1 text-[#6BE4A8]">Secure Storage</h3>
                        <p className="text-gray-300 text-xs">
                          Military-grade encryption keeps your files safe and secure.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="border-[#6BE4A8]/30 bg-black p-0 shadow-2xl overflow-hidden">
                  <div className="w-full h-full flex flex-col">
                    {/* macOS Window Header */}
                    <div className="flex items-center px-4 py-3 bg-black border-b border-[#6BE4A8]/30">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 transition-colors"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 transition-colors"></div>
                        <div className="w-3 h-3 rounded-full bg-[#28ca42] hover:bg-[#28ca42]/80 transition-colors"></div>
                      </div>
                    </div>
                    {/* Window Content */}
                    <div className="flex-1 relative">
                      <Image
                        src="/screenshot2.png"
                        alt="CodexStorage App Interface Screenshot 2"
                        width={900}
                        height={600}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                    {/* Bottom Info Bar */}
                    <div className="px-4 py-3 bg-[#1a1a1a] border-t border-[#6BE4A8]/30">
                      <div className="text-white">
                        <h3 className="text-lg font-bold mb-1 text-[#6BE4A8]">Web3 Powered</h3>
                        <p className="text-gray-300 text-xs">
                          Built on decentralized technology for true ownership.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="border-[#6BE4A8]/30 bg-black p-0 shadow-2xl overflow-hidden">
                  <div className="w-full h-full flex flex-col">
                    {/* macOS Window Header */}
                    <div className="flex items-center px-4 py-3 bg-black border-b border-[#6BE4A8]/30">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 transition-colors"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 transition-colors"></div>
                        <div className="w-3 h-3 rounded-full bg-[#28ca42] hover:bg-[#28ca42]/80 transition-colors"></div>
                      </div>
                    </div>
                    {/* Window Content */}
                    <div className="flex-1 relative">
                      <Image
                        src="/screenshot3.png"
                        alt="CodexStorage App Interface Screenshot 3"
                        width={900}
                        height={600}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                    {/* Bottom Info Bar */}
                    <div className="px-4 py-3 bg-[#1a1a1a] border-t border-[#6BE4A8]/30">
                      <div className="text-white">
                        <h3 className="text-lg font-bold mb-1 text-[#6BE4A8]">Lightning Fast</h3>
                        <p className="text-gray-300 text-xs">
                          Optimized for macOS with native performance.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </CardSwap>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 p-4 sm:p-6 md:p-8 pb-8">
        <div className="w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pointer-events-auto">
            
                        {/* Left Column - YouTube Video */}
            <div className="w-full relative bg-[#0a0a0a] rounded-3xl border border-gray-800/50 overflow-hidden p-6 sm:p-8">
              <div className="relative w-full">
                <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl border border-gray-600/30">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/JADZo-7MEVQ"
                    title="Codex Desktop Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

                          {/* Right Column - Feature Cards */}
            <div className="flex flex-col h-full space-y-4 sm:space-y-6 lg:space-y-0 lg:justify-between">
              
              {/* Feature 1 - Security */}
              <div className="w-full relative bg-[#0a0a0a] rounded-3xl border border-gray-800/50 overflow-hidden p-6 sm:p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#6BE4A8]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">Power to the people with p2p</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Escape the hyperscalers and centralized storage providers. Use a decentralized storage network that puts the power back to the hands of people and not shady custodians.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 - Web3 */}
              <div className="w-full relative bg-[#0a0a0a] rounded-3xl border border-gray-800/50 overflow-hidden p-6 sm:p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#6BE4A8]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">Frictionless UX</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      You don't have to be a techie to use Codex Desktop - it's designed for people, not just for the nerds. Escape the terminal and run your Codex node with just a single click!
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 - Performance */}
              <div className="w-full relative bg-[#0a0a0a] rounded-3xl border border-gray-800/50 overflow-hidden p-6 sm:p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#6BE4A8]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">Open source</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      With a vision to make data sharing and storage cheaper without compromising on decentralization, Codex is open source and free to use in Alturustic mode.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            </div>
          </div>
        </section>

        {/* Features Grid Section */}
        <section className="relative z-10 p-2 sm:p-4 md:p-6 lg:p-8 pb-8">
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 pointer-events-auto">
            
            {/* Feature 1 - Decentralized Intelligence */}
            <div className="w-full relative bg-[#0a0a0a] rounded-2xl sm:rounded-3xl border border-gray-800/50 overflow-hidden h-72 sm:h-80">
              <div className="p-6 sm:p-8 hover:border-[#6BE4A8]/30 transition-all duration-300 relative overflow-hidden group h-full flex flex-col">
                <div className="relative z-10 flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Contribute</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 sm:mb-8">
                    Codex Desktop is fueled with the power of the Open Source community. Your contributions are welcome!
                  </p>
                </div>
                <div className="relative z-10 mt-auto">
                  <a href="https://github.com/hackyguru/codex-desktop/" target="_blank" rel="noopener noreferrer" className="bg-[#6BE4A8]/10 hover:bg-[#6BE4A8]/20 text-[#6BE4A8] border border-[#6BE4A8]/30 hover:border-[#6BE4A8]/50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                    GitHub
                  </a>
                </div>
                
                {/* Abstract Geometric Illustration */}
                <div className="absolute bottom-0 right-0 w-36 sm:w-48 h-36 sm:h-48 opacity-20 group-hover:opacity-30 transition-opacity">
                  <div className="relative w-full h-full">
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-9 sm:w-12 h-9 sm:h-12 bg-gradient-to-br from-[#6BE4A8] to-[#4BC97A] rounded transform rotate-12"></div>
                    <div className="absolute top-9 sm:top-12 right-6 sm:right-8 w-7 sm:w-9 h-7 sm:h-9 bg-gradient-to-br from-[#6BE4A8]/60 to-[#4BC97A]/60 rounded transform -rotate-12"></div>
                    <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 w-12 sm:w-15 h-12 sm:h-15 bg-gradient-to-br from-[#6BE4A8]/40 to-[#4BC97A]/40 rounded transform rotate-45"></div>
                    <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 w-5 sm:w-6 h-5 sm:h-6 bg-gradient-to-br from-[#6BE4A8]/80 to-[#4BC97A]/80 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 - Feels Familiar */}
            <div className="w-full relative bg-[#0a0a0a] rounded-2xl sm:rounded-3xl border border-gray-800/50 overflow-hidden h-72 sm:h-80">
              <div className="p-6 sm:p-8 hover:border-[#6BE4A8]/30 transition-all duration-300 relative overflow-hidden group h-full flex flex-col">
                <div className="relative z-10 flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Join the Community</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 sm:mb-8">
                    Your feedback is important to us. Join the conversation in #codex-desktop channel in the Codex Discord. 
                  </p>
                </div>
                <div className="relative z-10 mt-auto">
                  <a href="https://discord.gg/codex-storage" target="_blank" rel="noopener noreferrer" className="bg-[#6BE4A8]/10 hover:bg-[#6BE4A8]/20 text-[#6BE4A8] border border-[#6BE4A8]/30 hover:border-[#6BE4A8]/50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                    Join Discord
                  </a>
                </div>
                
                {/* Cube/Block Illustration */}
                <div className="absolute bottom-0 right-0 w-36 sm:w-48 h-36 sm:h-48 opacity-20 group-hover:opacity-30 transition-opacity">
                  <div className="relative w-full h-full">
                    <div className="absolute top-6 sm:top-8 left-9 sm:left-12 w-14 sm:w-18 h-9 sm:h-12 bg-gradient-to-r from-[#6BE4A8] to-[#4BC97A] transform skew-y-12 rounded-sm"></div>
                    <div className="absolute top-9 sm:top-12 left-6 sm:left-8 w-9 sm:w-12 h-14 sm:h-18 bg-gradient-to-b from-[#6BE4A8]/70 to-[#4BC97A]/70 transform -skew-x-12 rounded-sm"></div>
                    <div className="absolute top-4 sm:top-6 left-10 sm:left-14 w-12 sm:w-15 h-7 sm:h-9 bg-gradient-to-br from-[#6BE4A8]/50 to-[#4BC97A]/50 transform skew-x-12 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 - Privacy Options */}
            <div className="w-full relative bg-[#0a0a0a] rounded-2xl sm:rounded-3xl border border-gray-800/50 overflow-hidden h-72 sm:h-80">
              <div className="p-6 sm:p-8 hover:border-[#6BE4A8]/30 transition-all duration-300 relative overflow-hidden group h-full flex flex-col">
                <div className="relative z-10 flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Evolve</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 sm:mb-8">
                    Web3 is not just about decentralization, it's about evolution. Checkout the other projects in the Logos ecosystem.
                  </p>
                </div>
                <div className="relative z-10 mt-auto">
                  <a href="https://logos.co" target="_blank" rel="noopener noreferrer" className="bg-[#6BE4A8]/10 hover:bg-[#6BE4A8]/20 text-[#6BE4A8] border border-[#6BE4A8]/30 hover:border-[#6BE4A8]/50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                    Learn More
                  </a>
                </div>
                
                {/* Circular/Shield Illustration */}
                <div className="absolute bottom-0 right-0 w-36 sm:w-48 h-36 sm:h-48 opacity-20 group-hover:opacity-30 transition-opacity">
                  <div className="relative w-full h-full">
                    <div className="absolute top-9 sm:top-12 left-9 sm:left-12 w-18 sm:w-24 h-18 sm:h-24 rounded-full border-4 sm:border-6 border-[#6BE4A8]/60">
                      <div className="absolute top-2 sm:top-3 left-2 sm:left-3 w-14 sm:w-18 h-14 sm:h-18 rounded-full bg-gradient-to-br from-[#6BE4A8]/40 to-[#4BC97A]/40"></div>
                      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-9 sm:w-12 h-9 sm:h-12 rounded-full bg-gradient-to-br from-[#6BE4A8] to-[#4BC97A]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>



        </section>

        {/* Roadmap Section */}
        <section className="relative z-10 p-2 sm:p-4 md:p-6 lg:p-8 pb-4 sm:pb-8">
                      <div className="w-full relative bg-[#0a0a0a] rounded-2xl sm:rounded-3xl border border-gray-800/50 overflow-hidden">
            <div className="p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="max-w-6xl mx-auto">
                
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4 leading-tight">
                    Roadmap
                  </h2>
                </div>

                {/* Interactive Roadmap */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 w-full min-w-0">
                  
                  {/* Left Side - Timeline */}
                  <div className="relative w-full">
                    {/* Vertical Line */}
                    <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6BE4A8] via-[#6BE4A8]/50 to-gray-600/50"></div>
                    
                    <div className="space-y-6 sm:space-y-8 lg:space-y-12">
                       {milestones.map((milestone, index) => (
                        <div key={milestone.id} className="relative">
                          {/* Timeline Dot */}
                          <div className={`absolute left-4 sm:left-6 transform -translate-x-1/2 w-2.5 sm:w-3 h-2.5 sm:h-3 ${milestone.dotColor} rounded-full border-2 sm:border-4 border-black z-10 ${milestone.status === 'IN PROGRESS' ? 'animate-pulse' : ''}`}></div>
                          
                          {/* Milestone Button */}
                          <div className="ml-8 sm:ml-12 pr-2 sm:pr-0">
                            <button
                              onClick={() => setSelectedMilestone(index)}
                              className={`w-full text-left p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl border transition-all duration-300 ${
                                selectedMilestone === index
                                  ? 'bg-[#151515] border-[#6BE4A8]/50 shadow-lg shadow-[#6BE4A8]/10'
                                  : 'bg-[#0a0a0a] border-gray-700/30 hover:border-gray-600/50'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1 sm:mb-2 min-w-0">
                                <span className={`text-xs sm:text-sm font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full flex-shrink-0 ${milestone.statusColor} bg-[#6BE4A8]/15`}>
                                  {milestone.quarter}
                                </span>
                                <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0 ml-2">
                                  <div className={`w-1.5 sm:w-2 h-1.5 sm:h-2 ${milestone.dotColor} rounded-full ${milestone.status === 'IN PROGRESS' ? 'animate-pulse' : ''}`}></div>
                                  <span className={`text-xs font-semibold ${milestone.statusColor} uppercase tracking-wider hidden sm:inline`}>
                                    {milestone.status}
                                  </span>
                                </div>
                              </div>
                              <h3 className={`text-base sm:text-lg lg:text-xl font-bold leading-tight transition-colors break-words ${
                                selectedMilestone === index ? 'text-white' : 'text-gray-300'
                              }`}>
                                {milestone.title}
                              </h3>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - Detail Card */}
                  <div className="lg:sticky lg:top-8 lg:self-start">
                    <div className="bg-[#151515] rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-700/30">
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <span className={`text-xs sm:text-sm font-bold px-3 sm:px-4 py-1 sm:py-2 rounded-full border ${milestones[selectedMilestone].statusColor} bg-[#6BE4A8]/15 border-[#6BE4A8]/20`}>
                          {milestones[selectedMilestone].quarter}
                        </span>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <div className={`w-1.5 sm:w-2 h-1.5 sm:h-2 ${milestones[selectedMilestone].dotColor} rounded-full ${milestones[selectedMilestone].status === 'IN PROGRESS' ? 'animate-pulse' : ''}`}></div>
                          <span className={`text-xs font-semibold ${milestones[selectedMilestone].statusColor} uppercase tracking-wider hidden sm:inline`}>
                            {milestones[selectedMilestone].status}
                          </span>
                        </div>
                      </div>
                      
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                        {milestones[selectedMilestone].title}
                      </h2>
                      
                      <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                        {milestones[selectedMilestone].description}
                      </p>
                      
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Milestones</h3>
                        <ul className="space-y-2 sm:space-y-3">
                          {milestones[selectedMilestone].features.map((feature, index) => (
                            <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                              <div className={`w-1 sm:w-1.5 h-1 sm:h-1.5 ${milestones[selectedMilestone].dotColor} rounded-full mt-1.5 sm:mt-2 flex-shrink-0`}></div>
                              <span className="text-gray-300 text-sm sm:text-base leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 p-4 sm:p-6 md:p-8 pb-8">
                      <div className="w-full relative bg-[#0a0a0a] rounded-3xl border border-gray-800/50 overflow-hidden">
            <div className="p-8 sm:p-12 md:p-16 lg:p-20">
              <div className="max-w-6xl mx-auto">
                
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                  
                  {/* Brand Section */}
                  <div className="md:col-span-2">
                    <div className="mb-6">
                      <Image
                        src="/logo.png"
                        alt="CodexStorage"
                        width={180}
                        height={40}
                        className="h-10 w-auto mb-4"
                      />
                      <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                        Codex Desktop is an easy gateway to use the Alturistic capabilities of Codex similar to a torrent client. Get started today!
                      </p>
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-400 hover:text-[#6BE4A8] transition-colors">
                        <span className="sr-only">Twitter</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-[#6BE4A8] transition-colors">
                        <span className="sr-only">GitHub</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-[#6BE4A8] transition-colors">
                        <span className="sr-only">Discord</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Quote Section */}
                  <div className="md:col-span-2 flex items-center justify-center">
                    <blockquote className="text-center text-sm sm:text-sm text-[#6BE4A8] max-w-2xl mx-auto px-4">
                      “Decentralization is not a feature, it's a movement.”
                    </blockquote>
                  </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-700/30">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-400 text-sm mb-4 md:mb-0">
                     This website is open sourced on <a href="https://github.com/hackyguru/codex-desktop-website" className="text-[#6BE4A8] hover:text-[#6BE4A8]/80 transition-colors">GitHub</a>.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
