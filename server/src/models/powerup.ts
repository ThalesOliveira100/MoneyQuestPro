import mongoose from "mongoose";

const powerupSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        icon: { type: String, required: true },
        price: { type: Number, required: true },
        effect: { type: String, required: true },
        quantity: { type: Number, default: 0 },
    },
    {
        versionKey: false
    }
);

const powerups = mongoose.model('powerups', powerupSchema);

export { powerups, powerupSchema };