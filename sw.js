/* MYCELION · copia local para abrir sin conexión (red primero, copia si no hay red) */
var C="mycelion-acceso-v1";
self.addEventListener("install",function(){self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",function(e){
  var r=e.request;if(r.method!=="GET")return;
  var u=new URL(r.url);if(u.origin!==self.location.origin)return;
  e.respondWith(fetch(r).then(function(res){
    if(res&&res.ok){var c=res.clone();caches.open(C).then(function(x){x.put(r,c)})}
    return res;
  }).catch(function(){
    return caches.match(r,{ignoreSearch:true}).then(function(m){return m||caches.match("./")});
  }));
});
