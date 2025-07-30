import {getAllCars} from "@/service/api.service";
import "./VehicleCardComponent.css"

const VehicleCardComponent = async() => {
    const Vehicles = await getAllCars();
    return (
        <div className="vehicle-wrapper">
            {Vehicles.map((car) => (
                <div key={car.id} className="vehicle-card">
                    <span>Id: {car.id}</span>
                    <span>Brand: {car.brand}</span>
                    <span>Price: {car.price}</span>
                    <span>Year: {car.year}</span>
                </div>
            ))}
        </div>
    );
};

export default VehicleCardComponent;