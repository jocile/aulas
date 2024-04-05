const resource = [ /* --- CSS --- */ '/aulas/assets/css/style.css', /* --- PWA --- */ '/aulas/app.js', '/aulas/sw.js', /* --- HTML --- */ '/aulas/index.html', '/aulas/404.html', '/aulas/categories/', '/aulas/tags/', '/aulas/diario/', '/aulas/professor/', '/aulas/aulas/', '/aulas/teologia/', '/aulas/referencias/', /* --- Favicons & compressed JS --- */ '/aulas/assets/js/dist/categories.min.js', '/aulas/assets/js/dist/commons.min.js', '/aulas/assets/js/dist/misc.min.js', '/aulas/assets/js/dist/page.min.js', '/aulas/assets/js/dist/post.min.js' ]; /* The request url with below domain will be cached */ const allowedDomains = [ 'jocile.com/aulas', 'fonts.gstatic.com', 'fonts.googleapis.com', 'cdn.jsdelivr.net', 'polyfill.io' ]; /* Requests that include the following path will be banned */ const denyUrls = [ ];
