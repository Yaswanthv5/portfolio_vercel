import type { NextConfig } from "next";

const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@']=path.join(__dirname,'.');
    return config;
  },
};

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
