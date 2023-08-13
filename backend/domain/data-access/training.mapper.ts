import { Training } from "./../model/training";

import {
  Training as TrainingPrisma,
  TrainingComment as CommentPrisma,
} from "@prisma/client";
import { mapToComments } from "./trainingComment.mapper";

const mapToTraining = ({
  id,
  title,
  date,
  km,
  avg_heartrate,
  avg_speed,
  userid,
  likes,
  comments,
}: TrainingPrisma & { comments?: CommentPrisma[] }): Training =>
  new Training({
    id,
    title,
    date,
    km,
    avg_heartrate,
    avg_speed,
    userid,
    likes,
    comments: comments ? mapToComments(comments) : [],
  });

export const mapToTrainings = (trainingsPrisma: TrainingPrisma[]): Training[] =>
  trainingsPrisma.map((user) => mapToTraining(user));

export const mapToSingletraining = (
  trainingsPrisma: TrainingPrisma
): Training => mapToTraining(trainingsPrisma);

export default { mapToTrainings, mapToSingletraining };
