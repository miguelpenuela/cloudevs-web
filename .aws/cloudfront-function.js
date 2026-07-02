// CloudFront Function — URL rewriter for Angular prerendered routes
// Associate this function with the Default Cache Behavior (Viewer Request event).
//
// How to deploy:
//   1. AWS Console → CloudFront → Functions → Create function
//   2. Paste this code, Publish, then associate to your distribution's
//      Default Cache Behavior as "Viewer request"
//
// What it does:
//   /about          → /about/index.html
//   /services       → /services/index.html
//   /               → /index.html
//   /main.js        → /main.js  (unchanged — already a file)

function handler(event) {
  var request = event.request;
  var uri = request.uri;

  // If the URI ends with '/' or has no extension, serve the directory's index.html
  if (uri.endsWith('/')) {
    request.uri = uri + 'index.html';
  } else if (!uri.includes('.')) {
    request.uri = uri + '/index.html';
  }

  return request;
}
