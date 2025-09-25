import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        icon: { type: String, required: true },
        xpReward: { type: Number, default: 0 },
        coinReward: { type: Number, default: 0 },
        unlocked: { type: Boolean, default: false },
    },
    {
        versionKey: false
    }
);

const achievements = mongoose.model('achievements', achievementSchema);

export { achievements, achievementSchema };