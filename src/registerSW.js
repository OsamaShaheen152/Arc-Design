import { Workbox } from 'workbox-window';

if ('serviceWorker' in navigator) {
  const wb = new Workbox('/sw.js');

  wb.register()
    .then(registration => {
      console.log('Service Worker registration completed:', registration);
    })
    .catch(error => {
      console.error('Service Worker registration failed:', error);
    });
}