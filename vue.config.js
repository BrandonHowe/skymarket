module.exports = {
  pwa: {
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      navigateFallback: "/index.html",
      runtimeCaching: [
        {
          urlPattern: new RegExp("^https"),
          handler: "networkFirst",
          options: {
            networkTimeoutSeconds: 20,
            cacheName: "api-cache",
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/skymarket/'
    : '/'
};
