const CACHE='ml-study-v3';
const FILES=['./','./index.html','./study-method.html','./retrieval-practice.html','./feynman-template.html','./s3-storage-flashcards.html','./sagemaker-algorithms-flashcards.html','./sagemaker-algorithm-picker.html','./3vs-big-data.html','./agent-registry-diagram.html','./manifest.json','./apple-touch-icon.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const clone=res.clone();caches.open(CACHE).then(c=>c.put(e.request,clone));return res}).catch(()=>caches.match('./index.html'))))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))))});
