import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'assets/**/*.{png,jpg,jpeg,gif,svg,webp,mp4,webm,ogg}', // Add all image/video formats
      ], 
      manifest: {
        // Your manifest configuration
      },
      workbox: {
globPatterns: [
    '**/*.{js,css,html}',
    'assets/**/*.{png,jpg,jpeg,gif,svg,webp,mp4,webm,ogg}'
  ],
        runtimeCaching: [
          {
            urlPattern: /\.(?:png|jpg|jpeg|gif|svg|webp|mp4|webm|ogg)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'assets-cache',
              expiration: {
                maxEntries: 100, // Cache up to 100 files
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            }
          }
        ]
      }
    })
  ]
})