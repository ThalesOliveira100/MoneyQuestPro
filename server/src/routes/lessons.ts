import express from 'express';
import LessonController from '../controllers/lessonsController';

const routes = express.Router();

routes
    .get('/lessons', LessonController.getLessons)
    .get('/lessons/:id', LessonController.getLessonById)
    .post('/lessons', LessonController.createLesson)
    .put('/lessons/:id', LessonController.updateLesson)
    .delete('/lessons/:id', LessonController.deleteLesson);

export default routes;