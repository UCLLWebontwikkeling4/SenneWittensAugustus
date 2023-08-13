/**
 * @swagger
 *   components:
 *    schemas:
 *      user:
 *          type: object
 *          properties:
 *            id:
 *              type: number
 *              description: Id of the user
 *            firstname:
 *              type: string
 *              description: firstname of the user.
 *            lastname:
 *              type: string
 *              description: lastname of the user.
 *            birth_date:
 *              type: date
 *              description: date of the user.
 *            password:
 *              type: string
 *              description: password of the user.
 *            country:
 *              type: string
 *              description: country of the user.
 *            city:
 *              type: string
 *              description: city of the user.
 *            type of rider:
 *              type: string
 *              description: type of rider of the user.
 */

import { UserInput } from "../types/index";
import { User } from "../domain/model/user";
import express, { Request, Response, Handler } from "express";
import userService from "../service/user.service";

const userRouter = express.Router();

/**
 * @swagger
 * /user/all:
 *   get:
 *     summary: get all users.
 *     responses:
 *       200:
 *         description: A success message, you now have access to all the users.
 *       403:
 *         description: failed.
 *       500:
 *         description: An error has occurred, see error message for more details.
 */
userRouter.get("/all", async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ status: "error", errorMessage: error.message });
  }
});
/**
 * @swagger
 * /user/get:
 *   get:
 *     summary: get a user by id.
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A success message, you now have added the category.
 *       403:
 *         description: not allowed.
 *       500:
 *         description: An error has occurred, see error message for more details.
 */

userRouter.get("/get", async (req: Request, res: Response) => {
  const id = parseInt(req.query.id.toString());
  try {
    const user = await userService.getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ status: "error", errorMessage: error.message });
  }
});



/**
 * @swagger
 * /user/add:
 *   post:
 *     summary: add a user.
 *     requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      user:
 *                          type: object
 *                          properties:
 *                              "firstname":
 *                                type: string
 *                              "lastname":
 *                                type: string
 *                              "password":
 *                                type: string
 *                              "country":
 *                                type: string
 *                              "city":
 *                                type: string
 *                              "type_of_rider":
 *                                type: string
 *     responses:
 *       200:
 *         description: A success message, you now have added the category.
 *       403:
 *         description: not allowed.
 *       500:
 *         description: An error has occurred, see error message for more details.
 */
userRouter.post("/add", async (req: Request, res: Response) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const password = req.body.password;
  const country = req.body.country;
  const city = req.body.city;
  const typeOfRider = req.body.typeOfRider;
  console.log(firstname, lastname, password, country, city, typeOfRider);
  try {
    const user = await userService.addUser(
      firstname,
      lastname,
      password,
      country,
      city,
      typeOfRider
    );
    res.status(200).json({
      status: "success",
      message: `user with name: '${firstname} ${lastname}' is successfull added.`,
      user,
    });
  } catch (error) {
    res.status(500).json({ status: "error", errorMessage: error.message });
  }
});

/**
 * @swagger
 * /user/delete:
 *   delete:
 *     summary: delete a user by id.
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A success message, you now have added the category.
 *       403:
 *         description: not allowed.
 *       500:
 *         description: An error has occurred, see error message for more details.
 */
userRouter.delete("/delete", async (req: Request, res: Response) => {
  const id = parseInt(req.query.id.toString());
  try {
    await userService.deleteUserById(id);
    res.status(200).json({
      status: "success",
      message: `user with id ${id} was successfully deleted.`,
    });
  } catch (error) {
    res.status(500).json({ status: "error", errorMessage: error.message });
  }
});
/**
 * @swagger
 * /user/update:
 *   put:
 *     summary: update a user.
 *     requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      user:
 *                          type: object
 *                          properties:
 *                              "id":
 *                                type:number
 *                              "firstname":
 *                                type: string
 *                              "lastname":
 *                                type: string
 *                              "password":
 *                                type: string
 *                              "country":
 *                                type: string
 *                              "city":
 *                                type: string
 *                              "type_of_rider":
 *                                type: string
 *     responses:
 *       200:
 *         description: A success message, you now have added the category.
 *       403:
 *         description: not allowed.
 *       500:
 *         description: An error has occurred, see error message for more details.
 */
userRouter.put("/update", async (req: Request, res: Response) => {
  const user = req.body.user;
  try {
    await userService.updateUser(user);
    res
      .status(200)
      .json({ status: "succes", message: "user is succesfully updated." });
  } catch (error) {
    res.status(500).json({ status: "error", errorMessage: error.message });
  }
});

userRouter.post("/login", async (req: Request, res: Response) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const password = req.body.password;
  try {
    const user = await userService.login(firstname, lastname, password);
    console.log(user);
    res.status(200).json({
      status: "success",
      message: "You are successfully logged in!",
      user,
    });
  } catch (error) {
    res.status(500).json({ status: "error", errorMessage: error.message });
  }
});
export { userRouter };
