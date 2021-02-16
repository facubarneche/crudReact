import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import { v4 as uuidv4 } from 'uuid'
import ViewUsers from './components/ViewUsers'
import AddUsersForm from './components/AddUserForm'
import EditUserForm from './components/EditUserForm'

function App() {

  const usersData = []

  //state
  const [users, setUsers] = useState(usersData)

  //add user
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  //remove user
  const removeUser = (id) => {

    setUsers(users.filter(user => user.id !== id))
  }

  //edit user

  const [editing, setEditing] = useState(false)

  const [currentUser, setCurrentUser] = useState(
    { id: 'null', name: '', username: '' }
  )

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser(
      { id: user.id, name: user.name, username: user.username }
    )
  }

  const updateUser = (id, updateUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }






  return (
    <div className="container">
      {
        editing ? (
          <div>
            <h2>Edit User</h2>
            <EditUserForm
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
            <div>
              <h2>Add User</h2>
              <AddUsersForm addUser={addUser} />
            </div>
          )
      }
      <ViewUsers
        users={users}
        removeUser={removeUser}
        editRow={editRow}
      />
      



    


    </div>
  );
}

export default App;
