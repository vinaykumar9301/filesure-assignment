module.exports = {
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, must-revalidate',
            },
          ],
        },
      ];
    },
  };
  