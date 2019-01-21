const express = require('express')
const app = express()
const port = process.env.PORT || 3002


app.get('/', (req, res) => {
    res.send('are we live?')
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})