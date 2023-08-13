import { TrainingComment } from "./trainingComment";

export class Training {
  readonly id?: number;
  readonly title: string;
  readonly date: Date;
  readonly km: number;
  readonly avg_heartrate: number;
  readonly avg_speed: number;
  readonly userid: number;
  readonly likes: number;
  readonly comments: TrainingComment[];

  constructor(training: {
    id: number;
    title: string;
    date: Date;
    km: number;
    avg_heartrate: number;
    avg_speed: number;
    userid: number;
    likes: number;
    comments: TrainingComment[];
  }) {
    this.id = training.id;

    this.date = training.date;

    this.title = training.title;

    if (training.km == 0 || training.km < 0) {
      throw new Error(`Training must contatain more then zero km`);
    }
    if (training.km === null || Number.isNaN(training.km)) {
      throw new Error(
        `Please provide the Kilometers of your training with a number.`
      );
    }
    this.km = training.km;

    if (training.avg_heartrate == 0 || training.avg_heartrate < 0) {
      throw new Error(`Average heartbeat must be greater than 0 bpm.`);
    }
    if (
      training.avg_heartrate == null ||
      Number.isNaN(training.avg_heartrate)
    ) {
      throw new Error(
        `please provide an average heartbeat in the format of a number.`
      );
    }
    this.avg_heartrate = training.avg_heartrate;

    if (training.avg_speed == 0 || training.avg_speed < 0) {
      throw new Error(`Average speed must be greater than 0 km/u.`);
    }
    if (training.avg_speed == null || Number.isNaN(training.avg_speed)) {
      throw new Error(
        `please provide an average speed in the format of a number.`
      );
    }
    this.avg_speed = training.avg_speed;

    this.comments = training.comments;
    this.userid = training.userid;
    this.likes = training.likes;
  }

  static create({
    id,
    title,
    date,
    km,
    avg_heartrate,
    avg_speed,
    userid,
    likes,
    comments,
  }): Training {
    return new Training({
      id,
      title,
      date,
      km,
      avg_heartrate,
      avg_speed,
      userid,
      likes,
      comments,
    });
  }
}
