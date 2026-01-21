/** @type {import('next').NextConfig} */
module.exports = {
    output: 'standalone',
    reactStrictMode: true,
    experimental: {
        appDir: true
    },
    images: {
        domains: ['cdn.az-ko.az', 'api.az-ko.az'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8080',
                pathname: '/media/**',
            },
            {
                protocol: 'https',
                hostname: 'api.az-ko.az',
                pathname: '/**',
            },
        ],
        unoptimized: process.env.NODE_ENV === 'development',
    },
}
