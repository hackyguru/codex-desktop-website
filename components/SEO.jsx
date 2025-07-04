import Head from 'next/head';

const SEO = ({
  title = "Codex Desktop",
  description = "Codex Desktop is a torrent-styled desktop client that helps you run a Codex node & interact with the Alturistic p2p network with a single click - it's censorship resistant, fast and decentralized with the power of Codex Storage.",
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
      <meta property="og:url" content="https://codexdesktop.hackyguru.com" />
        <meta property="og:type" content="website" />
              <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/ca65d200-a9db-40d7-b65f-740019acb61d.png?token=0raU4Wco-yFoUUzQlVYgWfD9viZQAmmAGwNOM89GuRQ&height=630&width=1200&expires=33287619955" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta property="twitter:domain" content="codexdesktop.hackyguru.com" />
              <meta property="twitter:url" content="https://codexdesktop.hackyguru.com" />
              <meta name="twitter:title" content="CodexDesktop - Decentralized File Storage with Web3 Technology | Codex Desktop" />
              <meta name="twitter:description" content="Experience lightning-fast file storage with military-grade encryption. CodexDesktop combines torrent technology with Web3 for secure, decentralized file management on macOS. Now available for beta download." />
              <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/ca65d200-a9db-40d7-b65f-740019acb61d.png?token=0raU4Wco-yFoUUzQlVYgWfD9viZQAmmAGwNOM89GuRQ&height=630&width=1200&expires=33287619955" />



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