import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    basePath: "/test-appricot",
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/about'
            }
        ];
    },
};

export default nextConfig;
