const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader(`Content-Type`, `text/html; charset=utf-8`);
  res.end("<h1>Học NodeJS không khó</h1>");
});
const hostName = `localhost`;
const port = 8080;
server.listen(port, hostName, () => {
  console.log(`Chạy thành công với port ${port}`);
});
