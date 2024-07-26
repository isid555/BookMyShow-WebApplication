import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleMovie from "./pages/SingleMovie";
import Admin from "./pages/Admin";
import Partner from "./pages/Partner";
import ProtectedRoute from "./components/ProtectedRoute";



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
            <Route path={"/partner"} element={<ProtectedRoute><Partner/></ProtectedRoute>   }/>
        </Routes>
    </BrowserRouter>

</div>
    )


}

export default App;
