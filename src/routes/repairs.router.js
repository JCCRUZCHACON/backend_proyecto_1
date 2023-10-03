const { getAll, create, getOne, remove, update } = require('../controllers/repairs.controllers');
const express = require('express');

const repairsRouter = express.Router();

repairsRouter.route('/')
    .get(getAll)
    .post(create);

repairsRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .patch(update);

module.exports = repairsRouter;