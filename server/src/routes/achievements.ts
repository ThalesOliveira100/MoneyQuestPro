import express from 'express';
import AchivementController from '../controllers/achievementsController';

const routes = express.Router();

routes
    .get('/', AchivementController.getAchievements)
    .get('/:id', AchivementController.getAchievementById)
    .post('/', AchivementController.createAchievement)
    .put('/:id', AchivementController.updateAchievement)
    .delete('/:id', AchivementController.deleteAchievement);

export default routes;