import "./App.css";
import Nav from "./Component/Nav";
import { Route, Routes } from "react-router-dom";
import Footer from "./Component/Footer";
import Privatecomponent from "./Component/Privatecomponent";
import LoginForm from "./Component/LoginForm";
import LandingPage from "./pages/LandingPage";
import SignupForm from "./Component/SignupForm";
import ProductTable from "./Component/ProductTable";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Nav />

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          <Route element={<Privatecomponent />}>
            <Route path="/profile" element={<ProductTable />} />
          </Route>

          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
