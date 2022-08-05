import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from 'react-router-dom'
import { Home } from "./components/Home/Home";
import { Catalog } from "./components/Catalog/Catalog";
function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>

        </Routes>


        {/* JAVASCRIPTS */}
        <script src="layout/scripts/jquery.min.js"></script>
        <script src="layout/scripts/jquery.backtotop.js"></script>
        <script src="layout/scripts/jquery.mobilemenu.js"></script>
      </>

    </div>
  );
}

export default App;
