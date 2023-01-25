import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";
import { Form } from "react-bootstrap";
import JSONCityUA from "./city-ua.json";

const CustomSelect = ({ control, name }) => {
    const cityUA = JSONCityUA;

    const optionsCity = cityUA.map((el) => {
        return el.city;
    });

    const options = optionsCity.map((item) => {
        return {
            value: item,
            label: item,
        };
    });

    return (
        <Controller
            control={control}
            name={name}
            rules={{
                required: "City is not selected",
            }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
                <>
                    <Select
                        options={options}
                        value={options.find((el) => el.value === value)}
                        placeholder={"Choose city..."}
                        onChange={(newValue) => onChange(newValue?.value)}
                    />
                    {error?.message && (
                        <Form.Text className="text-danger">
                            {error?.message}
                        </Form.Text>
                    )}
                </>
            )}
        />
    );
};

export default CustomSelect;
