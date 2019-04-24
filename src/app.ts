import * as express from "express";
import * as cors from "cors";
import * as bodyParser from 'body-parser';
import * as expressBearerToken from 'express-bearer-token';
import { Routes } from "./routes/Routes";
class App {

  public app: express.Application;
  public router: Routes = new Routes();
  
  constructor() {
      this.app = express();
      this.config();        
      this.router.routes(this.app);     
  }

  private config(): void{
    this.app.use(cors({
      origin: '*'
    }));
    this.app.use(bodyParser({extended: true}));
    this.app.use(bodyParser.json());
    this.app.use(expressBearerToken());
  }
}
export default new App().app;