/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'siteadmin.green.edu.bd',
            
          },
          {
            protocol: 'https',
            hostname: 'encrypted-tbn0.gstatic.com',
            
          },
          {
            protocol: 'https',
            hostname: 'www.bssnews.net',
            
          },
          {
            protocol: 'https',
            hostname: 'blogger.googleusercontent.com',
            
          },
          {
            protocol: 'https',
            hostname: 'files.cdn.printful.com',
            
          },
          {
            protocol: 'https',
            hostname: 'snackible.com',
            
          },
        ],
      },
};

export default nextConfig;
