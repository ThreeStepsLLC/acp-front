/** @type {import('next').NextConfig} */
module.exports = {
    output: 'standalone',
    reactStrictMode: true,
    experimental: {
        appDir: true
    },
    images: {
        domains: ['cdn.afmpro.az', 'apim.elevateagency.az'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8080',
                pathname: '/media/**',
            },
            {
                protocol: 'https',
                hostname: 'apim.elevateagency.az',
                pathname: '/**',
            },
        ],
        unoptimized: process.env.NODE_ENV === 'development',
    },
}
