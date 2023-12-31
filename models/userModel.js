module.exports=(sequelize,DataTypes)=>{
    const User=sequelize.define("users",{
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password:{    
            type:DataTypes.STRING,
            allowNull:false
        },
        isAdmin:{
            type:DataTypes.BOOLEAN
        },
        token:{
            type:DataTypes.STRING
        }
       
    })
    return User;
}