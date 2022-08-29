import React from "react";
import Nav from "./componnent/Nav";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Account from "./pages/Account";
import ProtectedRoute from './componnent/ProtextedRoute'
import Footer from "./componnent/Footer";

function App() {
  return (
    
    <Router>
    <AuthContextProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
      </Routes> 
      <Footer />
      </AuthContextProvider>
    </Router>
  );
}

export default App;
