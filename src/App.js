import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from 'react-router-dom'
import { Home } from "./components/Home/Home";
import { Catalog } from "./components/Catalog/Catalog";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register.js"


function App() {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>


      {/* JAVASCRIPTS */}
      <script src="layout/scripts/jquery.min.js"></script>
      <script src="layout/scripts/jquery.backtotop.js"></script>
      <script src="layout/scripts/jquery.mobilemenu.js"></script>
    </>

  );
}

export default App;
