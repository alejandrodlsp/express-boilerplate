/* eslint-disable @typescript-eslint/no-explicit-any */
import express from "express";
import bodyParser from "body-parser";
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { Routes } from "./routes";

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    app.use(bodyParser.json());

    registerRoutes(app);

    app.listen(3000);

    console.log(
      "Express server has started on port 3000.",
    );
  })
  .catch((error) => console.log(error));

function registerRoutes(app: express.Express) {
  Routes.forEach((route) => {
    (app as any)[route.method](
      route.route,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
      async (req: Request, res: Response, next: Function) => {
        try {
          await new (route.controller as any)()[route.action](req, res, next);
        } catch (err) {
          next(err);
        }
      },
    );
  });
}
