import express from 'express';
import ModuleController from '../controllers/modulesController';

const routes = express.Router();

routes
    .get('/modules', ModuleController.getModules)
    .get('/modules/:id', ModuleController.getModuleById)
    .post('/modules', ModuleController.createModule)
    .put('/modules/:id', ModuleController.updateModule)
    .delete('/modules/:id', ModuleController.deleteModule);

export default routes;