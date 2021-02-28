export default function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./sw.js')
      .then(function () { console.log("Service Worker Registered"); });
  }
}