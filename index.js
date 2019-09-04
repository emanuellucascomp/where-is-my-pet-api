const express = require('express')
const app = express()
const index = require('./routes/routes')

app.listen(3000, () => {
    console.log('Server running on port 3000')
})

app.use('/', index)