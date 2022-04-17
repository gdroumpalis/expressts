import express, {Request, Response} from "express";
import {RegisterRoutes} from "../build/routes";
import swaggerUi from "swagger-ui-express";
import winston, {transports} from "winston";
import expressWinston from 'express-winston';

export const app = express();

app.use(express.json());

app.use("/api/swagger/ui", swaggerUi.serve, async (_req: Request, res: Response) => {
    return res.send(
        swaggerUi.generateHTML(await import("../build/swagger.json"))
    );
});
app.use(expressWinston.logger({
    transports: [new transports.Console()],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.timestamp()
    ),
}));

RegisterRoutes(app);

