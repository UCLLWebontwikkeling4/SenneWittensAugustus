import { Training } from "../model/training";
import { mapToTrainings, mapToSingletraining } from "./training.mapper";
import { prisma } from "./database";

const getAllTrainings = async (): Promise<Training[]> => {
  try {
    const trainingsPrisma = await prisma.training.findMany({
      include: { comments: true },
    });
    const trainings = mapToTrainings(trainingsPrisma);
    return trainings;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getTrainingOfUser = async ({
  id,
}: {
  id: number;
}): Promise<Training[]> => {
  try {
    console.log(id + " in de functie");
    const trainingsPrisma = await prisma.training.findMany({
      where: {
        userid: id,
      },
    });
    if (!trainingsPrisma) throw new Error("you do not have trainings");
    const trainings = mapToTrainings(trainingsPrisma);
    console.log(trainings);
    return trainings;
  } catch (error) {
    throw new Error(error.message);
  }
};

const addTraining = async (training: Training): Promise<Training> => {
  try {
    const trainingToAdd = await prisma.training.create({
      data: {
        title: training.title,
        date: training.date,
        km: training.km,
        avg_heartrate: training.avg_heartrate,
        avg_speed: training.avg_speed,
        userid: training.userid,
        likes: training.likes,
      },
    });
    return mapToSingletraining(trainingToAdd);
  } catch (error) {
    throw new Error(error.message);
  }
};
const deleteById = async ({ id }: { id: number }) => {
  try {
    const findTraining = await prisma.training.findFirst({
      where: {
        id: id,
      },
    });

    if (!findTraining) {
      throw new Error(`Training with id: ${id} not found`);
    }

    await prisma.training.delete({
      where: {
        id: findTraining.id, // Gebruik de id van het gevonden training object
      },
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateTraining = async ({
  id,
  title,
  date,
  km,
  avg_heartrate,
  avg_speed,
  userid,
  likes,
}: {
  id: number;
  title: string;
  date: Date;
  km: number;
  avg_heartrate: number;
  avg_speed: number;
  userid: number;
  likes: number;
}): Promise<Training> => {
  try {
    const updatedtraining = await prisma.training.update({
      where: {
        id,
      },
      data: {
        title,
        date,
        km,
        avg_heartrate,
        avg_speed,
        userid,
        likes,
      },
    });
    if (!updatedtraining)
      throw new Error("there was a problem when updating the training.");
    return mapToSingletraining(updatedtraining);
  } catch (error) {
    throw new Error(error.message);
  }
};
export default { getAllTrainings, addTraining, getTrainingOfUser, deleteById, updateTraining };
