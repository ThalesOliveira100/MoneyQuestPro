// Padrão barrel
import users from "./users";
import modules from "./modules";
import lessons from "./lessons";
import achievements from "./achievements";
import powerups from "./powerups";
import { Router } from "express";

const routes = Router();

// rota raiz
routes.get("/", (req, res) => {
  res.status(200).send("Welcome to MoneyQuestPro API - Version 1.0.0");
});

// health check
routes.get("/api/health", (req, res) => {
  res.json({ status: "API is running!" });
});

// sub-rotas
routes.use('/users', users);
routes.use('/modules', modules);
routes.use('/lessons', lessons);
routes.use('/achievements', achievements);
routes.use('/powerups', powerups);

export default routes;