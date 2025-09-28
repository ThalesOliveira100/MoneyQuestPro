
export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  avatar: string;
  level: number;
  xp: number;
  totalxp: number;
  coins: number;
  streak: number;
  completedModules: string[];
  completedLessons: string[];
  achievements: Achievement[];
  powerUps: PowerUp[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  lessons: Lesson[];
  unlocked: boolean;
  completed: boolean;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  duration: number;
  xpReward: number;
  coinReward: number;
  quiz: Quiz;
  completed: boolean;
}

export interface Quiz {
  id: string;
  questions: Question[];
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  xpReward: number;
  coinReward: number;
  unlocked: boolean;
}

export interface PowerUp {
  id: string;
  name: string;
  description: string;
  icon: string;
  price: number;
  effect: string;
  quantity: number;
}

export interface RankingUser {
  id: string;
  name: string;
  avatar: string;
  xp: number;
  level: number;
  position: number;
}
