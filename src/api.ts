import * as express from "express";
import * as cors from "cors";
import * as bodyParser from 'body-parser';
import * as expressBearerToken from 'express-bearer-token';

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
  res.json("Hello world!");
});

app.use(cors({
  origin: '*'
}));
app.use(bodyParser({extended: true}));
app.use(bodyParser.json());
app.use(expressBearerToken());

app.get('/', router);

export default app;