import express from 'express';
import db from './config/dbConnect';
import routes from './routes';
import cors from 'cors';

// Configuração do CORS
const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173', 'http://127.0.0.1:5500', 'http://localhost:8080' ,'https://moneyquestpro.vercel.app'];

db.on("error", console.log.bind("Erro durante a conexão com o banco de dados"));
db.once("open", () => {
    console.log("Conexão com o banco de dados realizada com sucesso");
});

const app = express();
app.use(cors({
    origin: function (origin, callback) {
        // Permitir requisições sem origem (como Postman)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'O CORS policy para este site não permite acesso a partir desta origem.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

app.use(express.json());
app.use('/v1', routes);

export default app;