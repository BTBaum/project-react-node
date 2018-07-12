// const createProxy = require('micro-proxy')
// const proxy = createProxy([
//   { "pathname": "/pricing", "method": ["GET"], "dest": "http://localhost:3001"},
//   { "pathname": "/subscription", "method": ["GET", "POST"], "dest": "http://localhost:3002"},
//   { "pathname": "/vehicle", "method": ["GET", "POST"], "dest": "http://localhost:3003"}
// ])

// module.exports = () => proxy.listen(9000, (err) => {
//   if (err) {
//     throw err
//   }
//   console.log(`> Ready on http://localhost:9000`)
// })