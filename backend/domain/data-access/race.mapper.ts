import { mapToUsers } from "./user.mapper";
import { User as UserPrisma } from "@prisma/client";
import { Race as RacePrisma } from "@prisma/client";
import { Race } from "../model/race";
import { User } from "../model/user";

const mapToRace = ({
  id,
  date,
  type,
  km,
  age_category,
  city,
  country,
  street,
  number,
  users,
}: RacePrisma & { users?: User[] }): Race =>
  new Race({
    id,
    date,
    type,
    km,
    age_category,
    street,
    country,
    city,
    number,
    users: users ? mapToUsers(users) : [],
  });

export const mapToRaces = (racePrisma: RacePrisma[]): Race[] =>
  racePrisma.map((race) => mapToRace(race));

export const mapToSingleRace = (racePrisma: RacePrisma): Race =>
  mapToRace(racePrisma);

export default { mapToSingleRace, mapToRaces };
