import { User as UserPrisma } from "@prisma/client";
import { Bike as BikePrisma } from "@prisma/client";

import { Bike } from "../model/bike";

const mapToBike = ({
  id,
  brand,
  type,
  shifting_system,
  userid,
}: BikePrisma): Bike =>
  new Bike({
    id,
    brand,
    type,
    shifting_system,
    userid,
  });

export const mapToBikes = (bikePrisma: BikePrisma[]): Bike[] =>
  bikePrisma.map((bike) => mapToBike(bike));

export const mapToSingleBike = (bikePrisma: BikePrisma): Bike =>
  mapToBike(bikePrisma);

export default { mapToBikes, mapToSingleBike };
