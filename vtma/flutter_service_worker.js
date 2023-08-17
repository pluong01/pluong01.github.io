'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "18919eaf44824e6777cf7758225df28d",
"assets/AssetManifest.smcbin": "34fcabe572cff64b14d848d488276215",
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
"assets/fonts/MaterialIcons-Regular.otf": "b3e6a49443016f3c1b8d312c6d528fac",
"assets/NOTICES": "94585201155de1bd2a616bbf19aa8d31",
"assets/packages/csc_picker/lib/assets/country.json": "11b8187fd184a2d648d6b5be8c5e9908",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5ac99533bd9dc46227434b4853c3e532",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "093d2cde7075fcffb24ab215668d0da2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1e17b1ec3152f29bf783bd42db8b6023",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "4a7fc26bd237a27fc84c22d33c2c8116",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "1c4ec347157c59118ec8847f1720cf08",
"icons/Icon-512.png": "63978e5340f598b0eaae72f32430387d",
"icons/Icon-maskable-192.png": "1c4ec347157c59118ec8847f1720cf08",
"icons/Icon-maskable-512.png": "63978e5340f598b0eaae72f32430387d",
"index.html": "a81c8bcb3891fa9ec9b7b33c6d9437b1",
"/": "a81c8bcb3891fa9ec9b7b33c6d9437b1",
"main.dart.js": "8b2fa16968f102bc8d562e7d754f787d",
"manifest.json": "50be3d5705d7c2b172d5136fe362abd8",
"version.json": "0a0006636cbeb615fb13e70ce0a9dd90"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
