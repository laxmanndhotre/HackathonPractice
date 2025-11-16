const express = require('express')

const app = express()

app.listen(4000, 'localhost', ()=> {
    console.log('Server running at Port 4000')
})