/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'utfs.io',
      },
      {
        hostname: 'uploadthing-prod-sea1.s3.us-west-2.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
