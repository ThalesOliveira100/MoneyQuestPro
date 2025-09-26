import express from 'express';
import db from './config/dbConnect';
import routes from './routes';

db.on("error", console.log.bind("Erro durante a conexão com o banco de dados"));
db.once("open", () => {
    console.log("Conexão com o banco de dados realizada com sucesso");
});

const app = express();
app.use(express.json());
app.use('/v1', routes);

export default app;