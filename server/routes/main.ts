import * as bodyParser from "body-parser";
import * as express from "express";
import { Logger } from "../logger/logger";
import Employee from "./employee";
import { EmployeeType } from "../types";

class Routes {
  public express: express.Application;
  public logger: Logger;

  public employees: EmployeeType[];

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.logger = new Logger();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    // user route
    this.express.use("/", Employee);
  }
}

export default new Routes().express;
