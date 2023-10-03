const catchError = require('../utils/catchError');
const Repairs = require('../models/Repairs');

const getAll = catchError(async(req, res) => {
    const results = await Repairs.findAll();
    return res.status(200).json(results);
});

const create = catchError(async(req, res) => {
    const result = await Repairs.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Repairs.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Repairs.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Repairs.update(req.body,{
     where: {id}, returning: true,
     });
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});


module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}