import { User } from "../model/user";
import bcrypt from "bcrypt";
import { mapToUsers, mapToSingleUser } from "./user.mapper";

import { prisma } from "./database";

const getUsers = async (): Promise<User[]> => {
  try {
    const usersPrisma = await prisma.user.findMany({
      orderBy: {
        id: "asc",
      },
      include: {
        bikes: true,
        trainings: true,
        comments: true,
        races: true,
      },
    });
    const users = mapToUsers(usersPrisma);
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

const login = async ({
  firstname,
  lastname,
  password,
}: {
  firstname: string;
  lastname: string;
  password: string;
}): Promise<User> => {
  try {
    const user = await prisma.user.findMany({
      where: {
        firstname: firstname,
        lastname: lastname,
        password: password,
      },
      include: {
        bikes: true,
        trainings: true,
      },
      orderBy: {
        id: "asc",
      },
    });
    if (!user) throw new Error(`bad credentials`);
    const loggedInUser = mapToSingleUser(user[0]);
    return loggedInUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserById = async ({ id }: { id: number }): Promise<User> => {
  try {
    const finduser = await prisma.user.findFirst({
      where: {
        id: id,
      },
      include: {
        bikes: true,
        trainings: true,
        comments: true,
        races: true,
      },
    });
    if (!finduser) throw new Error(`User with id: ${id} not found`);
    const users = mapToSingleUser(finduser);
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteById = async ({ id }: { id: number }) => {
  try {
    const finduser = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    if (!finduser) throw new Error(`User with id: ${id} not found`);
    await prisma.user.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
const updateUser = async ({
  id,
  firstname,
  lastname,
  birth_date,
  password,
  country,
  city,
  type_of_rider,
}: {
  id: number;
  firstname: string;
  lastname: string;
  birth_date: Date;
  password: string;
  country: string;
  city: string;
  type_of_rider: string;
}): Promise<User> => {
  try {
    const updateduser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        firstname,
        lastname,
        birth_date,
        password,
        country,
        city,
        type_of_rider,
      },
    });
    if (!updateduser)
      throw new Error("there was a problem when updating the user.");
    return mapToSingleUser(updateduser);
  } catch (error) {
    throw new Error(error.message);
  }
};

const addUser = async ({
  firstname,
  lastname,
  password,
  country,
  city,
  type_of_rider,
}: {
  firstname: string;
  lastname: string;
  password: string;
  country: string | null;
  city: string | null;
  type_of_rider: string;
}): Promise<User> => {
  try {
    const userToAdd = await prisma.user.create({
      data: {
        firstname: firstname,
        lastname: lastname,
        password: password,
        country: country,
        city: city,
        type_of_rider: type_of_rider,
      },
    });
    if (!userToAdd)
      throw new Error(
        `There went something wrong when adding the user, please check again`
      );
    const user = await prisma.user.findMany({
      where: {
        firstname: firstname,
        lastname: lastname,
        password: password,
      },
      include: {
        bikes: true,
        trainings: true,
      },
    });
    if (!user) throw new Error(`bad credentials`);
    const loggedInUser = mapToSingleUser(user[0]);
    console.log(loggedInUser);
    return loggedInUser;
  } catch (error) {
    throw new Error(
      `something went wrong when adding the user, please check again`
    );
  }
};

export default {
  getUserById,
  addUser,
  getUsers,
  deleteById,
  updateUser,
  login,
};
