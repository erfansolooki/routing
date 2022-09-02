import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import MapPage from "./Pages/Map";
import LoginPage from "./Pages/LoginPage";
import VehiclesListProvider from "./Context/VehiclesListProvider";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AuthProvider>
          <VehiclesListProvider>
            <Routes>
              <Route element={<ProtectedRoutes />}>
                <Route path="/" element={<MapPage />} />
              </Route>
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </VehiclesListProvider>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
