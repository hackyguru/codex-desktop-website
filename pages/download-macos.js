import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SEO from "../components/SEO";
import Header from "../components/Header";

export default function DownloadMacOS() {
  const [downloadStarted, setDownloadStarted] = useState(false);

  useEffect(() => {
    // Auto-trigger download after a short delay
    const timer = setTimeout(() => {
      const downloadLink = document.createElement('a');
      downloadLink.href = 'https://github.com/hackyguru/codex-desktop/releases/download/alpha/codex-desktop.dmg';
      downloadLink.download = 'codex-desktop.dmg';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      setDownloadStarted(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleManualDownload = () => {
    window.open('https://github.com/hackyguru/codex-desktop/releases/download/alpha/codex-desktop.dmg', '_blank');
  };

  return (
    <>
      <SEO 
        title="Download Codex Desktop for macOS - Decentralized File Storage"
        description="Download Codex Desktop for macOS. Experience lightning-fast file storage with military-grade encryption and Web3 technology. Free download for macOS Silicon."
        keywords="download codex desktop, macos app, decentralized storage, web3, torrent, file storage, encryption, macOS silicon"
        url="https://codexdesktop.com/download-macos"
        image="https://codexdesktop.com/codexdesktop-og.png"
        type="website"
      />
      
      <div className="min-h-screen bg-black relative">
        {/* Header */}
        <Header currentPage="download" />

        {/* Main Content Container */}
        <div className="flex flex-col items-center justify-center min-h-screen p-4 pt-24">
          {/* Main Content */}
          <div className="w-full max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Codex Desktop is downloading.
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8">
            Just a few steps left.
          </h2>
          
          <p className="text-gray-300 text-lg mb-2">
            Your download starts automatically. If it didn't start, 
            <button 
              onClick={handleManualDownload}
              className="text-[#6BE4A8] hover:text-[#5DD494] underline ml-1 transition-colors"
            >
              download Codex Desktop manually.
            </button>
          </p>
        </div>

        {/* Installation Steps */}
        <div className="w-full mt-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Step 1 - Open */}
            <div className="relative bg-[#0a0a0a] rounded-2xl sm:rounded-3xl border border-gray-800/50 overflow-hidden p-6 sm:p-8 hover:border-[#6BE4A8]/30 transition-all duration-300">
              <div className="text-center h-full flex flex-col">
                <div className="mb-6 flex-shrink-0">
                  <div className="text-sm font-semibold text-gray-400 mb-2">Step 1</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Open</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Open the Codex Desktop Installer.dmg file from the downloads list at the bottom left corner of this window.
                  </p>
                </div>
                
                {/* Visual representation of Downloads */}
                <div className="flex-1 flex items-center justify-center min-h-[200px]">
                  <div className="w-full max-w-xs">
                    <div className="bg-gradient-to-br from-[#6BE4A8] to-[#5DD494] rounded-2xl p-4 sm:p-6 shadow-2xl">
                      <div className="bg-black rounded-lg p-3 sm:p-4 shadow-lg border border-[#6BE4A8]/30">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#6BE4A8] rounded"></div>
                            <span className="text-xs sm:text-sm font-medium text-white truncate">Codex Desktop Installer....dmg</span>
                          </div>
                          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#6BE4A8]/60 rounded flex-shrink-0"></div>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-1">
                          <div className="bg-[#6BE4A8] h-1 rounded-full w-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 - Install */}
            <div className="relative bg-[#0a0a0a] rounded-2xl sm:rounded-3xl border border-gray-800/50 overflow-hidden p-6 sm:p-8 hover:border-[#6BE4A8]/30 transition-all duration-300">
              <div className="text-center h-full flex flex-col">
                <div className="mb-6 flex-shrink-0">
                  <div className="text-sm font-semibold text-gray-400 mb-2">Step 2</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Install</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Drag and drop Codex Desktop to the <span className="font-semibold text-white">Applications</span> folder.
                  </p>
                </div>
                
                {/* Visual representation of drag and drop */}
                <div className="flex-1 flex items-center justify-center min-h-[200px]">
                  <div className="w-full max-w-xs">
                    <div className="bg-gradient-to-br from-[#6BE4A8] to-[#5DD494] rounded-2xl p-4 sm:p-6 shadow-2xl">
                      <div className="bg-black rounded-lg p-4 sm:p-6 border border-[#6BE4A8]/30">
                        <div className="flex items-center justify-center space-x-4 sm:space-x-8">
                          {/* Codex Desktop Icon */}
                          <div className="text-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#6BE4A8] rounded-xl flex items-center justify-center mb-2 shadow-lg border border-[#6BE4A8]/50">
                              <Image
                                src="/logo.png"
                                alt="Codex Desktop"
                                width={32}
                                height={32}
                                className="w-6 h-6 sm:w-8 sm:h-8"
                              />
                            </div>
                            <span className="text-xs font-medium text-white">Codex Desktop</span>
                          </div>
                          
                          {/* Arrow */}
                          <div className="text-[#6BE4A8]">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                          
                          {/* Applications Folder */}
                          <div className="text-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#6BE4A8]/20 border-2 border-[#6BE4A8] rounded-xl flex items-center justify-center mb-2 shadow-lg">
                              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#6BE4A8]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"/>
                              </svg>
                            </div>
                            <span className="text-xs font-medium text-white">Applications</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 - Launch */}
            <div className="relative bg-[#0a0a0a] rounded-2xl sm:rounded-3xl border border-gray-800/50 overflow-hidden p-6 sm:p-8 hover:border-[#6BE4A8]/30 transition-all duration-300">
              <div className="text-center h-full flex flex-col">
                <div className="mb-6 flex-shrink-0">
                  <div className="text-sm font-semibold text-gray-400 mb-2">Step 3</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Launch</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Open the Launchpad or Spotlight, type <span className="font-semibold text-white">Codex Desktop</span> and launch the app.
                  </p>
                </div>
                
                {/* Visual representation of Launchpad */}
                <div className="flex-1 flex items-center justify-center min-h-[200px]">
                  <div className="w-full max-w-xs">
                    <div className="bg-gradient-to-br from-[#6BE4A8] to-[#5DD494] rounded-2xl p-4 sm:p-6 shadow-2xl">
                      <div className="grid grid-cols-4 gap-2 sm:gap-3">
                        {/* Finder */}
                        <div className="bg-black border-2 border-[#6BE4A8]/50 rounded-xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg">
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#6BE4A8]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z"/>
                          </svg>
                        </div>
                        
                        {/* App Grid */}
                        <div className="bg-black border-2 border-[#6BE4A8]/50 rounded-xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg">
                          <div className="grid grid-cols-2 gap-1">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#6BE4A8] rounded-full"></div>
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#6BE4A8] rounded-full"></div>
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#6BE4A8] rounded-full"></div>
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#6BE4A8] rounded-full"></div>
                          </div>
                        </div>
                        
                        {/* Codex Desktop - Highlighted */}
                        <div className="bg-black rounded-xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg ring-2 sm:ring-4 ring-[#6BE4A8] border-2 border-[#6BE4A8]">
                          <Image
                            src="/logo.png"
                            alt="Codex Desktop"
                            width={32}
                            height={32}
                            className="w-6 h-6 sm:w-8 sm:h-8"
                          />
                        </div>
                        
                        {/* Another App */}
                        <div className="bg-black border-2 border-[#6BE4A8]/50 rounded-xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg">
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#6BE4A8]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

          {/* Footer Links */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 text-sm mb-4">
              Now that Codex Desktop is up and running, check out the{" "}
              <a 
                href="https://youtu.be/JADZo-7MEVQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#6BE4A8] hover:text-[#5DD494] underline transition-colors"
              >
                Codex Desktop Demo Video
              </a>
              {" "}to get started.
            </p>
          </div>

        </div>
      </div>
    </>
  );
} 