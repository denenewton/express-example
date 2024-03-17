import express from 'express'
const route = express.Router()


route.get('/:name', (req, res) => {
  res.json({
    name: req.params.name,
    dob: req.query.dob
  })
})

export default route