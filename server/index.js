const express = require ('express')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')
const app = express()
app.use(express.json());


const port = 5040

app.get('/api/products', getProducts)
app.get('/api/products/:id', getProduct)

app.listen(port, () => {
    console.log(`Server listening to port: ${port}`)
})