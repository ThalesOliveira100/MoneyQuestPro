import express, { type Request, type Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares essenciais
app.use(cors()); // Habilita o CORS para todas as rotas
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Money Quest PRO')
})

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'API is running!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});


// Mock data (substitua por integração com banco de dados futuramente)
let users: any[] = [];
let powerUps: any[] = [];
let achievements: any[] = [];
let modules: any[] = [];
let weeklyRanking: any[] = [];

// USERS
app.get('/api/v1/users', (req: Request, res: Response) => {
  res.json(users);
});
app.post('/api/v1/users', (req: Request, res: Response) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});

// POWER-UPS
app.get('/api/v1/power-ups', (req: Request, res: Response) => {
  res.json(powerUps);
});
app.post('/api/v1/power-ups', (req: Request, res: Response) => {
  const powerUp = req.body;
  powerUps.push(powerUp);
  res.status(201).json(powerUp);
});

// ACHIEVEMENTS
app.get('/api/v1/achievements', (req: Request, res: Response) => {
  res.json(achievements);
});
app.post('/api/v1/achievements', (req: Request, res: Response) => {
  const achievement = req.body;
  achievements.push(achievement);
  res.status(201).json(achievement);
});

// MODULES
app.get('/api/v1/modules', (req: Request, res: Response) => {
  res.json(modules);
});
app.post('/api/v1/modules', (req: Request, res: Response) => {
  const module = req.body;
  modules.push(module);
  res.status(201).json(module);
});

// WEEKLY RANKING
app.get('/api/v1/weekly-ranking', (req: Request, res: Response) => {
  res.json(weeklyRanking);
});
app.post('/api/v1/weekly-ranking', (req: Request, res: Response) => {
  const ranking = req.body;
  weeklyRanking.push(ranking);
  res.status(201).json(ranking);
});

