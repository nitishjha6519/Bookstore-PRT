import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Bookslist from "./components/Bookslist";
import Addnewbook from "./components/Addnewbook";
import Bookdetails from "./components/Bookdetails";
import Protectedroutes from "./utils/Protectedroutes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/bookslist"
            element={
              <Protectedroutes>
                <Bookslist />
              </Protectedroutes>
            }
          />

          <Route
            path="/addnewbook"
            element={
              <Protectedroutes>
                <Addnewbook />
              </Protectedroutes>
            }
          />

          <Route
            path="/bookdetails"
            element={
              <Protectedroutes>
                <Bookdetails />
              </Protectedroutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
