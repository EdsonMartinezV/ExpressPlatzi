const express = require('express')
const ProductsService = require('./../services/products.service')

const router = express.Router()
const service = new ProductsService()

router.get('/', (req, res) => {
  const products = service.find()
  res.json(products)
})

router.get('/filter', (req, res) => {
  res.send('Specific routes before dinamic ones (/products/some)')
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const product = service.findOne(id)
  res.json(product)
})

router.post('/', (req, res) => {
  const body = req.body
  const newProduct = service.create(body)
  res.status(201).json(newProduct)
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body
  const updatedProduct = service.update(id, body)
  res.json(updatedProduct)
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const deletedProductId = service.delete(id)
  res.json(deletedProductId)
})

module.exports = router
