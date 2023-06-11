import { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
    console.log("users", users);
  };
  return (
    <div>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
