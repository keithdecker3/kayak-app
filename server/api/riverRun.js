const express = require('express')

const router = express.Router()

const queries = require('../db/riverRunQueries')

router.get('/', (req, res) => {
  queries.getAll().then(runs => {
    res.json(runs)
  })
})

router.get('/:river',  (req, res) => {
  queries.getOne(req.params.river).then(river => {
    if(river) {
      res.json(river)
    } else {
      next()
    }
  })
})

router.post('/', (req, res, next) => {
  queries.create(req.body).then(runs => {
    res.json(runs[0])
  })
})

router.put('/:id', (req,res,next) => {
  queries.update(req.params.id, req.body).then(runs => {
  res.json(runs[0])
  })
})

router.delete('/:id', (req, res) => {
  queries.delete(req.params.id).then(() =>
    res.json({
    deleted:true
    })
  )
})

module.exports = router