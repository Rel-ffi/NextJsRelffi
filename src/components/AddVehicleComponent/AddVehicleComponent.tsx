import Form from "next/form";
import "./AddVehicleComponent.css"
import {AddVehicle} from "@/actions/AddVehicleServer";

const AddVehicleComponent = async() => {
    return (
        <div className="add-wrapper">
            <Form action={AddVehicle} key="add-vehicle">
                <input
                    name="brand"
                    placeholder="Brand"
                    pattern="^[a-zA-Zа-яА-ЯёЁіІїЇєЄҐґ]{1,20}$"
                    maxLength={20}
                    minLength={1}
                    required
                />

                <input
                    name="price"
                    type="number"
                    placeholder="Price"
                    min={0}
                    max={1000000}
                    required
                />

                <input
                    name="year"
                    type="number"
                    placeholder="Year"
                    min={1990}
                    max={2024}
                    required
                />
                <button>Add</button>
            </Form>
        </div>
    );
};

export default AddVehicleComponent;