import Head from 'next/head';

const SEO = ({
  title = "Codex Desktop - Decentralized File Storage with Web3 Technology",
  description = "Experience lightning-fast file storage with military-grade encryption. Codex Desktop combines torrent technology with Web3 for secure, decentralized file management on macOS.",
  keywords = "decentralized storage, web3, torrent, file storage, encryption, macOS, blockchain, peer-to-peer, privacy, secure storage",
  author = "Codex Desktop Team",
  url = "https://codexdesktop.com",
  image = "https://codexdesktop.com/codexdesktop-og.png",
  type = "website",
  publishedTime,
  modifiedTime,
  section,
  tags,
  locale = "en_US",
  siteName = "Codex Desktop",
  twitterHandle = "@CodexDesktop",
  structuredData
}) => {
  const fullTitle = title.includes("Codex Desktop") ? title : `${title} | Codex Desktop`;
  
  // Default structured data for the organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
            "name": "Codex Desktop",
    "description": description,
    "url": url,
    "image": image,
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
      "url": url
    },
    "softwareVersion": "Beta",
    "downloadUrl": "https://github.com/hackyguru/codex-desktop/releases",
    "screenshot": "https://codexdesktop.com/screenshot1.png",
    "featureList": [
      "Military-grade AES-256 encryption",
      "Decentralized Web3 storage",
      "Torrent-powered file sharing",
      "Native macOS integration",
      "Peer-to-peer networking"
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#6BE4A8" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      
      {/* Article specific tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags && tags.map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Additional SEO Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="msapplication-TileColor" content="#6BE4A8" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//github.com" />
      <link rel="dns-prefetch" href="//youtube.com" />
      
      {/* Preload critical resources */}
      <link rel="preload" href="/logo.png" as="image" type="image/png" />
      <link rel="preload" href="/codexdesktop-og.png" as="image" type="image/png" />
      
      {/* Prevent layout shift for logo */}
      <style dangerouslySetInnerHTML={{
        __html: `
          img[src="/logo.png"] {
            aspect-ratio: 180 / 40;
          }
        `
      }} />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData)
        }}
      />
      
      {/* Google Site Verification (add your verification code) */}
      {/* <meta name="google-site-verification" content="your-verification-code" /> */}
      
      {/* Bing Site Verification (add your verification code) */}
      {/* <meta name="msvalidate.01" content="your-verification-code" /> */}
      
      {/* Yandex Site Verification (add your verification code) */}
      {/* <meta name="yandex-verification" content="your-verification-code" /> */}
    </Head>
  );
};

export default SEO; 