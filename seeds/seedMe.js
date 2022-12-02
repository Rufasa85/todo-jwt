const sequelize = require('../config/connection');
const {User,Todo} = require("../models")
const seedMe = async ()=>{
    await sequelize.sync({force:true})
    const users = [
        {
            email:"joe@joe.joe",
            password:"password"
        },
        {
            email:"shiva@joe.joe",
            password:"yayForCrunchies"
        },
        {
            email:"bahamut@joe.joe",
            password:"chirpchirp"
        }
    ]
    const todos = [
        {
            task:"Be the very best, like no one ever was",
            priority:"high",
            UserId:1
        },
        {
            task:"Catch 'em all!",
            priority:"high",
            UserId:1
        },
        {
            task:"take a nap",
            priority:"med",
            UserId:2
        },

    ]
    try{

        await User.bulkCreate(users,{
            individualHooks:true
        })
        await Todo.bulkCreate(todos)
    }catch(err){
        throw err
    }
    process.exit(0);
}
seedMe()