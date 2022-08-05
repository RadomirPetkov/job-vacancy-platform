import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from 'react-router-dom'
import { Home } from "./components/Home/Home";
import { Catalog } from "./components/Catalog/Catalog";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register.js"
import { AuthContext } from "./contexts/authContext"
import { saveUserToLocalStorage } from "./services/authService"
import { useState } from "react"
import { useSetUser } from "./hooks/useSetUser";


function App() {
  const [user, setUser] = useSetUser()
  
  return (
    <AuthContext.Provider value={{ user, setUser, saveUserToLocalStorage }}>
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
    </AuthContext.Provider>
  );
}

export default App;
