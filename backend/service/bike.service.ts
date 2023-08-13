import { BikeInput } from "./../types/index";
import { Bike } from "../domain/model/bike";
import bikesDB from "../domain/data-access/bikes.db";

const getAllBikes = () => bikesDB.getBikes();

const getBikeById = (id: number) => {
  if (Number.isNaN(Number(id))) {
    throw new Error(`id ${id} is not a number.`);
  }
  const bike = bikesDB.getBikeById({ id: id });
  if (!bike) {
    throw new Error(`Bike with id: ${id} does not exist`);
  }
  return bike;
};

const addBike = (bike: Bike) => {
  bikesDB.addBike(bike);
  const bikes = bikesDB.getBikes();
  return bikes;
};

const deleteBikeById = (id: number) => {
  return bikesDB.deleteBikeById({ id: id });
};
const updateBike = (bike: Bike) => bikesDB.updateBike({id: bike.id, brand: bike.brand, type: bike.type, shifting_system: bike.shifting_system, userid: bike.userid});

const getBikesOfUser = (id: number) => {
  console.log(id + " in de service");
  return bikesDB.getBikesOfUser({ id: id });
};

export default { getAllBikes, getBikeById, addBike, deleteBikeById, updateBike, getBikesOfUser };
