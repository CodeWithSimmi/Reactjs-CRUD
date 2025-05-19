import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route element={<Privatecomponent />}> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/" element={<h6>Product Listing</h6>} />
          <Route path="/add" element={<h6>Add Product</h6>} />
          <Route path="/update" element={<h6>update Product</h6>} />
          <Route path="/logout" element={<h6>Logout</h6>} />
          <Route path="/profile" element={<h6>Profile</h6>} />
          <Route path="/products" element={<ProductPage />} />
        {/* </Route> */}



        {/* Public routes */}

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
