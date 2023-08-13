/**
 * @swagger
 *   components:
 *    schemas:
 *      training:
 *          type: object
 *          properties:
 *            id:
 *              type: number
 *              description: Id of the user
 *            firstname:
 *              type: string
 *              description: firstname of the user.
 *            lastname:
 *              type: string
 *              description: lastname of the user.
 *            birth_date:
 *              type: date
 *              description: date of the user.
 *            password:
 *              type: string
 *              description: password of the user.
 *            country:
 *              type: string
 *              description: country of the user.
 *            city:
 *              type: string
 *              description: city of the user.
 *            type of rider:
 *              type: string
 *              description: type of rider of the user.
 */
import { TrainingComment } from "../domain/model/trainingComment";

import { TrainingInput } from "../types/index";
import { Training } from "../domain/model/training";
import express, { Request, Response, Handler } from "express";
import trainingService from "../service/training.service";

const trainingRouter = express.Router();

trainingRouter.get("/all", async (req: Request, res: Response) => {
  try {
    const trainings = await trainingService.getAllTrainings();
    res.status(200).json(trainings);
  } catch (error) {
    res.status(500).json({ status: "error", errorMessage: error.message });
  }
});

trainingRouter.get("/yours", async (req: Request, res: Response) => {
  const id = parseInt(req.query.id.toString());
  console.log(id + " dit is het id");
  try {
    const trainings = await trainingService.getTrainingsOfUser(id);
    res.status(200).json(trainings);
  } catch (error) {
    res.status(500).json({ status: "error", errorMessage: error.message });
  }
});

// trainingRouter.post('/addTrainingComment', async (req: Request, res: Response) => {
//     const trainingComment = req.body.trainingComment;
//     const id = req.body.trainingComment.training;
//     console.log(id)
//     try {
//         trainingService.addTrainingComment(trainingComment)
//         const training = await trainingService.getTrainingById(id);
//         const comments = await trainingService.getTrainingCommentsById(id);
//         res.status(200).json({status: 'success', message: `Comment on training with id: ${id} is successfull added.`, training, comments});
//     } catch (error) {
//         res.status(500).json({status: 'error', errorMessage: error.message});
//     }
// });

trainingRouter.post("/add", async (req: Request, res: Response) => {
  try {
    const training= await trainingService.addTraining(req.body);
    res
      .status(200)
      .json({ status: "success", message: "training is successfull added." });
  } catch (error) {
    res.status(500).json({ status: "error", errorMessage: error.message });
  }
});

trainingRouter.delete(`/delete/:id/`, async (req: Request, res: Response) => {
  const id= parseInt(req.params.id);
  try {
    
    await trainingService.deleteTrainingById(id);
    res.status(200).json({
      status: "success",
      message: `training with id ${id} was successfully deleted.`,
    });
  } catch (error) {
    res.status(500).json({ status: "error", errorMessage: error.message  + "id: " + id});
    
  }
});

trainingRouter.put("/update", async (req: Request, res: Response) => {
  const training = req.body.training;
  try {
    await trainingService.updateTraining(training);
    res
      .status(200)
      .json({ status: "succes", message: "training is succesfully updated." });
  } catch (error) {
    res.status(500).json({ status: "error", errorMessage: error.message });
  }
});



export { trainingRouter };
