/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'default',
    loaderFile: 'src/app/components/loaders/imageLoader.js',
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  webpack(config) {
    config.resolve.fallback = {

      // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped.
      ...config.resolve.fallback,  

      fs: false, // the solution
    };
    
    return config;
  },
};

export default nextConfig;
