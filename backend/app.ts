import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import * as bodyParser from "body-parser";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { userRouter } from "./controller/user.routes";
import { bikeRouter } from "./controller/bikes.routes";
import { trainingRouter } from "./controller/training.routes";
import { raceRouter } from "./controller/race.routes";

const app = express();
dotenv.config();
const port = process.env.APP_PORT || 3000;

var cors = require('cors');

const swaggerOpts = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Back-end for Avarts",
      version: "1.0.0",
    },
  },
  apis: ["./controller/*.routes.ts"],
};
const swaggerSpec = swaggerJSDoc(swaggerOpts);


app.use('*', cors());

app.use(cors({
    origin: 'http://your-react-frontend-domain.com',
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization'
}));



app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(bodyParser.json());
app.use("/user", userRouter);
app.use("/bike", bikeRouter);
app.use("/training", trainingRouter);
app.use("/race", raceRouter);

app.get("/status", (req, res) => {
  res.json({ message: "Back-end is running..." });
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port || 3000, () => {
  console.log(`Back-end is running on port ${port}.`);
});
