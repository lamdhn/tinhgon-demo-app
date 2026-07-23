// App demo tối giản — Node thuần (không cần cài package). Đọc SITE_TITLE từ biến môi trường.
const http = require('http');
const PORT = process.env.PORT || 3000;
const TITLE = process.env.SITE_TITLE || 'Tinhgon Demo App';

const page = () => `<!doctype html>
<html lang="vi"><head><meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>${TITLE}</title>
<style>
 body{margin:0;font-family:system-ui,Segoe UI,Roboto,sans-serif;min-height:100vh;
   display:grid;place-items:center;background:linear-gradient(135deg,#4f46e5,#06b6d4);color:#fff}
 .card{background:rgba(255,255,255,.12);backdrop-filter:blur(8px);padding:2.5rem 3rem;
   border-radius:1.25rem;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,.25)}
 code{background:rgba(0,0,0,.25);padding:.15rem .4rem;border-radius:.35rem}
</style></head>
<body><div class="card">
 <h1>🚀 ${TITLE}</h1>
 <p>App demo để test tính năng Template của tinhgon.</p>
 <p>Chạy trên cổng <code>${PORT}</code></p>
</div></body></html>`;

http.createServer((req, res) => {
  if (req.url === '/health') { res.writeHead(200); return res.end('ok'); }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(page());
}).listen(PORT, () => console.log(`listening on ${PORT}`));
