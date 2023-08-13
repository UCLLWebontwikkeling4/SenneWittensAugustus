export interface UserInput {
    id: string;
    firstname: string;
    lastname: string;
    birth_date: Date;
    password: string;
    country: string;
    city: string;
    type_of_rider: string;
    bike: number;  
}

export interface TrainingInput {
    id: number;
    date: Date;
    km: number;
    avg_heartrate: number;
    avg_speed: number;
    bike: number;
    user: number;
    likes: number;
}

export interface RaceInput {
    id: number;
    date: Date;
    type: string;
    km: number;
    age_category: string;
    city: string;
    country: string;
    street: string;
    number: number;
}

export interface CommentInput {
    id: number;
    date: Date;
    text: string;
    training: number;
    user: number;
}


export interface BikeInput {
    id: number;
    brand: string;
    type: string;
    weight: number;
    shifting_system: string;
    wheels: string;
}



