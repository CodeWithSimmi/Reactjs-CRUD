import "./App.css";
import Nav from "./Component/Nav";
import { Route, Routes } from "react-router-dom";
import Footer from "./Component/Footer";

import Privatecomponent from "./Component/Privatecomponent";

import LoginForm from "./Component/LoginForm";

import LandingPage from "./pages/LandingPage";
import SignupForm from "./Component/SignupForm";
import ProductTable from "./Component/ProductTable";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <>
      <div className="App">
        <Nav />

        <Routes>
          <Route element={<Privatecomponent />}>
            <Route path="/profile" element={<ProductTable />} />
          </Route>

          {/* Public routes */}

          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
        <Navbar/>
        <Footer />
      </div>
    </>
  );
}

export default App;
