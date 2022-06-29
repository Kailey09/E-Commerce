const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: {
      model: Product
    }
  })
  .then(function(ProductTag) {
    res.json(ProductTag)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id:req.params.id
    },
    include: {
      model: Product
    }
  })
  .then(function(ProductTag){
    res.json(ProductTag)
  })
  .catch(err => {
    console.log(err);
    res.status(500)(err);
  });
});

router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then(function(productTag){
    res.json(productTag)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(function(productTag){
    res.json(productTag)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id:req.params
    }
  })
  .then(function(productTag) {
    res.json(productTag)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
