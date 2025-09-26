import express from 'express';
import ModuleController from '../controllers/modulesController';

const routes = express.Router();

routes
    .get('/', ModuleController.getModules)
    .get('/:id', ModuleController.getModuleById)
    .post('/', ModuleController.createModule)
    .put('/:id', ModuleController.updateModule)
    .delete('/:id', ModuleController.deleteModule);

export default routes;