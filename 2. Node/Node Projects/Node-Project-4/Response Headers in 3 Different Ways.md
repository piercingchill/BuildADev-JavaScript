



1. Using the `response.setHeader()` method:
  This method sets the value of a single response header. You can use it to set any header that you want to include in the response. 
  - In the following example, we're using `setHeader()` to set the `Content-Type` header to `text/plain`.

```
const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello, world!');
  res.end();
});

server.listen(3000);
```

2. Using the `response.writeHead()` method:

This method allows you to set multiple response headers at once. It takes two arguments: the status code, and an object containing the headers. 

- In the following example, we're using `writeHead()` to set the `Content-Type` header to `text/plain` and the `X-Custom-Header` header to `hello`.

```
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain', 'X-Custom-Header': 'hello'});
  res.write('Hello, world!');
  res.end();
});

server.listen(3000);
```

3. Using the `response.writeHeader()` method:
  This method is similar to `writeHead()`, but it only sets the status code. You can use it if you don't need to set any headers. 
  - In the following example, we're using `writeHeader()` to set the status code to `200`.	

```
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHeader(200);
  res.write('Hello, world!');
  res.end();
});

server.listen(3000);
```

