import { Request, Response } from "express";
import { powerups } from "../models/powerup";

class PowerUpController {
    static async getAllPowerUps(req: Request, res: Response) {
        try {
            const allPowerUps = await powerups.find();
            res.status(200).json(allPowerUps);

        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    static async getPowerUpById(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const powerUp = await powerups.findById(id);

            if (powerUp) {
                res.status(200).json(powerUp);
            } else {
                res.status(404).json({ message: "Power-up not found" });
            }

        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    static async createPowerUp(req: Request, res: Response) {
        try {
            const newPowerUp = new powerups(req.body);
            const savedPowerUp = await newPowerUp.save();
            res.status(201).json(savedPowerUp);
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    static async updatePowerUp(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const updatedPowerUp = await powerups.findByIdAndUpdate(id, req.body, { new: true });
            if (updatedPowerUp) {
                res.status(200).json(updatedPowerUp);
            } else {
                res.status(404).json({ message: "Power-up not found" });
            }
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    static async deletePowerUp(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const deletedPowerUp = await powerups.findByIdAndDelete(id);
            if (deletedPowerUp) {
                res.status(200).json({ message: "Power-up deleted successfully" });
            } else {
                res.status(404).json({ message: "Power-up not found" });
            }
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }
}

export default PowerUpController;