import { TrainingInput } from "./../types/index";
import { Training } from "../domain/model/training";
import trainingDB from "../domain/data-access/training.db";
import { TrainingComment } from "../domain/model/trainingComment";
import trainingCommentDB from "../domain/data-access/trainingComment";

const getAllTrainings = () => trainingDB.getAllTrainings();

const addTraining = (training: Training) => {
  trainingDB.addTraining(training);
  const trainings = trainingDB.getAllTrainings();
  return trainings;
};

const getTrainingsOfUser = (id: number) => {
  console.log(id + " in de service");
  return trainingDB.getTrainingOfUser({ id: id });
};

//const deleteTrainingComment = (id: number) => {
//  return trainingDB.deleteTrainingComment({ id: id });
//}

const deleteTrainingById = (id: number) => trainingDB.deleteById({ id: id });

const updateTraining = (training: Training) => trainingDB.updateTraining({id: training.id, title: training.title, date: training.date, km: training.km, avg_heartrate: training.avg_heartrate, avg_speed: training.avg_speed, userid: training.userid, likes: training.likes});

export default {
  getAllTrainings,
  addTraining,
  getTrainingsOfUser,
  deleteTrainingById,
  updateTraining};
