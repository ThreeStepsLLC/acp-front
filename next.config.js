/** @type {import('next').NextConfig} */
module.exports = {
    output: 'standalone',
    reactStrictMode: true,
    experimental: {
        appDir: true
    },
    images: {
        domains: ['cdn.afmpro.az'],
    },
}
