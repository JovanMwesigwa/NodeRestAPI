import { uuid } from 'uuidv4';

export const createUser = (req, res) => {

    const id = uuid();

    const newUser = {id,...req.body}

    users.push(newUser)

    res.send(`User ${newUser.firstName} has been added successfully.`);
}

export const getUser = (req, res) => {

    const { id } = req.params;

    const foundUser = users.find(user => user.id == id);

    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params.id;

    users = users.filter(user => user.id !== id);

    res.send(users)
}

export const editUser = (req, res) => {
    const { id } = req.params;

    const patchedUser = users.find(user => user.id == id)

    const { firstName, lastName, age } = req.body;

    console.log(patchedUser)

    res.send(`User ${patchedUser.firstName} has been edited`)
}