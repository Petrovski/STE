"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/STE/index.html","13dc24d2f9e5df48afe27ba4481fae6d"],["/STE/static/css/main.62dbe2aa.css","5f7e6399d88f1da0839808160aafdf85"],["/STE/static/js/main.f8b7e531.js","871308fa7e02a529540d3bd44655fb02"],["/STE/static/media/Simple-Line-Icons.0cb0b9c5.woff2","0cb0b9c589c0624c9c78dd3d83e946f6"],["/STE/static/media/Simple-Line-Icons.2fe2efe6.svg","2fe2efe63441d830b1acd106c1fe8734"],["/STE/static/media/Simple-Line-Icons.78f07e2c.woff","78f07e2c2a535c26ef21d95e41bd7175"],["/STE/static/media/Simple-Line-Icons.d2285965.ttf","d2285965fe34b05465047401b8595dd0"],["/STE/static/media/Simple-Line-Icons.f33df365.eot","f33df365d6d0255b586f2920355e94d7"],["/STE/static/media/cnc-machine.7cbc0293.jpg","7cbc0293e33fcc44a94fbcc0734397cd"],["/STE/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/STE/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/STE/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/STE/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/STE/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/STE/static/media/galaxy_s5_land_black.03b51e06.png","03b51e065c5c626999376722f5bfd180"],["/STE/static/media/galaxy_s5_land_white.0525c34c.png","0525c34cef3283eabc3167338a0797d4"],["/STE/static/media/galaxy_s5_port_black.0de8e1a8.png","0de8e1a8665635a0837688589c6f4914"],["/STE/static/media/galaxy_s5_port_white.5910135f.png","5910135fbce4a7641a5f1ff1400b9d7c"],["/STE/static/media/galaxy_tab4_land_black.c10e3607.png","c10e360713bdd5a37ccc7084a4402857"],["/STE/static/media/galaxy_tab4_land_white.ba2ef566.png","ba2ef5665e4e31ba27c939cc60589963"],["/STE/static/media/gold.7f10264e.png","7f10264e0f100ddffd8bbdd8ac281fef"],["/STE/static/media/grey.f33471e2.png","f33471e2767747a3863115d7b8b980b8"],["/STE/static/media/imac.b4111cf5.png","b4111cf5c1d1896d1628f95e3bea7e48"],["/STE/static/media/ipad_air_2_gold_land.3d8f03da.png","3d8f03daaeaca835b53aef996630a1eb"],["/STE/static/media/ipad_air_2_gold_port.18c7b364.png","18c7b36437e59d55e4c8c89898664b9c"],["/STE/static/media/ipad_air_2_gray_land.43cbe56f.png","43cbe56f89906ad1095dcb411f54ea79"],["/STE/static/media/ipad_air_2_gray_port.070f84dc.png","070f84dc1bf0ceb5b09710a62b0c044c"],["/STE/static/media/ipad_air_2_silver_land.eeb81c45.png","eeb81c4553931271a6fcddc76aa8e2a5"],["/STE/static/media/ipad_air_2_silver_port.cb6895ef.png","cb6895ef16c1ce0b4f4d9d0ee1e3f496"],["/STE/static/media/ipad_air_gray_land.49d7d773.png","49d7d7738efffe81e5465076ed255f29"],["/STE/static/media/ipad_air_gray_port.3aab1ade.png","3aab1adee35d0ad688992735a96a52c2"],["/STE/static/media/ipad_air_silver_land.b7cbef7b.png","b7cbef7b31f10fb0ec94894ade316ee1"],["/STE/static/media/ipad_air_silver_port.cc19f51e.png","cc19f51ea28d907e545a6f57ecaa3830"],["/STE/static/media/ipad_port_black.76c5ba88.png","76c5ba8820448f36ee9567acbf7e5ee5"],["/STE/static/media/ipad_pro_land_black.94c538da.png","94c538da19ff004085dfc3093a88e748"],["/STE/static/media/ipad_pro_land_gold.b3faae9e.png","b3faae9e1082811badead6cfd98db62f"],["/STE/static/media/ipad_pro_land_silver.9fb9a414.png","9fb9a4146751e9b044ce14dad13588c9"],["/STE/static/media/ipad_pro_port_black.b6239c60.png","b6239c60fcca3b51b0f3b2d8e11f1af9"],["/STE/static/media/ipad_pro_port_gold.f0e7b1cf.png","f0e7b1cf8ef8f58d07f11e5e96c4a03a"],["/STE/static/media/ipad_pro_port_silver.c1ffcacd.png","c1ffcacd23f696e90b004e4a0c54349b"],["/STE/static/media/iphone5_land_black.07bbd15f.png","07bbd15ff3c2a1859feb82afb719e2cf"],["/STE/static/media/iphone5_land_white.5d4198bc.png","5d4198bc85fcb3c350950f0a69ec9907"],["/STE/static/media/iphone5_port_black.81078e2c.png","81078e2cf3b4fe341431f4d2f6675eed"],["/STE/static/media/iphone5_port_white.3347526f.png","3347526fc4a1fdedcabe680c64c0e799"],["/STE/static/media/iphone_6_land_black.6ca71745.png","6ca71745c1ce3e4b0ca33740afe159fa"],["/STE/static/media/iphone_6_land_gold.633e2b15.png","633e2b154c400e9a9cfcc568ddaafdb0"],["/STE/static/media/iphone_6_land_white.aa01efc5.png","aa01efc5702705ce5a695da66aed8faf"],["/STE/static/media/iphone_6_plus_black_land.ae1f5e7a.png","ae1f5e7ab3d5a28ac3a858de6764f7df"],["/STE/static/media/iphone_6_plus_black_port.d96cfb83.png","d96cfb83c4d774edd86e0e06b47a974b"],["/STE/static/media/iphone_6_plus_gold_land.b8846e1c.png","b8846e1c45561164e04a43abc5a5c75a"],["/STE/static/media/iphone_6_plus_gold_port.0aec69ba.png","0aec69baa3d9026b3dd7dd88e054f35e"],["/STE/static/media/iphone_6_plus_white_land.3b0218f7.png","3b0218f7b660c875ec8440fd9279df00"],["/STE/static/media/iphone_6_plus_white_port.d6c50fbd.png","d6c50fbd2ce470c075e863ba6961557a"],["/STE/static/media/iphone_6_port_black.ae61d785.png","ae61d78586a588605a71f0f58f9e2760"],["/STE/static/media/iphone_6_port_gold.673d810a.png","673d810a0ec7218572346bf8bd3b8d90"],["/STE/static/media/iphone_6_port_white.d4956eac.png","d4956eac0ce11c5df72ab79fb58815b9"],["/STE/static/media/iphone_se_land_black.f17bc857.png","f17bc857d0dcea6fe60775161c7bbd5e"],["/STE/static/media/iphone_se_land_gold.8d33a7c1.png","8d33a7c1f6305b41c56523d5bf7e2176"],["/STE/static/media/iphone_se_land_rose.1c34c98f.png","1c34c98f53b119c958988496a60a03c3"],["/STE/static/media/iphone_se_land_white.6c71f01f.png","6c71f01ff2b3a48c38a70a43ef9b3914"],["/STE/static/media/iphone_se_port_black.e392031a.png","e392031a42566e89724cc347e2eb944e"],["/STE/static/media/iphone_se_port_gold.b49805de.png","b49805dee4cc2d7b8c92d3632ba8bcb9"],["/STE/static/media/iphone_se_port_rose.664550ad.png","664550ad8bff9d496e4786641e3033d5"],["/STE/static/media/iphone_se_port_white.f947505c.png","f947505c6fa2adb20690a2474736ab0a"],["/STE/static/media/lumia920_land.cd3a76c6.png","cd3a76c6e24267e669f6bc5ad2ff9f6e"],["/STE/static/media/lumia920_port.accc02ae.png","accc02ae3e69c7a2679d43b1979811a7"],["/STE/static/media/macbook.e2d887e4.png","e2d887e445fd459e71304f3caae7610f"],["/STE/static/media/nexus7_port.20bfe0b6.png","20bfe0b646677b54b0d7af8921aee885"],["/STE/static/media/s3_land_black.6b2944e5.png","6b2944e5a402051f87606434560c7b38"],["/STE/static/media/s3_land_white.0effbb6a.png","0effbb6a3ffa421ab3b6da2e69fb3b0e"],["/STE/static/media/s3_port_black.fda6e177.png","fda6e17702dbe65c69ca219d9d2bb06a"],["/STE/static/media/s3_port_white.54ef3f95.png","54ef3f9543f5e6134bee56473edec3a4"],["/STE/static/media/samsung_tv.41971728.png","4197172869623c61e72b07ff19e98c2f"],["/STE/static/media/silver.845604f7.png","845604f7ac5c5d44155d61484944ca07"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,c,t){var i=new URL(e);return t&&i.pathname.match(t)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),i=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),i]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/STE/index.html",self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});