import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";



function App() {

    return(
<div className="App">

    <h1>Hello</h1>

    <BrowserRouter>
        <Routes>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/*<Route path="/" element={<Home/>} />*/}

        </Routes>
    </BrowserRouter>

</div>
    )


}

export default App;
