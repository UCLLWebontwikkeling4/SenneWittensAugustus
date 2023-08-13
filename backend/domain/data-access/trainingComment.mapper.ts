import { TrainingComment as TrainingCommentPrisma } from "@prisma/client";
import { TrainingComment } from "../model/trainingComment";

const mapToComment = ({
  id,
  text,
  date,
  trainingid,
  userid,
}: TrainingCommentPrisma): TrainingComment =>
  new TrainingComment({
    id,
    text,
    date,
    trainingid,
    userid,
  });

export const mapToComments = (
  trainingCommentPrisma: TrainingCommentPrisma[]
): TrainingComment[] =>
  trainingCommentPrisma.map((comment) => mapToComment(comment));

export const mapToSingleComment = (
  trainingCommentPrisma: TrainingCommentPrisma
): TrainingComment => mapToComment(trainingCommentPrisma);

export default { mapToComments, mapToSingleComment };
