const nextConfig = {
    webpack: (config, { isServer }) => {
      config.cache = false;
      return config;
    },
  };
  
  export default nextConfig;
  