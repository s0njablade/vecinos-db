const express = require('express')
const queries = require('./queries')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3002

app.use(bodyParser.json())
app.use(cors())

app.options('*', cors())

app.get('/', (req,res) =>{
    queries.getAllBusinesses().then(business => res.send(business))
})

app.get('/:id', (req, res) =>{
    queries.getBusinessById(req.params.id).then(business => res.send(business))
})

app.post('/', (req,res) => {
    queries.createBusiness(req.body).then(business => res.send(business[0]))
})

app.put('/:id', (req,res) => {
    queries.updateBusiness(req.params.id, req.body).then(updatedBusiness => res.send(updatedBusiness))
})

app.delete('/:id', (req,res) => {
    queries.deleteBusiness(req.params.id).then(res.sendStatus(204))
})
 
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(port, () => {
    console.log(`running on port: ${port}`)
})


