import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleMovie from "./pages/SingleMovie";
import Admin from "./pages/Admin";
import Partner from "./pages/Partner";
import ProtectedRoute from "./components/ProtectedRoute";
import BookShow from "./pages/BookShow";



function App() {

    return(
<div className="App">

    <h1>Book My Show</h1>

    <BrowserRouter>
        <Routes>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home/>} />
            <Route path="/movie/:id" element={<SingleMovie />} />
            <Route path={"/admin"} element={<Admin/>}/>
            <Route path={"/partner"} element={<Partner/>   }/>
            <Route path="/book-show/:id" element={<BookShow/>} />
        </Routes>
    </BrowserRouter>

</div>
    )


}

export default App;
