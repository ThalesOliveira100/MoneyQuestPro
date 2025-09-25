import express from 'express';
import userController from '../controllers/userController';

const routes = express.Router();

routes
    .get('v1/users', userController.getAllUsers)
    .get('v1/users/:id', userController.getUserById)
    .post('v1/users', userController.createUser)
    .put('v1/users/:id', userController.updateUser)
    .delete('v1/users/:id', userController.deleteUser);

export default routes;