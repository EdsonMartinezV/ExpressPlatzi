const express = require('express')
const router = express.Router()
const faker = require('faker')

router.get('/', (req, res) => {
  const products = []
  const { size } = req.query
  const limit = size || 10

  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })
  }
  res.json(products)
})

router.get('/filter', (req, res) => {
  res.send('Specific routes before dinamic ones (/products/some)')
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    id,
    name: 'Product 1',
    price: 100
  })
})

module.exports = router
