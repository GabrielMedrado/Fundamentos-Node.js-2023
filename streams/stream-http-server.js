import http, { request } from 'node:http'
import {Transform} from 'node:stream'

class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString()) * -1

        callback(null, Buffer.from(String(transformed)))
    }
}


const server = http.createServer(async (req, res) => {
    const buffers = []

    for await (const chunk of req) {
        buffers.push(chunk)
    }

    const fullStreamContent = Buffer.concat(buffer).toString()

    console.log(fullStreamContent)

    return request.end(fullStreamContent)


})

server.listen(3334)