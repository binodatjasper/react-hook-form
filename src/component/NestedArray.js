import React from "react";
import { useFieldArray } from "react-hook-form";

export default function NestedArrayForm({ nestIndex, control, register, errors }) {

    const { fields } = useFieldArray({
        name: `users[${nestIndex}].phones`,
        control
    });

    return (
        fields.map((phone, index) => {
            return (
                <div className="row" key={phone.id}>
                    <div className="col-sm-6">
                        <input type="tel" {...register(`users[${nestIndex}].phones[${index}].ncell`)} className="form-control" />
                    </div>
                    <div className="col-sm-6">
                        <input type="tel" {...register(`users[${nestIndex}].phones[${index}].ntc`)} className="form-control" />
                    </div>
                </div>
            )
        })
    )
}