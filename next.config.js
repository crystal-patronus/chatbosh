// next.config.js

module.exports = {
    async headers() {
      return [
        {
          // matching all API routes
          source: "https://api.stru.ai/v1/:path*", // adjust this pattern to match your API routes
          headers: [
            {
              key: "Access-Control-Allow-Origin",
              value: "https://chatbosh.vercel.app",
            },
            {
              key: "Access-Control-Allow-Methods",
              value: "GET, OPTIONS",
            },
            {
              key: "Access-Control-Allow-Headers",
              value: "Origin, X-Requested-With, Content-Type, Accept",
            },
          ],
        },
      ];
    },
  };
  