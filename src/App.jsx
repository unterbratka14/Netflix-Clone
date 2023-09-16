import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./components/context/AUTHcontext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />{" "}
        {/* I want my NavBar to be displayed on all the pages, that is why I am not including it inside <Routes> */}
        <Routes>
          {/* This line of code gives me an opportunity to set the routes if we want to NOT re-render the page everytime I go to another React component. I include <Route> for every such React component, and it renders specific component according to the path given */}
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
