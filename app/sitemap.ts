import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://dev-champions.tech/',
      lastModified: new Date(),
    },
    {
      url: 'https://dev-champions.tech#services-section',
      lastModified: new Date(),
    },
    {
      url: 'https://dev-champions.tech#aboutus-section',
      lastModified: new Date(),
    },
    {
      url: 'https://jobs.dev-champions.tech',
      lastModified: new Date(),
    },
    {
      url: 'http://blogs.dev-champions.tech',
      lastModified: new Date(),
    },
    {
      url: 'https://dev-champions.tech/forms',
      lastModified: new Date(),
    },
    // Add more routes as needed
  ]
}
