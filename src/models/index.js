const Repairs = require("./Repairs")
const User = require("./User")

//un pais tiene muchos usuarios
User.hasMany(Repairs)
//un usuario pertenece a un pais
Repairs.belongsTo(User)

