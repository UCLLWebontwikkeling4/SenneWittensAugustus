import { mapToBikes, mapToSingleBike } from "./bikes.mapper";

import { prisma } from "./database";
import { Bike } from "../model/bike";

const getBikes = async (): Promise<Bike[]> => {
  const bikesPrisma = await prisma.bike.findMany({
    include: { user: true },
  });
  const bikes = mapToBikes(bikesPrisma);
  return bikes;
};
const getBikeById = async ({ id }: { id: number }): Promise<Bike> => {
  try {
    const findbike = await prisma.bike.findFirst({
      where: {
        id: id,
      },
    });
    if (!findbike) throw new Error(`Bike with id: ${id} not found`);
    const bike = mapToSingleBike(findbike);
    return bike;
  } catch (error) {
    throw new Error(error.message);
  }
};

const addBike = async (bike: Bike): Promise<Bike> => {
  try {
    const bikeToAdd = await prisma.bike.create({
      data: {
        brand: bike.brand,
        type: bike.type,
        shifting_system: bike.shifting_system,
        userid: bike.userid,
      },
    });
    return mapToSingleBike(bikeToAdd);
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteBikeById = async ({ id }: { id: number }) => {
  try {
    const findbike = await prisma.bike.findFirst({
      where: {
        id: id,
      },
    });
    if (!findbike) throw new Error(`bike with id: ${id} not found`);
    await prisma.bike.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
const updateBike = async ({
  id,
  brand,
  type,
  shifting_system,
  userid
}: {
  id: number;
  brand: string;
  type: string;
  shifting_system: string;
  userid: number;
}): Promise<Bike> => {
  try {
    const updatedbike = await prisma.bike.update({
      where: {
        id,
      },
      data: {
        brand,
        type,
        shifting_system,
        userid
      },
    });
    if (!updatedbike)
      throw new Error("there was a problem when updating the bike.");
    return mapToSingleBike(updatedbike);
  } catch (error) {
    throw new Error(error.message);
  }
};

const getBikesOfUser = async ({
  id,
}: {
  id: number;
}): Promise<Bike[]> => {
  try {
    console.log(id + " in de functie");
    const bikesPrisma = await prisma.bike.findMany({
      where: {
        id: id,
      },
    });
    if (!bikesPrisma) throw new Error("you do not have bikes");
    const bikes = mapToBikes(bikesPrisma);
    console.log(bikes);
    return bikes;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default { getBikes, getBikeById, addBike, deleteBikeById, updateBike, getBikesOfUser };
