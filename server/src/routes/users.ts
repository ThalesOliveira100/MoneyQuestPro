import express from 'express';
import userController from '../controllers/userController';

const routes = express.Router();

routes
    .get('/', userController.getAllUsers)
    .get('/:id', userController.getUserById)
    .post('/', userController.createUser)
    .put('/:id', userController.updateUser)
    .delete('/:id', userController.deleteUser);

export default routes;