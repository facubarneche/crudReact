import React from 'react'
import { useForm } from 'react-hook-form'

const EditUserForm = ( props ) => {
        const { register, errors, handleSubmit, setValue } = useForm({
            defaultValues: props.currentUser
        });

        setValue('name',props.currentUser.name)
        setValue('username',props.currentUser.username)

    const onSubmit = (data, e) => {
        data.id = props.currentUser.id
        props.updateUser(props.currentUser.id, data)
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
            <button className="btn btn-primary m-1">Edit User</button>
            <hr />
        </form>
    );
}
 
export default EditUserForm;
 
