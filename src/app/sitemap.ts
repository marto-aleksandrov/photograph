import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://example.com';
  return ['', '/studio', '/equipment', '/equipment/cart', '/privacy-policy', '/terms-of-use', '/cookie-policy', '/equipment-terms'].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date()
  }));
}
