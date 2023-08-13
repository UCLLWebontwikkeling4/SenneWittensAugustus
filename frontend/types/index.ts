

export interface User {
    id: number
    firstname: string
    lastname: string
    birth_date: string
    password: string
    country: string
    city: string
    type_of_rider: string
    bike: Bike[]
}
export interface Bike {
    id: number
    brand: string
    type: string
    shifting_system: string
    weight: number
}


export interface Training{
    id: number
    date: string
    title: string
    km: number
    avg_heartrate: number
    avg_speed: number
    user: string
    likes: number
}

export interface StatusMessage {
    message: string;
    type: 'error' | 'success';
}