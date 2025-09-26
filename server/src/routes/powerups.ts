import express from 'express';
import PowerUpController from '../controllers/powerUpController';

const routes = express.Router();

routes
    .get('/', PowerUpController.getAllPowerUps)
    .get('/:id', PowerUpController.getPowerUpById)
    .post('/', PowerUpController.createPowerUp)
    .put('/:id', PowerUpController.updatePowerUp)
    .delete('/:id', PowerUpController.deletePowerUp);

export default routes;