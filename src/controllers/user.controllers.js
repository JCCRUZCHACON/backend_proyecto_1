const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
                                    //{include : [user]}
    const results = await User.findAll();
    return res.status(200).json(results);
});

const create = catchError(async(req, res) => {
    const { name, email, password, role } = req.body
    const result = await User.create({
        name, email, password, role
    });
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await User.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await User.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const {name, email} = req.body
    const result = await User.update({
        name,
        email
    }, { where: {id}, returning: true });
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