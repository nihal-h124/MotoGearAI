/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                // Apply these headers to all routes in your application.
                source: '/(.*)',
                headers: [
                    {
                        key: "Contenty-Security-Policy",
                        value: "frame-src 'self' https://fa14fdab-c27f-48ad-b80e-4115fe2d6825.created.app;",
                    },
                ],
            },
        ];
    }
};

export default nextConfig;
