import { RaceInput } from "./../types/index";
import { Race } from "../domain/model/race";
import raceDB from "../domain/data-access/race.db";
import userService from "./user.service";
import bikesDb from "../domain/data-access/bikes.db";

const getAllRaces = () => raceDB.getRaces();

const getRaceById = (id: number) => {
  if (Number.isNaN(Number(id))) {
    throw new Error(`id ${id} is not a number.`);
  }
  return raceDB.getRaceById({ id: id });
};

const addRace = (race: Race) => {
  raceDB.addRace(race);
  const races = raceDB.getRaces();
  return races;
};
const getBikesOfUser = (id: number) => {
  console.log(id + " in de service");
  return bikesDb.getBikeById({ id: id });
};

//const updateRace = (race: Race) => raceDB.updateRace(race);

const deleteRaceById = (id: number) => raceDB.deleteById({ id: id });

export default {
  getAllRaces,
  getRaceById,
  addRace,
  deleteRaceById,
  getBikesOfUser
};
