import { User as UserPrisma } from "@prisma/client";
import { Bike as BikePrisma } from "@prisma/client";
import { Race as RacePrisma } from "@prisma/client";
import { Training as TrainingPrisma } from "@prisma/client";
import { TrainingComment as TrainingCommentPrisma } from "@prisma/client";
import { User } from "../model/user";
import bikesMapper, { mapToBikes, mapToSingleBike } from "./bikes.mapper";
import { mapToTrainings } from "./training.mapper";
import { mapToComments } from "./trainingComment.mapper";
import { mapToRaces } from "./race.mapper";

const mapToUser = ({
  id,
  firstname,
  lastname,
  birth_date,
  password,
  country,
  city,
  type_of_rider,
  bikes,
  trainings,
  comments,
  races,
}: UserPrisma & { bikes?: BikePrisma[] } & { trainings?: TrainingPrisma[] } & {
  comments?: TrainingCommentPrisma[];
} & { races?: RacePrisma[] }): User =>
  new User({
    id,
    firstname,
    lastname,
    birth_date,
    password,
    country,
    city,
    type_of_rider,
    bikes: bikes ? mapToBikes(bikes) : [],
    trainings: trainings ? mapToTrainings(trainings) : [],
    comments: comments ? mapToComments(comments) : [],
    races: races ? mapToRaces(races) : [],
  });

export const mapToUsers = (usersPrisma: UserPrisma[]): User[] =>
  usersPrisma.map((user) => mapToUser(user));

export const mapToSingleUser = (usersPrisma: UserPrisma): User =>
  mapToUser(usersPrisma);

export default { mapToUsers, mapToSingleUser };
