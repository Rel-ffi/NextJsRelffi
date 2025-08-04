"use client"

import "./AddVehicleComponent.css"
import {AddVehicle} from "@/actions/AddVehicleServer";
import {VehicleFormValues, VehicleSchema} from "@/schematics/vehicle.schema";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

const AddVehicleComponent = () => {

    const {register, handleSubmit, formState: {errors}, reset,} = useForm<VehicleFormValues>({
        resolver: joiResolver(VehicleSchema)
    });

    const onSubmit = async (data:VehicleFormValues) => {
        await AddVehicle(data);
        reset();
    }


    return (
        <div className="add-wrapper">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input {...register("brand")} placeholder="Brand"/>
                    {errors.brand && <p className="error">{errors.brand.message}</p>}
                </div>

                <div>
                    <input {...register("price")} placeholder="Price"/>
                    {errors.price && <p className="error">{errors.price.message}</p>}
                </div>

                <div>
                    <input {...register("year")} placeholder="Year"/>
                    {errors.year && <p className="error">{errors.year.message}</p>}
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddVehicleComponent;