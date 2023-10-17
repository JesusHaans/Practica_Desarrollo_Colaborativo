// Author: Jesus Haans Lopez Hernandez - jesuslopez@ciencias.unam.mx
// Author: Dueñitotito - elbilletudo@email.com
// Author: Developepe - developer_pepe@email.com

const http = require('http')
const server = http.createServer((peticion, respuesta) => {
  respuesta.writeHead(200,{'Content-Type':'text/plain'})
  respuesta.end("Hola mundo")
})
server.listen(3000)
