/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    // Mantener las vistas previas de Vercel fuera del índice de búsqueda.
    return process.env.VERCEL_ENV === 'preview'
      ? [{ source: '/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex' }] }]
      : [];
  },
}

module.exports = nextConfig
