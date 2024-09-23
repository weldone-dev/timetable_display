/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://spask-job.ru/api/:path*',
            },
        ];
    },
};

export default nextConfig;
