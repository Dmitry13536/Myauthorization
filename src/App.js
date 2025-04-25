import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./Components/Login";
import SingUp from "./Components/SIgnup";
import Profile from "./Components/Profile";
import Settings from "./Components/Settings";
import Test from "./Components/Test";

function App() {

  const UsersData = [
    {
      id: 1,
      email: "aaa",
      password: 1234,
      name: "Ddvdvima",
      surname: "Sadvdvrychev",
    },
    {
      id: 2,
      email: "ddd",
      password: 123,
      name: "Dimwwda",
      surname: "Sarywdwdchev",
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login data={UsersData} />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/:id" element={<Profile data={UsersData} />} />
        <Route path="/settings/:id" element={<Settings/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
