import * as bodyParser from "body-parser";
import * as express from "express";
import { Logger } from "./logger/logger";
import Routes from "./routes/main";
import { EmployeeType } from "./types";

class App {
  public express: express.Application;
  public logger: Logger;

  public employees: EmployeeType[];

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.employees = [];
    this.logger = new Logger();
  }

  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(express.static(process.cwd() + "/my-app/dist/"));
  }

  private routes(): void {
    this.express.get("/", (req, res) => {
      res.send(process.cwd() + "/client/dist/index.html");
    });

    this.express.use("/api", Routes);

    this.express.use("*", (req, res) => {
      res.send("Use the right url");
    });
  }
}

export default new App().express;
