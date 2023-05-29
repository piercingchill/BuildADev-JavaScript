# **<u>Request object methods</u>:**

1. `req.url`: Contains the requested URL.

   ```js
   const http = require('http');

   http.createServer((req, res) => {
     res.writeHead(200, { 'Content-Type': 'text/plain' });
     res.end(`Requested URL: ${req.url}`);
   }).listen(3000);
   ```

   This method retrieves the requested URL and returns it as a string in the response.

2. `req.method`: Contains the HTTP method of the request.

   ```js
   const http = require('http');

   http.createServer((req, res) => {
     res.writeHead(200, { 'Content-Type': 'text/plain' });
     res.end(`HTTP method used: ${req.method}`);
   }).listen(3000);
   ```

   This method retrieves the HTTP method of the request (e.g. GET, POST, etc.) and returns it as a string in the response.

3. `req.headers`: Contains the request headers.

   ```js
   const http = require('http');

   http.createServer((req, res) => {
     res.writeHead(200, { 'Content-Type': 'text/plain' });
     res.end(`Request headers: ${JSON.stringify(req.headers)}`);
   }).listen(3000);
   ```

   This method retrieves the request headers and returns them as a JSON string in the response.

4. `req.socket`: Contains information about the underlying socket.

   ```js
   const http = require('http');

   http.createServer((req, res) => {
     res.writeHead(200, { 'Content-Type': 'text/plain' });
     res.end(`Remote IP address: ${req.socket.remoteAddress}`);
   }).listen(3000);
   ```

   This method retrieves the remote IP address of the client and returns it as a string in the response.

5. `req.rawHeaders`: Contains the request headers as an array.

   ```js
   const http = require('http');
   
   http.createServer((req, res) => {
     res.writeHead(200, { 'Content-Type': 'text/plain' });
     res.end(`Request headers: ${JSON.stringify(req.rawHeaders)}`);
   }).listen(3000);
   ```

   This method retrieves the request headers as an array and returns them as a JSON string in the response.

# **<u>Request object methods</u>:**



Sure, here are five methods for the response object using only the built-in `http` module in Node.js:

1. `res.write()`: Sends the response body to the client.

   ```js
   const http = require('http');

   http.createServer((req, res) => {
     res.write('<html><body><h1>Hello, world!</h1></body></html>');
     res.end();
   }).listen(3000);
   ```

   This method sends the specified content as the response body to the client. The `res.end()` method is called without any arguments, indicating that the response body is complete.

2. `res.end()`: Signals that the response has ended.

   ```js
   const http = require('http');

   http.createServer((req, res) => {
     res.end('<html><body><h1>Hello, world!</h1></body></html>');
   }).listen(3000);
   ```

   This method signals that the response has ended, optionally sending the specified content as the final chunk of the response body to the client.

3. `res.setHeader()`: Sets the value of a single header field in the response.

   ```js
   const http = require('http');

   http.createServer((req, res) => {
     res.setHeader('Content-Type', 'text/html');
     res.write('<html><body><h1>Hello, world!</h1></body></html>');
     res.end();
   }).listen(3000);
   ```

   This method sets the value of the specified header field to the specified value. In this example, the `Content-Type` header is set to `text/html`.

4. `res.statusCode`: Sets the HTTP status code of the response.

   ```js
   const http = require('http');

   http.createServer((req, res) => {
     res.statusCode = 404;
     res.setHeader('Content-Type', 'text/plain');
     res.end('Page not found');
   }).listen(3000);
   ```

   This method sets the HTTP status code of the response to `404` and sends the specified string to the client as the response body.

5. `res.writeHeader()`: Sends the response header to the client with the specified status code.

   ```js
   const http = require('http');
   
   http.createServer((req, res) => {
     res.writeHeader(301, { Location: 'http://example.com' });
     res.end();
   }).listen(3000);
   ```

   This method sends the response header to the client with the specified status code (`301` in this case) and location header, which redirects the client to the specified URL (`http://example.com` in this case). The `res.end()` method is called without any arguments, indicating that the response body is empty.