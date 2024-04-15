import { createServer } from 'node:http'

const server = createServer ((request, response) => {
    return response.write('oi')
    
    return response.end()
})

server.listen(3333)