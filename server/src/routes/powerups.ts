import express from 'express';
import PowerUpController from '../controllers/powerUpController';

const routes = express.Router();

routes
    .get('v1/powerups', PowerUpController.getAllPowerUps)
    .get('v1/powerups/:id', PowerUpController.getPowerUpById)
    .post('v1/powerups', PowerUpController.createPowerUp)
    .put('v1/powerups/:id', PowerUpController.updatePowerUp)
    .delete('v1/powerups/:id', PowerUpController.deletePowerUp);

export default routes;