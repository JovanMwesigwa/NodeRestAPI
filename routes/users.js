import express from 'express';
import {createUser, getUser, deleteUser, editUser} from '../controllers/users.js'

const router = express.Router();

let users = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        age: 25
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Doe',
        age: 24
    }
]

router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', createUser)

router.get('/:id', getUser)

router.delete('/:id', deleteUser)

router.patch('/:id', editUser)

export default router;