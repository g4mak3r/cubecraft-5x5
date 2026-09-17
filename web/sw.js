const C='cubecraft-v14.1';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(['./index.html','./solver-worker.js','./pkg/cube_wasm.js','./pkg/cube_wasm_bg.wasm'])))});
self.addEventListener('activate',e=>e.waitUntil(Promise.all([clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==C).map(k=>caches.delete(k))))])));
self.addEventListener('fetch',e=>{const r=e.request;if(r.mode==='navigate'){e.respondWith(fetch(r).then(x=>{const y=x.clone();caches.open(C).then(c=>c.put('./index.html',y));return x}).catch(()=>caches.match('./index.html')));return}e.respondWith(fetch(r).then(x=>{if(r.method==='GET'){const y=x.clone();caches.open(C).then(c=>c.put(r,y))}return x}).catch(()=>caches.match(r)))});
