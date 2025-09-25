import mongoose, { Schema, Document } from "mongoose";

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface Quiz {
  questions: Question[];
}

interface Lesson extends Document {
  title: string;
  description: string;
  videoUrl: string;
  duration: number;
  xpReward: number;
  coinReward: number;
  quiz: Quiz;
  completed: boolean;
}

const QuestionSchema = new Schema<Question>({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  correctAnswer: { type: Number, required: true },
  explanation: { type: String }
});

const QuizSchema = new Schema<Quiz>({
  questions: { type: [QuestionSchema], required: true }
});

const LessonSchema = new Schema<Lesson>({
  title: { type: String, required: true },
  description: { type: String },
  videoUrl: { type: String, required: true },
  duration: { type: Number },
  xpReward: { type: Number, default: 0 },
  coinReward: { type: Number, default: 0 },
  quiz: { type: QuizSchema, required: true },
  completed: { type: Boolean, default: false }
});

export const lessons = mongoose.model<Lesson>("lessons", LessonSchema);
