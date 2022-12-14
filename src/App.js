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
import { useSetProfileData } from "./hooks/useSetProfileData";
import { RouteGuard } from "./components/common/RouteGuard";

function App() {
  const [user, setUser] = useSetUser()
  const [profileData, setProfileData] = useSetProfileData()

  return (
    <AuthContext.Provider value={{ user, setUser, saveUserToLocalStorage, profileData, setProfileData, saveProfileInfoToLocalStorage, isAuthenticated: !!user.accessToken || false }}>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
        <Route path="/details/:offerId" element={<Details />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route element={<RouteGuard />}>
          <Route path="/create" element={<CreateOffer />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/edit/:offerId" element={<Edit />}></Route>
          <Route path="/delete/:offerId" element={<Delete />}></Route>
          <Route path="/profile/:userId" element={<Profile />}></Route>
        </Route>

      </Routes>


    </AuthContext.Provider>
  );
}

export default App;
