import { absoluteUrl } from './lib/site';

export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
    ],
    sitemap: absoluteUrl('/sitemap.xml'),
  };
}
