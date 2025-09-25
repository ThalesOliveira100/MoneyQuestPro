import express from 'express';
import AchivementController from '../controllers/achievementsController';

const routes = express.Router();

routes
    .get('/achievements', AchivementController.getAchievements)
    .get('/achievements/:id', AchivementController.getAchievementById)
    .post('/achievements', AchivementController.createAchievement)
    .put('/achievements/:id', AchivementController.updateAchievement)
    .delete('/achievements/:id', AchivementController.deleteAchievement);

export default routes;