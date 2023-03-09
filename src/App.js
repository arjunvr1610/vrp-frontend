import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Screens/Home";



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
