/*
Imports and configuration
*/
    require('dotenv').config()

    const express = require('express')
    const path = require('path')
    const ejs = require('ejs')
//

/*
Server config.
*/
    const server = express()
    const port = process.env.PORT

    //=> Set views engine
    server.engine('html', ejs.renderFile)
    server.set('view engine', 'html')

    //=> Use path to add views
    server.set('views', __dirname + '/www')
    server.use(express.static(path.join(__dirname, 'www')))
//

/*
Launch server
*/
    server.listen(port, () => {
        console.log(`Server is running on  port: ${port}`)
    })
//