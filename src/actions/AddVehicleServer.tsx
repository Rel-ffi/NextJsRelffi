"use server"

import {revalidatePath} from "next/cache";
import {VehicleFormValues} from "@/schematics/vehicle.schema";

export async function AddVehicle(data: VehicleFormValues) {
    await fetch("http://owu.linkpc.net/carsAPI/v1/cars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    revalidatePath("/");
}
