const ws = require('ws')
const fs = require('fs')

let server = new ws.Server({ port: 3001 })

server.on('connection', (ws) => {
    // ws.send(JSON.stringify({
    //     contentType: 'application/json',
    //     date: Date.now()
    // }))

    console.log('client as connected')

    ws.on('close', (ws) => { })

    ws.on('message', (msg) => {
        let fileName = `uploads/${Date.now()}`
        fs.writeFile(`${__dirname}/../public/${fileName}`, msg, (err) => {
            if (err)
                ws.send(JSON.stringify({
                    contentType: 'application/json',
                    error: 'Server cannot save the file'
                }))
            else
                ws.send(JSON.stringify({
                    contentType: 'application/json',
                    fileName: `/${fileName}`,
                    error: ''
                }))
        })
    })
})