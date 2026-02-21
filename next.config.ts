import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'Shekhar_SalonAbad'; // The repository name

const config: NextConfig = {
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',

  images: {
    unoptimized: true,
  },
};

export default config;