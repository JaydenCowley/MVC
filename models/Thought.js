const { DataTypes } = require("sequelize/types");

User.init(
    {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true, 
            allowNull: false, 
        }, 
       thought: {
        type: DataTypes.STRING,
        date_: date,
       }
    });
    module.exports = Thought;