

export type user={
    name:string;
    car_name:string;
    car_number:string;
    arrival:string;
    depart:string;
}

export type parkingDetails={
    spaces:number[];
    alloted:user[];
    free:number[];
}