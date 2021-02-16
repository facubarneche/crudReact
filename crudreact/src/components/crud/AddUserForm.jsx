import React from 'react'
import { useForm } from 'react-hook-form'



const AddUserForm = (props) => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        props.addUser(data)
        e.target.reset();
    }

    return (
        <form className="w-50" onSubmit={handleSubmit(onSubmit)}>
            <input className="form-control m-1"
                ref={register({
                    required: {
                        value: true,
                        message: 'Campo Obligatorio'
                    }
                })}
                type="text" name="name"
                placeholder="Name" />
            <span className="text-danger d-block">{errors?.name?.message}</span>
            <input className="form-control m-1"
                ref={register({
                    required: {
                        value: true,
                        message: 'Campo Obligatorio'
                    }
                })}
                type="text" name="username"
                placeholder="Username" />
            <span className="text-danger d-block">{errors?.username?.message}</span>
            <button className="btn btn-primary m-1">Add User</button>
            <hr />
        </form>
    );
}

export default AddUserForm;