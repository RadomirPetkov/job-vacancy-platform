import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from 'react-router-dom'
import { Home } from "./components/Home/Home";
import { Catalog } from "./components/Catalog/Catalog";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register.js"
import { AuthContext } from "./contexts/authContext"
import { saveUserToLocalStorage, saveProfileInfoToLocalStorage } from "./services/authService"
import { useSetUser } from "./hooks/useSetUser";
import { Logout } from "./components/Logout/Logout";
import { CreateOffer } from "./components/CreateOffer/CreateOffer";
import { Details } from "./components/Details/Details";
import { Edit } from "./components/Edit/Edit";
import { Delete } from "./components/Delete/Delete";
import { Profile } from "./components/Profile/Profile";


function App() {
  const [user, setUser] = useSetUser()

  return (
    <AuthContext.Provider value={{ user, setUser, saveUserToLocalStorage, saveProfileInfoToLocalStorage }}>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/create" element={<CreateOffer />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/details/:offerId" element={<Details />}></Route>
          <Route path="/edit/:offerId" element={<Edit />}></Route>
          <Route path="/delete/:offerId" element={<Delete />}></Route>
          <Route path="/profile/:userId" element={<Profile />}></Route>
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
