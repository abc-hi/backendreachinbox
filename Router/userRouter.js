import express from 'express';
import { loginUser, oneboxfn, registerUser } from '../Controller/userController.js';


const router= express.Router()



//http://localhost:4000/api/user/register
router.post('/register', registerUser)

//http://localhost:4000/api/user/login

router.post('/login', loginUser)

//http://localhost:4000/api/user/onebox
router.post('/onebox', oneboxfn)




export default router;