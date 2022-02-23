import * as bodyParser from "body-parser";
import * as express from "express";
import { Logger } from "../logger/logger";
import { EmployeeType } from "../types";

class Employee {
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
  }

  private routes(): void {
    // get list of employees
    this.express.get("/employees", (req, res) => {
      this.logger.info("url:=>" + req.url);
      res.json(this.employees);
    });
    // get employee detail
    this.express.get("/employees/:id", (req, res) => {
      this.logger.info("url:=>" + req.url);

      const filteredEmployee = this.employees.filter(
        (employee) => +req.params.id === employee.id
      );
      res.json(filteredEmployee);
    });

    // add employee
    this.express.post("/employee", (req, res, next) => {
      this.logger.info("url:=>" + req.url);
      this.employees.push(...[req.body.employee]);

      res.json(this.employees);
    });
  }
}
export default new Employee().express;
