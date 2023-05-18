import express, { Application } from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

// Routes
import userRoute from './app/Modules/User/User.Route';

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use("/api/v1/user", userRoute)

export default app;