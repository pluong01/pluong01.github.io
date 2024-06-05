'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "39f29e46e36a541909c87fcd4119a2b9",
"assets/AssetManifest.bin.json": "1985e0b9278970b66e691357bb937707",
"assets/AssetManifest.json": "18919eaf44824e6777cf7758225df28d",
"assets/assets/fonts/Crimson/CrimsonText-Bold.ttf": "92e8dfc1d9c8baed40c860318b3c5186",
"assets/assets/fonts/Crimson/CrimsonText-BoldItalic.ttf": "f6d733af55ff450907945144282bb6ea",
"assets/assets/fonts/Crimson/CrimsonText-Italic.ttf": "684cf58ea500f35fb2f7f8227479439b",
"assets/assets/fonts/Crimson/CrimsonText-Regular.ttf": "c8eaeb3ab46e610c4fa4a623ee8d282f",
"assets/assets/fonts/Crimson/CrimsonText-SemiBold.ttf": "34b92308cc1867957b375e5aa05d005e",
"assets/assets/fonts/Crimson/CrimsonText-SemiBoldItalic.ttf": "6fa4572b778d9dea7b50acc4b2f0b558",
"assets/assets/fonts/Dancing/static/DancingScript-Bold.ttf": "a3fc746619e755e853818ee67924ebbe",
"assets/assets/fonts/Dancing/static/DancingScript-Medium.ttf": "d903e1aee8365007ae713e8a32e31a6a",
"assets/assets/fonts/Dancing/static/DancingScript-Regular.ttf": "4878c050aa42659a505ce45884f008f8",
"assets/assets/fonts/Dancing/static/DancingScript-SemiBold.ttf": "7a221ed294fb3ebcfc999bb6b68c32b7",
"assets/assets/fonts/Instagram/InstagramIcon.ttf": "b610a43ab9e47db0af914351315f94ee",
"assets/assets/fonts/Lobster/Lobster-Regular.ttf": "c3191f3b933ae0bd46335e178744326e",
"assets/assets/fonts/Noto_Serif/NotoSerif-Bold.ttf": "cd68b227ac0046292ae4975cf76ad561",
"assets/assets/fonts/Noto_Serif/NotoSerif-BoldItalic.ttf": "dd08f86bf6b00f4ef02ea8293cf1915c",
"assets/assets/fonts/Noto_Serif/NotoSerif-Italic.ttf": "718cf13c7a5f059e8b51e0b42c7cbe65",
"assets/assets/fonts/Noto_Serif/NotoSerif-Regular.ttf": "ceeb2cf5944c44d51fd3e6b3733e3aa5",
"assets/assets/images/im_logo_tgq.png": "b2093b03d28809e0d497c3181d573e3b",
"assets/assets/images/im_logo_vtma_bw.gif": "fa5e43d195a83d1742c839041f9d22fc",
"assets/assets/images/im_logo_vtma_color.png": "62e7875bf42d15a44368b4579798d777",
"assets/FontManifest.json": "82617e1d357cf1ea0f01dd6f9531d307",
"assets/fonts/MaterialIcons-Regular.otf": "26dbf3251c2454b5d01430c5bcd958d3",
"assets/NOTICES": "c874be91b57596ce9cb2529c8f46fccc",
"assets/packages/csc_picker/lib/assets/country.json": "11b8187fd184a2d648d6b5be8c5e9908",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "4a7fc26bd237a27fc84c22d33c2c8116",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "8ed11154171be271e9dfda32d0ebcf83",
"icons/Icon-192.png": "1c4ec347157c59118ec8847f1720cf08",
"icons/Icon-512.png": "63978e5340f598b0eaae72f32430387d",
"icons/Icon-maskable-192.png": "1c4ec347157c59118ec8847f1720cf08",
"icons/Icon-maskable-512.png": "63978e5340f598b0eaae72f32430387d",
"index.html": "64f8b75cb20f75070c177bc72a03317c",
"/": "64f8b75cb20f75070c177bc72a03317c",
"main.dart.js": "40704b449d34cd5e4204f4cef78a1982",
"manifest.json": "50be3d5705d7c2b172d5136fe362abd8",
"version.json": "0a0006636cbeb615fb13e70ce0a9dd90"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
