import React from 'react'
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data,e) => {
       props.addUser(data)
       e.target.reset()
    }

    return (
        <div className="w-50 addUser text-center">
            <h1 className="text-center" >Add User</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                className="form-control my-1" 
                type="text" 
                placeholder="Name"
                name="name"
                ref={register({
                    required:{value:true, message:'Name required'}
                })}
                ></input>
                <span className="d-block text-danger">{errors?.name?.message}</span>
                <input 
                className="form-control my-1" 
                type="text" 
                placeholder="Username"
                name="username"
                ref={register({
                    required:{value:true, message:'Username required'}
                })}
                >
                </input>
                <span className="d-block text-danger">{errors?.username?.message}</span>
                <button 
                className="btn btn-primary mb-5 px-5"
                >Add User</button>
            </form>
        </div>
    );
}

export default AddUserForm;