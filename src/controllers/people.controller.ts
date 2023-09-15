import { Request, Response } from "express";
import { peopleService } from "../services/people.services";

async function getPeople(req: Request, res: Response) {

  const person = await peopleService.getPeople();
  res.send(person);
}

export const peopleController = { getPeople };
