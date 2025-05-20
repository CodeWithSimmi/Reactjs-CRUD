

import "./App.css";
import Nav from "./Component/Nav";
import { Route, Routes } from "react-router-dom";
import Footer from "./Component/Footer";

import Privatecomponent from "./Component/Privatecomponent";

import LoginForm from "./Component/LoginForm";

import LandingPage from "./pages/LandingPage";
import SignupForm from "./Component/SignupForm";

function App() {
  return (
    <>
      <div className="App">
        <Nav />

        <Routes>
          <Route element={<Privatecomponent />}>
            <Route path="/profile" element={<h6> React Crud Operations</h6>} />
          </Route>

          {/* Public routes */}

          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
