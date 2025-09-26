import express from 'express';
import LessonController from '../controllers/lessonsController';

const routes = express.Router();

routes
    .get('/', LessonController.getLessons)
    .get('/:id', LessonController.getLessonById)
    .post('/', LessonController.createLesson)
    .put('/:id', LessonController.updateLesson)
    .delete('/:id', LessonController.deleteLesson);

export default routes;