import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./Components/Login";
import SingUp from "./Components/SIgnup";
import Profile from "./Components/Profile";
import Settings from "./Components/Settings";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      email: "aaa",
      password: "1234",
      name: "Ddvdvima",
      surname: "Sadvdvrychev",
    },
    {
      id: 2,
      email: "ddd",
      password: "123",
      name: "Dimwwda",
      surname: "Sarywdwdchev",
    },
  ]);

  const addNewUser = (user) => {
    if (users.find((usern) => usern.email === user.email)) {
      console.log("ban");
      return true;
    }
    setUsers([...users, { ...user, id: new Date().getTime() }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // useEffect(() => { отслеживание пользователей
  //   console.log(users);
  // }, [users.length]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login data={users} />} />
        <Route path="/signup" element={<SingUp add={addNewUser} />} />
        <Route path="/:id" element={<Profile data={users} />} />
        <Route path="/settings/:id" element={<Settings del={deleteUser} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
