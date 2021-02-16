import React from 'react'
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {
    const { register, handleSubmit, setValue } = useForm();
 
    const onSubmit = (data) => {
        props.editSubmitUser(data)
    }
    
    //set the inputs when you click "edit" with its information
    setValue('name', props.editUser.name)
    setValue('username', props.editUser.username)

    return (
        <div className="text-center w-50 editForm">
            <h1>Edit User</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                className="form-control my-1" 
                type="text" 
                placeholder="Name"
                name="name"
                ref={register}
                defaultValue= {props.editUser.name}
                />

                <input 
                className="form-control my-1" 
                type="text" 
                placeholder="Username"
                name="username"
                ref={register}
                defaultValue= {props.editUser.username}
                />

                <button 
                className="btn btn-primary mb-5 px-5"
                >Edit User
                </button>
            </form>
        </div>
    );
}

export default EditUserForm;