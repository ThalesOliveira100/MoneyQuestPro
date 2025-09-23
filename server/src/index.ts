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


// /api/v1/users
// /api/v1/power-ups
// /api/v1/achievements
// /api/v1/modules
// /api/v1/weekly-ranking
