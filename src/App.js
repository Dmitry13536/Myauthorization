import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./Components/Login";
import SingUp from "./Components/SIgnup";
import Profile from "./Components/Profile";
import Settings from "./Components/Settings";

function App() {

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
