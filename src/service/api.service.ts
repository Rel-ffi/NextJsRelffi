import {ICars} from "@/models/ICarsModel";


export const getAllCars = async (): Promise<ICars[]> => {
    const response = await fetch('http://owu.linkpc.net/carsAPI/v1/cars');
    return await response.json();
}