// Padrão barrel
import Express from "express";
import users from "./users";
import modules from "./modules";
import lessons from "./lessons";
import achievements from "./achievements";
import powerups from "./powerups";

const routes = (app:Express.Express) => {
    app.route("/v1").get((req, res) => {
        res.status(200).send({ message: "Welcome to MoneyQuestPro API - Version 1.0.0" });
    });

    app.get('/v1/api/health', (req, res) => {
        res.json({ status: 'API is running!' });
    });

    app.use(
        Express.json(),
        users,
        modules,
        lessons,
        achievements,
        powerups
    );
};

export default routes;