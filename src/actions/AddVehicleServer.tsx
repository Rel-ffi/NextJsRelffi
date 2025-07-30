"use server"

import {revalidatePath} from "next/cache";

export async function AddVehicle(formData: FormData) {
    const brand = String(formData.get("brand"));
    const price = Number(formData.get("price"));
    const year = Number(formData.get("year"));

    revalidatePath("/");

    await fetch("http://owu.linkpc.net/carsAPI/v1/cars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ brand, price, year }),
    });
}
