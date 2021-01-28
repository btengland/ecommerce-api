const products = require('../products.json')

const getProduct = (req, res) => {
    let item = products.find(elem => elem.id === +req.params.id)
    if(!item){
        return res.status(500).send("Item not in list")
    } else {
        res.status(200).send(item)
    }
}

module.exports = getProduct