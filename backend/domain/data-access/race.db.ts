import { mapToRaces, mapToSingleRace } from "./race.mapper";
import { Race } from "../model/race";

import { prisma } from "./database";

const getRaces = async (): Promise<Race[]> => {
  try {
    const racePrisma = await prisma.race.findMany({
      orderBy: {
        id: "asc",
      },
      include: {
        users: true,
      },
    });
    const races = mapToRaces(racePrisma);
    return races;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getRaceById = async ({ id }: { id: number }): Promise<Race> => {
  try {
    const findRace = await prisma.race.findFirst({
      where: {
        id: id,
      },
      include: {
        users: true,
      },
    });
    if (!findRace) throw new Error(`Race with id: ${id} not found`);
    const race = mapToSingleRace(findRace);
    return race;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteById = async ({ id }: { id: number }) => {
  try {
    const findRace = await prisma.race.findFirst({
      where: {
        id: id,
      },
    });
    if (!findRace) throw new Error(`Race with id: ${id} not found`);
    await prisma.race.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
const updateRace = async ({
  id,
  date,
  type,
  km,
  age_category,
  city,
  country,
  street,
  number,
}: {
  id: number;
  date: string;
  type: string;
  km: number;
  age_category: string;
  city: string;
  country: string;
  street: string;
  number: number;
}): Promise<Race> => {
  try {
    const updatedRace = await prisma.race.update({
      where: {
        id,
      },
      data: {
        date,
        type,
        km,
        age_category,
        city,
        country,
        street,
        number,
      },
    });
    if (!updatedRace)
      throw new Error("there was a problem when updating the race.");
    return mapToSingleRace(updatedRace);
  } catch (error) {
    throw new Error(error.message);
  }
};

const addRace = async (race: Race): Promise<Race> => {
  try {
    const raceToAdd = await prisma.race.create({
      data: {
  date: race.date,
  type: race.type,
  km: race.km,
  age_category: race.age_category,
  city: race.city,
  country: race.country,
  street: race.street,
  number: race.number,
      },
    });
    return mapToSingleRace(raceToAdd);
  } catch (error) {
    throw new Error(error.message);
  }
};


export default {
  getRaceById,
  addRace,
  getRaces,
  deleteById,
  updateRace,
};
