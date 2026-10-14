/**
 * Copyright 2026 The container-sample Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const http = require('node:http');

const app = http.createServer((req, res) => {
  const path = req.url.split('?')[0];
  if ((req.method === 'GET' || req.method === 'HEAD') && path === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from AppRun!\n');
    return;
  }
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found\n');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
