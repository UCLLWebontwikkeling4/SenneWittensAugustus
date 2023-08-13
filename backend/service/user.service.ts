import { UserInput } from "./../types/index";
import { User } from "../domain/model/user";
import userDB from "../domain/data-access/user.db";

const getAllUsers = () => userDB.getUsers();

const getUserById = (id: number) => {
  if (Number.isNaN(Number(id))) {
    throw new Error(`id ${id} is not a number.`);
  }
  return userDB.getUserById({ id: id });
};

const addUser = (firstname, lastname, password, country, city, type_of_rider) =>
  userDB.addUser({
    firstname,
    lastname,
    password,
    country,
    city,
    type_of_rider,
  });

const updateUser = (user: User) => userDB.updateUser(user);

const deleteUserById = (id: number) => userDB.deleteById({ id: id });

const login = (firstname, lastname, password) =>
  userDB.login({ firstname, lastname, password });

export default {
  getAllUsers,
  getUserById,
  addUser,
  deleteUserById,
  updateUser,
  login,
};
