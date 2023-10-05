import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />{" "}
        {/* I want my NavBar to be displayed on all the pages, that is why I am not including it inside <Routes> */}
        <Routes>
          {/* This line of code gives me an opportunity to set the routes if we want to NOT re-render the page everytime I go to another React component. I include <Route> for every such React component, and it renders specific component according to the path given */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute> // This is done to make protected Route
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
