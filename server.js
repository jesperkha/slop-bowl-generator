const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const port = Number(process.env.PORT) || 3000;
const root = __dirname;

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".png": "image/png",
};

const server = http.createServer((request, response) => {
  const pathname = new URL(request.url, "http://localhost").pathname;
  const publicFiles = {
    "/": "index.html",
    "/ingredients.json": "ingredients.json",
    "/manifest.webmanifest": "manifest.webmanifest",
    "/icon-512.png": "icon-512.png",
  };
  const file = publicFiles[pathname] ? path.join(root, publicFiles[pathname]) : null;

  if (!file) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  fs.readFile(file, (error, contents) => {
    if (error) {
      response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Unable to read file");
      return;
    }

    response.writeHead(200, {
      "Content-Type": mimeTypes[path.extname(file)] || "application/octet-stream",
      "Cache-Control": "no-cache",
    });
    response.end(contents);
  });
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Slop bowl generator listening on port ${port}`);
});
