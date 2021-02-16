import React from 'react'

const ViewUsers = (props) => {

    return (
        <div>
            <table className="table w-50">
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
                        props.users.length > 0 ?
                            props.users.map((user, e) => (
                                <tr key={user.id}>
                                    <th scope="row">{e + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>
                                        <button 
                                        className="btn btn-primary mx-1"
                                        onClick={()=> {props.editRow(user)}}
                                        >Edit</button>
                                        <button
                                            className="btn btn-primary mx-1"
                                            onClick={()=> {props.removeUser(user.id)}}
                                        >Delete</button>
                                    </td>
                                </tr>
                            )) :
                            <tr>
                                <td colSpan={3}>No Users</td>
                            </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ViewUsers;