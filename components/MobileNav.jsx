import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MobileNav({ isOpen, onClose, currentPage = "" }) {
  if (!isOpen) return null;

  const handleJoinCommunity = () => {
    window.open("https://discord.com/invite/codex-storage", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="md:hidden fixed inset-0 w-screen h-screen bg-black z-[9999] flex flex-col">
      
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-gray-800/50 bg-black">
        <Link href="/" onClick={onClose}>
          <Image
            src="/logo.png"
            alt="Codex Desktop"
            width={180}
            height={40}
            className="h-8 w-auto cursor-pointer"
            priority
          />
        </Link>
        <button
          onClick={onClose}
          className="text-gray-300 hover:text-[#6BE4A8] p-2 transition-colors"
          aria-label="Close menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 flex flex-col justify-center px-8 py-12 bg-black">
        <div className="flex flex-col space-y-8">
          
          <button
            onClick={() => {
              handleJoinCommunity();
              onClose();
            }}
            className="text-gray-300 hover:text-white text-3xl font-light transition-colors py-4 border-b border-transparent hover:border-[#6BE4A8]/30 text-left"
          >
            Join Community
          </button>
          
          <div className="pt-8">
            <Link href="/download-macos">
              <div
                onClick={onClose}
                className="bg-[#6BE4A8] hover:bg-[#5DD494] text-black px-8 py-4 rounded-lg text-xl font-semibold transition-colors flex items-center justify-center gap-3 cursor-pointer"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download for macOS
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-gray-800/50 bg-black">
        <p className="text-gray-400 text-sm text-center">
          Experience the future of decentralized file storage
        </p>
      </div>
    </div>
  );
} 