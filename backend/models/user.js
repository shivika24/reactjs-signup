module.exports = (sequelize, Sequelize) => {
const User = sequelize.define('tutorial', { 
    sno:{ 
        type:Sequelize.INTEGER,  
        autoIncrement:true, 
        allowNull:false, 
        primaryKey:true
    }, 
    firstname: { type: Sequelize.STRING, allowNull:false, length:20 },
    lastname: { type: Sequelize.STRING, allowNull:false, length:20 }, 
    age: { type:Sequelize.INTEGER, allowNull:false, length:3},
    place: { type: Sequelize.STRING, allowNull:false, length:10 },
    email: { type: Sequelize.STRING, allowNull:false, length:50 },
    password: { type: Sequelize.STRING, allowNull:false, length:100 },
    myDate: { type: Sequelize.DATE,  
            defaultValue: Sequelize.NOW }, 
  
     // Timestamps 
     createdAt: Sequelize.DATE, 
     updatedAt: Sequelize.DATE, 
}) 

return User;
};