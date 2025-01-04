import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard.jsx";
import ViewAll from "./pages/ViewAll.jsx";

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
    </BrowserRouter>
  );
}

export default App;
