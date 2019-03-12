import * as express from "express";
import HellowWordController from "../controllers/helloWorldController";

export class Routes {       
  public routes(app: express.Application): void {          
    app.route('/')
    .get(HellowWordController.hello);               
  }
}