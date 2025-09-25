import { achievements } from "../models/achievement";
import { Request, Response } from "express";

class AchivementController {

    static async getAchievements(req: Request, res: Response) {
        try {
            const allAchievements = await achievements.find();
            res.status(200).json(allAchievements);
        } catch (error: String | any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getAchievementById(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const achievement = await achievements.findById(id);
            if (achievement) {
                res.status(200).json(achievement);
            } else {
                res.status(404).json({ message: "Achievement not found" });
            }
        } catch (error: String | any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async createAchievement(req: Request, res: Response) {
        try {
            const newAchievement = new achievements(req.body);
            const savedAchievement = await newAchievement.save();
            res.status(201).json(savedAchievement);
        } catch (error: String | any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async updateAchievement(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const updatedAchievement = await achievements.findByIdAndUpdate(id, req.body, { new: true });
            if (updatedAchievement) {
                res.status(200).json(updatedAchievement);
            } else {
                res.status(404).json({ message: "Achievement not found" });
            }
        } catch (error: String | any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async deleteAchievement(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const deletedAchievement = await achievements.findByIdAndDelete(id);
            if (deletedAchievement) {
                res.status(200).json({ message: "Achievement deleted successfully" });
            } else {
                res.status(404).json({ message: "Achievement not found" });
            }
        } catch (error: String | any) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default AchivementController;