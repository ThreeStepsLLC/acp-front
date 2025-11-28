/** @type {import('next').NextConfig} */
module.exports = {
    output: 'standalone',
    reactStrictMode: true,
    experimental: {
        appDir: true
    },
    images: {
        domains: ['cdn.afmpro.az', 'api.onayconsulting.az'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8080',
                pathname: '/media/**',
            },
            {
                protocol: 'https',
                hostname: 'api.onayconsulting.az',
                pathname: '/**',
            },
        ],
        unoptimized: process.env.NODE_ENV === 'development',
    },
}
