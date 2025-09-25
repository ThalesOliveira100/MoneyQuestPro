import { modules } from "../models/module";
import { Request, Response } from "express";

class ModuleController {
    static async getModules(req: Request, res: Response) {
        try {
            const allModules = await modules.find();
            res.status(200).json(allModules);

        } catch (error: String | any) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    static async getModuleById(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const module = await modules.findById(id);
            if (module) {
                res.status(200).json(module);
            } else {
                res.status(404).json({ message: "Module not found" });
            }
        } catch (error: String | any) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    static async createModule(req: Request, res: Response) {
        try {
            const newModule = new modules(req.body);
            const savedModule = await newModule.save();
            res.status(201).json(savedModule);
        } catch (error: String | any) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    static async updateModule(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const updatedModule = await modules.findByIdAndUpdate(id, req.body, { new: true });
            if (updatedModule) {
                res.status(200).json(updatedModule);
            } else {
                res.status(404).json({ message: "Module not found" });
            }
        } catch (error: String | any) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    static async deleteModule(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const deletedModule = await modules.findByIdAndDelete(id);
            if (deletedModule) {
                res.status(200).json({ message: "Module deleted successfully" });
            } else {
                res.status(404).json({ message: "Module not found" });
            }
        } catch (error: String | any) {
            res.status(500).json({ message: (error as Error).message });
        }
    }
}

export default ModuleController;