import { BikeInput } from "./../types/index";
import { Bike } from "../domain/model/bike";
import express, { Request, Response, Handler } from "express";
import raceService from "../service/race.service";

const raceRouter = express.Router();

raceRouter.get("/all", async (req: Request, res: Response) => {
  try {
    const races = await raceService.getAllRaces();
    res.status(200).json(races);
  } catch (error) {
    res.status(500).json({ status: "error", errorMessage: error.message });
  }
});

raceRouter.get("/get", async (req: Request, res: Response) => {
  const id = parseInt(req.query.id.toString());
  try {
    const race = await raceService.getRaceById(id);
    res.status(200).json(race);
  } catch (error) {
    res.status(500).json({ status: "error", errorMessage: error.message });
  }
});

raceRouter.post("/add", async (req: Request, res: Response) => {
  try {
    const race= await raceService.addRace(req.body);
    res
      .status(200)
      .json({ status: "success", message: "race is successfull added." });
  } catch (error) {
    res.status(500).json({ status: "error", errorMessage: error.message });
  }
});

raceRouter.delete("/delete", async (req: Request, res: Response) => {
  const id = parseInt(req.query.id.toString());
  try {
    await raceService.deleteRaceById(id);
    res.status(200).json({
      status: "success",
      message: `Race with id ${id} was successfully deleted.`,
    });
  } catch (error) {
    res.status(500).json({ status: "error", errorMessage: error.message });
  }
});

export { raceRouter };
