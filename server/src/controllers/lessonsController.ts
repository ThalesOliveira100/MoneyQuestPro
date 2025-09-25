import { lessons } from '../models/lesson';
import { Request, Response } from 'express';

class LessonController {
    static async getLessons(req: Request, res: Response) {
        try {
            const allLessons = await lessons.find();
            res.status(200).json(allLessons);

        } catch (error: String | any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getLessonById(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const lesson = await lessons.findById(id);
            if (lesson) {
                res.status(200).json(lesson);
            } else {
                res.status(404).json({ message: "Lesson not found" });
            }
        } catch (error: String | any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async createLesson(req: Request, res: Response) {
        try {
            const newLesson = new lessons(req.body);
            const savedLesson = await newLesson.save();
            res.status(201).json(savedLesson);
        } catch (error: String | any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async updateLesson(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const updatedLesson = await lessons.findByIdAndUpdate(id, req.body, { new: true });
            if (updatedLesson) {
                res.status(200).json(updatedLesson);
            } else {
                res.status(404).json({ message: "Lesson not found" });
            }
        } catch (error: String | any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async deleteLesson(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const deletedLesson = await lessons.findByIdAndDelete(id);
            if (deletedLesson) {
                res.status(200).json({ message: "Lesson deleted successfully" });
            } else {
                res.status(404).json({ message: "Lesson not found" });
            }
        } catch (error: String | any) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default LessonController;