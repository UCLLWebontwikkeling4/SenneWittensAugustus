import { User } from "./user";

export class Race {
  readonly id?: number;
  readonly date: Date;
  readonly type: string;
  readonly km: number;
  readonly age_category: string;
  readonly city: string;
  readonly country: string;
  readonly street: string;
  readonly number: number;
  users: User[];

  constructor(race: {
    id: number;
    date: Date;
    type: string;
    km: number;
    age_category: string;
    city: string;
    country: string;
    street: string;
    number: number;
    users: User[];
  }) {
    this.id = race.id;
    this.date = race.date;
    if (race.type == null) {
      throw new Error(`Please provide a type`);
    }
    this.type = race.type;

    if (race.km == null || race.km < 0) {
      throw new Error(
        `Please provide an amount of km for the race with a number.`
      );
    }
    this.km = race.km;

    if (race.age_category == null) {
      throw new Error(`Please privide an age category for the race.`);
    }
    this.age_category = race.age_category;

    if (race.city == null) {
      throw new Error(`Please privide a city for the race.`);
    }
    this.city = race.city;

    if (race.country == null) {
      throw new Error(`Please privide a country for the race.`);
    }
    this.country = race.country;

    if (race.street == null) {
      throw new Error(`Please privide a street for the race.`);
    }
    this.street = race.street;

    if (race.number == null || race.number < 0) {
      throw new Error(`Please provide a house number for the race.`);
    }
    this.number = race.number;
    this.users = race.users;
  }

  static create({
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
  }): Race {
    return new Race({
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
    });
  }
}
