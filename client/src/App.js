import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import SingleMovie from "./pages/SingleMovie";
import Admin from "./pages/Admin";



function App() {

    return(
<div className="App">

    <h1>I'm from App.js</h1>

    <BrowserRouter>
        <Routes>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home/>} />
            <Route path="/movie/:id" element={<SingleMovie />} />
            <Route path={"/admin"} element={<Admin/>}/>
        </Routes>
    </BrowserRouter>

</div>
    )


}

export default App;
