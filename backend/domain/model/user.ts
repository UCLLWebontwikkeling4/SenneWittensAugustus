import { Bike } from "./bike";
import { Race } from "./race";
import { Training } from "./training";
import { TrainingComment } from "./trainingComment";

export class User {
  readonly id: number;
  readonly firstname: string;
  readonly lastname: string;
  readonly birth_date: Date;
  readonly password: string;
  readonly country: string;
  readonly city: string;
  readonly type_of_rider: string;
  readonly bikes: Bike[];
  readonly trainings: Training[];
  readonly comments: TrainingComment[];
  readonly races: Race[];

  constructor(user: {
    id: number;
    firstname: string;
    lastname: string;
    birth_date: Date;
    password: string;
    country: string;
    city: string;
    type_of_rider: string;
    bikes: Bike[];
    trainings: Training[];
    comments: TrainingComment[];
    races: Race[];
  }) {
    this.id = user.id;

    if (user.firstname == null) {
      throw new Error(`firstname is required.`);
    }
    this.firstname = user.firstname;

    if (user.lastname == null) {
      throw new Error(`Lastname is required.`);
    }
    this.lastname = user.lastname;

    this.birth_date = user.birth_date;

    if (user.password == null) {
      throw new Error(`Password is required.`);
    }
    this.password = user.password;

    this.country = user.country;
    this.city = user.city;
    if (user.type_of_rider == null) {
      throw new Error(`type of rider is required.`);
    }
    this.type_of_rider = user.type_of_rider;
    this.bikes = user.bikes;
    this.trainings = user.trainings;
    this.comments = user.comments;
    this.races = user.races;
  }

  static create({
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
  }): User {
    return new User({
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
    });
  }
}
