import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        icon: { type: String, required: true },
        color: { type: String, required: true },
        unlocked: { type: Boolean, default: false },
        completed: { type: Boolean,default: false },
        lessons: { type: Array, default: [] },        
    },
    {
        versionKey: false
    }
);

const modules = mongoose.model('modules', moduleSchema);

export { modules, moduleSchema };