import React from 'react'

const UserTable = (props) => {
    
    let contador = 1;

    return (
        <div>
            <h1>Users</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.users.length > 0 ? (
                            props.users.map(e =>
                                <tr key={e.id}>
                                    <th scope="row">{contador++}</th>
                                    <td>{e.name}</td>
                                    <td>{e.username}</td>
                                    <td>
                                        <button 
                                        className="btn btn-primary mx-1"
                                        onClick={()=> {
                                            props.changeAddOrEdit(true)
                                            props.edit(e)
                                        }}
                                        >Edit
                                        </button>

                                        <button 
                                        className="btn btn-primary mx-1"
                                        onClick={()=>{
                                            if(window.confirm('Are you sure you want to delete this user?')){
                                                props.deleteUser(e.id)}}
                                            }
                                        >Delete</button>
                                    </td>
                                </tr>)) : (
                                <tr>
                                    <th colSpan="4">No Users</th>
                                    {props.changeAddOrEdit(false)}
                                </tr>
                            )

                    }

                </tbody>
            </table>
        </div>
    );
}

export default UserTable;