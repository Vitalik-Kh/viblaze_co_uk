"use strict";var precacheConfig=[["index.html","2d41bc168ee8ff13a3065a11b9dbe2b1"],["static/css/main.7e8c350a.css","5db0f608f5802e2552d4e3c6a314bbd7"],["static/js/main.196079d6.js","d6ea620d320eb2cc9666e8b8cc956055"],["static/media/LeedsPlacesMap.efd3c113.jpg","efd3c11359eee7ccd208eeffe288552f"],["static/media/LeedsPlacesMap_1.5x.987f6ae0.jpg","987f6ae0d2bbea8ad0b8c7915ba07a62"],["static/media/LeedsPlacesMap_2x.a8125bf3.jpg","a8125bf371e054a74412b485a6f684a9"],["static/media/TicTacToe.42e5c0df.png","42e5c0df84a247ad11318db4854b2f06"],["static/media/TicTacToe_1.5x.e4d87802.png","e4d87802d8fbc895a24e30ca72f36986"],["static/media/TicTacToe_2x.ba9a9571.png","ba9a9571b8a9e180b6a749c4ad4bc149"],["static/media/calculator.96183998.jpg","961839981816935d2cf4145ab94c68a9"],["static/media/calculator_1.5x.32917187.jpg","32917187ea1c963084fc06bbbdcbdb9e"],["static/media/calculator_2x.837709a4.jpg","837709a45486a102695124efeead6275"],["static/media/fashionBlog.6716485e.jpg","6716485e2cbc68ce888ca04a4bbf6944"],["static/media/fashionBlog_1.5x.7b9bafc1.jpg","7b9bafc1a45466e784e71eb6f192012f"],["static/media/fashionBlog_2x.379e59dd.jpg","379e59dd1c579ac930e42f9efc4f6109"],["static/media/me.24a64298.png","24a64298ced68a43f38fc118b70ae6ad"],["static/media/me_15x.2ea0661a.png","2ea0661a3ca1f9bced87fac538f0f4b0"],["static/media/me_2x.87463187.png","874631874bb17fb3f0475c8ba4457a1f"],["static/media/photoPortfolio.2efb516d.jpg","2efb516d0a906681df36848efad560af"],["static/media/photoPortfolio_1.5x.53f1e1db.jpg","53f1e1db7d8975a41a695a9c8796fa56"],["static/media/photoPortfolio_2x.6e8a118e.jpg","6e8a118ebdc279057e08c9d33a7ffc2c"],["static/media/pomodoro.d65523b5.jpg","d65523b5c47d21746cacebfa54f88ca7"],["static/media/pomodoro_1.5x.d59da4d5.jpg","d59da4d5a57cba38583c7ee7e2f14757"],["static/media/pomodoro_2x.c27d95bf.jpg","c27d95bfd878737d85fb46b1c3152ba4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});