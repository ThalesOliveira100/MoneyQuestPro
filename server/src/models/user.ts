import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        avatar: { type: String, default: '🤑' },
        level: { type: Number, default: 0 },
        xp: { type: Number, default: 0 },
        totalxp: { type: Number, default: 0 },
        streak: { type: Number, default: 0 },
        completedModules: { type: Array, default: [] },
        completedLessons: { type: Array, default: [] },
        achievements: { type: Array, default: [] },
        powerups: { type: Array, default: [] },
    },
    {
        versionKey: false
    }
);

const users = mongoose.model('users', userSchema);

export { users, userSchema };