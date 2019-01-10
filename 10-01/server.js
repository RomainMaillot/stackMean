/*
Imports and configuration
*/
    const express = require('express')
//

/*
Server config.
*/
    const server = express()
    const port = 9845
//

/*
Launch server
*/
    server.listen(port, () => {
        console.log(`Server is running on  port: ${port}`)
    })
//