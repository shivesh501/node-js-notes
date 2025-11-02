import {v4 as uuidv4} from "uuid";

let users = [{
    name : "john",
    age : "24",
    id : uuidv4()
},{
    name : "bob",
    age : "25",
    id: uuidv4()
},{
    name : "Alex",
    age : "26",
    id : uuidv4()
},];

export const getAllUsers = (req,res)=>{
    res.json(users);
};

export const createUser = (req, res)=>{
    const body = req.body;
    console.log(body.name, body.age);
     users.push({
        name : body.name,
        age : body.age,
        id : uuidv4()
     })
     res.json(users);
}

export const getOneUser = (req,res)=>{
    const userId = req.params.id; // to access the :id parameter in the request link
    const user = users.find((user)=>{
        return user.id === userId;///  userId becomes a string.. hence we convert it to a number
    });
    res.json(user)};

export const deleteUser = (req,res)=>{
    const userID = req.params.id;
    users = users.filter((user)=>{
        return user.id !== userID;
    })
    res.json(users);
};

export const updateUser = (req,res) => {
    const userID = req.params.id;
    const temp = req.body;

    users = users.map((user) => {
        if(user.id == userID)
        {
            return {
                name : temp.name,
                age : temp.age,
                id : userID
            }
        }
        return user;
    })
    res.json(users)
};