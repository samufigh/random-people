import { Router } from "express";
import { peopleController } from "../controllers/people.controller";

const peopleRouter = Router();

peopleRouter.get("/people", peopleController.getPeople);

export default peopleRouter;
