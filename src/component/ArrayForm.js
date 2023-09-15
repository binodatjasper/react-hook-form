import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import NestedArrayForm from './NestedArray';

export default function ArrayForm() {
    const form = useForm({
        defaultValues: {
            college: 'Texas College',
            level: 'BIT',
            users: [
                {
                    name: 'Binod',
                    email: 'bind@gmail.com',
                    phones: [
                        { ncell: 9800000000, ntc: 9844444444 },
                        { ncell: 9800000000, ntc: 9844444444 }
                    ]
                },
                {
                    name: 'Niki',
                    email: 'niki@gmail.com',
                    phones: [
                        { ncell: 898989898, ntc: 898989898 },
                        { ncell: 898989898, ntc: 898989898 }
                    ]
                }
            ]
        }
    });

    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;

    const { fields: usersFields } = useFieldArray({
        name: 'users',
        control
    });

    const handleSubmitForm = (data) => {
        console.log('data : ', data)
    }

    return (
        <section className="container">
            <div className="row">
                <div className="col-sm-6">
                    <h1>React Hook Form</h1>
                    <hr />
                    <form onSubmit={handleSubmit((data) => handleSubmitForm(data))}>
                        <input {...register('college')} className="form-control" />
                        <input {...register('level')} className="form-control" />
                        <br />
                        {
                            usersFields.map((user, index) => {
                                return (
                                    <div className="form-group" key={user.id}>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <input type="name" {...register(`users.${index}.name`)} className="form-control" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="email" {...register(`users.${index}.email`)} className="form-control" />
                                            </div>
                                        </div>
                                        <NestedArrayForm nestIndex={index} {...{ control, register, errors }} />

                                        <br />
                                    </div>
                                )
                            })
                        }

                        <input type="submit" className="btn btn-primary" value="Submit" />
                    </form>
                </div>
            </div>
        </section>
    );
}