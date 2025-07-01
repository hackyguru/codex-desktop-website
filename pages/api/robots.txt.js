export default function handler(req, res) {
  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Host
Host: https://codexdesktop.com

# Sitemaps
Sitemap: https://codexdesktop.com/api/sitemap.xml
`;

  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(robotsTxt);
} 