import express,{Router} from "express";
import {getAllUsers,createUser,getOneUser,deleteUser,updateUser} from "../controllers/user.js"

const router = express.Router();


router.get("/users",getAllUsers);
router.post("/users", createUser);
//:id means id is a dynamic value.
router.get("/users/:id", getOneUser);
//trying to delete a user
router.delete('/users/:id', deleteUser)
router.put('/users/:id', updateUser)

export default router;