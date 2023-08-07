let cacheName = "my-first-pwa";
let filesToCache = ["/", "/index.html",
"/css/style.css", "/js/main.js"];

/*service worker iniciado e download*/

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheName).then(function(cache){
            return cache.addAll(filesToCache);
        })
    );
});

/* se estiver offline, o conteudo vai ser disponibilizado tranquilamente*/
self.addEventListener("fetch", (e) =>{
    e.respondWith(
        caches.match(e.request).then((response) => {
            return responde || fetch (e.request);
        })
    )
})