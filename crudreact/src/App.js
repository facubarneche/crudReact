import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import UserTable from './components/UserTable'
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

function App() {

  //state
  const [users, setUsers] = useState([ ])
  
  //arr users
  const [addOrEdit, setAddOrEdit] = useState(false) // true  (edit) false(add)

  //delete User
  const deleteUser = (id) => setUsers(users.filter(e => e.id !== id))

  //edit User
  const [editUser, setEditUser] = useState()
  const [currentEdit, setCurrentEdit] = useState()
  const edit = (user) => {
    setEditUser(user)
    setCurrentEdit(user)
  }

  //add User
  const addUser = (newUser) => {

    newUser.id = uuidv4();

    setUsers([
      ...users,
      newUser
    ])
  }

  //when click the button edit user, users is edited and it change to add user
  const editSubmitUser = (data) => {
  console.log(currentEdit)
  console.log(data)
  
    const filter = users.filter(user => user.name !== currentEdit.name) //filtra el elemento a editar para luego reemplazarlo
    data.id = uuidv4();
    setUsers([...filter,
            data
  ])
    setAddOrEdit(false)
  }

  //change addOrEdit, true or false
  const changeAddOrEdit = (condicion) => {
    setAddOrEdit(condicion)
  }

  return (
    <div className="container">
      {
        addOrEdit ? (<EditUserForm editUser={editUser} editSubmitUser={editSubmitUser} />) : (<AddUserForm addUser={addUser} users={users} />) //edit or add inputs
      }

      <UserTable
        users={users}
        deleteUser={deleteUser}
        changeAddOrEdit={changeAddOrEdit}
        edit={edit}
      />

    </div>
  );
}

export default App;
