const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
   const Categories = await Category.findAll({
    include: [{ model: Product }] 
  });
   res.json(Categories);
  }
  catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
    include: [{ model: Product }],
  });
  if (!category) {
    res.status(404).json({ message: 'No category found with this id!' });
    return;
  }
  res.json(category);
  }
catch (err) {
  res.status(500).json(err);
}
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
  const category = await Category.create(req.body);
  res.status(200).json(category);
  // create a new category
  }
  catch (err) {
    res.status(400).json(err);
  }

});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
  const category = await Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  if (!category) {
    res.status(404).json({ message: 'No category found with this id!' });
    return;
  }
  res.json(category);
}
  catch (err) {
    res.status(500).json(err);
  }
}
);


router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
  const category = await Category.destroy({
    where: {
      id: req.params.id,
    },

  });
  if (!category) {
    res.status(404).json({ message: 'No category found with this id!' });
    return;
  }
  res.json(category);
}
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
