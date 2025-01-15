/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // Required for static export
    },
    trailingSlash: true, // Optional: for trailing slashes in URLs
};

module.exports = nextConfig;
