import { users } from "../models/user";
import { Request, Response } from "express";

class UserController {
    static async getAllUsers(req: Request, res: Response) {
        try {
            const allUsers = await users.find();
            res.status(200).json(allUsers);
            
        } catch (error: String | any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getUserById(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const user = await users.findById(id);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: "User not found" });
            }

        } catch (error: String | any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async createUser(req: Request, res: Response) {
        try {
            const newUser = new users(req.body);
            const savedUser = await newUser.save();
            res.status(201).json(savedUser);

        } catch (error: String | any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async updateUser(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const updatedUser = await users.findByIdAndUpdate(id, req.body, { new: true });
            if (updatedUser) {
                res.status(200).json(updatedUser);
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (error: String | any) {
            res.status(500).json({ message: error.message });
        }
    }
    
    static async deleteUser(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const deletedUser = await users.findByIdAndDelete(id);
            if (deletedUser) {
                res.status(200).json({ message: "User deleted successfully" });
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (error: String | any) {
            res.status(500).json({ message: error.message });
        }
    }
}


export default UserController;