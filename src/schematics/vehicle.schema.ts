import Joi from "joi";

export const VehicleSchema = Joi.object({
    brand: Joi.string()
        .pattern(new RegExp("^[a-zA-Zа-яА-ЯёЁіІїЇєЄҐґ]{1,20}$"))
        .min(1)
        .max(20)
        .required()
        .messages({
            "string.empty": "Enter a brand",
            "string.pattern.base": "Brand can contain only letters"
        }),

    price: Joi.number()
        .min(0)
        .max(1000000)
        .required()
        .messages({
           "number.base": "Price must be number",
            "number.min": "The price should not be less than 0",
            "number.max": "The price should not be higher than 1000000"
        }),

    year: Joi.number()
        .min(1990)
        .max(2024)
        .required()
        .messages({
            "number.min": "Year should not be less than 1990",
            "number.max": "Year should not be higher than 2024",
        }),
});

export type VehicleFormValues = {
    brand: string,
    price: number,
    year: number
}

