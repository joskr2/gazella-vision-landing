/** @type {import('next').NextConfig} */
const nextConfig = {
  // ESLint ejecutará durante builds para mantener calidad del código
  eslint: {
    // Opcional: especificar directorios específicos si es necesario
    // dirs: ['pages', 'app', 'components', 'lib', 'src'],
  },
  
  // TypeScript verificará errores durante builds
  typescript: {
    // Configuración estricta para desarrollo profesional
  },
  
  // Optimización de imágenes habilitada para mejor rendimiento y SEO
  images: {
    // Next.js optimizará automáticamente las imágenes
    // Si necesitas usar dominios externos, configúralos aquí:
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'example.com',
    //   },
    // ],
  },
}

export default nextConfig
