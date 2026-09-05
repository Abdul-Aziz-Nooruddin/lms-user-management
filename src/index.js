/**
 * LMS User Management Microservice
 * Author: Abdul Aziz Nooruddin
 */

const http = require('http');

const PORT = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/health' && req.method === 'GET') {
    res.writeHead(200);
    return res.end(JSON.stringify({ status: 'ok', service: 'lms-user-management', timestamp: new Date().toISOString() }));
  }

  if (req.url === '/api/v1/users' && req.method === 'GET') {
    res.writeHead(200);
    return res.end(JSON.stringify({
      users: [
        { id: 'usr_01', name: 'Abdul Aziz Nooruddin', role: 'SuperAdmin', email: 'abdulaziznoor9876@gmail.com' }
      ]
    }));
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: 'Endpoint not found' }));
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`[LMS User Management] Server listening on port ${PORT}`);
  });
}

module.exports = server;
