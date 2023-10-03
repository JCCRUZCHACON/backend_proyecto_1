const express = require('express');
const userRouter = require('./user.router');
const repairsRouter = require('./repairs.router');
const router = express.Router();

// colocar las rutas aquí
router.use("/users", userRouter)
router.use("/repairs", repairsRouter)

module.exports = router;