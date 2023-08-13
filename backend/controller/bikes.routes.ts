import { BikeInput } from "./../types/index";
import { Bike } from "../domain/model/bike";
import express, { Request, Response, Handler } from "express";
import bikeService from "../service/bike.service";

const bikeRouter = express.Router();

bikeRouter.get("/all", async (req: Request, res: Response) => {
  try {
    const bikes = await bikeService.getAllBikes();
    res.status(200).json(bikes);
  } catch (error) {
    res.status(500).json({ status: "error", errorMessage: error.message });
  }
});

bikeRouter.get("/get", async (req: Request, res: Response) => {
  const id = parseInt(req.query.id.toString());
  try {
    const bike = await bikeService.getBikeById(id);
    res.status(200).json(bike);
  } catch (error) {
    res.status(500).json({ status: "error", errorMessage: error.message });
  }
});

bikeRouter.post("/add", async (req: Request, res: Response) => {
  try {
    const bike= await bikeService.addBike(req.body);
    res
      .status(200)
      .json({ status: "success", message: "bike is successfull added." });
  } catch (error) {
    res.status(500).json({ status: "error", errorMessage: error.message });
  }
});

bikeRouter.delete("/delete", async (req: Request, res: Response) => {
  const id = parseInt(req.query.id.toString());
  try {
    await bikeService.deleteBikeById(id);
    res.status(200).json({
      status: "success",
      message: `Bike with id ${id} was successfully deleted.`,
    });
  } catch (error) {
    res.status(500).json({ status: "error", errorMessage: error.message });
  }
});
bikeRouter.put("/update", async (req: Request, res: Response) => {
  const bike = req.body.bike;
  try {
    await bikeService.updateBike(bike);
    res
      .status(200)
      .json({ status: "succes", message: "bike is succesfully updated." });
  } catch (error) {
    res.status(500).json({ status: "error", errorMessage: error.message });
  }
});

bikeRouter.get("/yours", async (req: Request, res: Response) => {
  const id = parseInt(req.query.id.toString());
  console.log(id + " dit is het id");
  try {
    const bikes = await bikeService.getBikesOfUser(id);
    res.status(200).json(bikes);
  } catch (error) {
    res.status(500).json({ status: "error", errorMessage: error.message });
  }
});

export { bikeRouter };
