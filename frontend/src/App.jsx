import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard.jsx";
import ViewAll from "./pages/ViewAll.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/view-all" element={<ViewAll />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
