import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  ...(process.env.BUILD_FOR_WP === '1' && { output: 'export' as const }),
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ais-dev-icyxouckiinuh4rolavtyr-218406452901.europe-west2.run.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ais-pre-icyxouckiinuh4rolavtyr-218406452901.europe-west2.run.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.run.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modify - file watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
