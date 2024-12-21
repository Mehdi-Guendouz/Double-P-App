import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainPage from "./pages/MainPage";
import PrivateRoutes from "./components/shared/PrivateRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/" element={<PrivateRoutes />}>
        <Route path="/main" element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;
