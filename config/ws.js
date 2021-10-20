const ws = require('ws')
const fs = require('fs')
const {UserModel} = require('./db')

let server = new ws.Server({ port: 3001 })

server.on('connection', (ws) => {
    // ws.send(JSON.stringify({
    //     contentType: 'application/json',
    //     date: Date.now()
    // }))

    let uploadAuthorized = false

    ws.on('close', (ws) => { })

    ws.on('message', (msg) => {
        if (uploadAuthorized) {
            let fileName = `uploads/${Date.now()}`
            fs.writeFile(`${__dirname}/../public/${fileName}`, msg, (err) => {
                if (err)
                    ws.send(JSON.stringify({
                        contentType: 'application/json',
                        type: "fileResult",
                        error: 'Server cannot save the file'
                    }))
                else
                    ws.send(JSON.stringify({
                        contentType: 'application/json',
                        type: "fileResult",
                        fileName: `/${fileName}`,
                        error: ''
                    }))
                ws.close()
            })
        }else{
            let decoder = new TextDecoder('utf-8')
            let decodeMsg = decoder.decode(msg)
            UserModel.findOne({_id: decodeMsg}, (err, user)=>{
                if(err){
                    ws.send(JSON.stringify({
                        contentType: 'application/json',
                        type: "access",
                        success: false
                    }))
                    ws.close()
                    return false
                }
                if(user._id == decodeMsg) uploadAuthorized = true
                ws.send(JSON.stringify({
                        contentType: 'application/json',
                        type: "access",
                        success: uploadAuthorized
                }))
            })
        }
    })
})