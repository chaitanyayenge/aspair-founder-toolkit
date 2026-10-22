import http from 'node:http';
import {readFile} from 'node:fs/promises';
const files=new Map([
 ['/', ['index.html','text/html; charset=utf-8']],
 ['/index.html',['index.html','text/html; charset=utf-8']],
 ['/src/brief.mjs',['src/brief.mjs','text/javascript; charset=utf-8']],
 ['/src/app.mjs',['src/app.mjs','text/javascript; charset=utf-8']],
 ['/style.css',['style.css','text/css; charset=utf-8']],
]);
const port=Number(process.env.PORT||4187);
http.createServer(async(req,res)=>{
 const pathname=new URL(req.url,'http://localhost').pathname;
 const file=files.get(pathname);
 if(!file){res.writeHead(404,{'Content-Type':'text/plain'});res.end('Not found');return;}
 try{res.writeHead(200,{'Content-Type':file[1],'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(await readFile(new URL(file[0],import.meta.url)));}
 catch{res.writeHead(500);res.end('Unable to read toolkit file');}
}).listen(port,'127.0.0.1',()=>console.log(`Aspair toolkit: http://127.0.0.1:${port}`));
