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
import Lottie from "lottie-react";
import background from "../src/animations/background.json"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      {/* <Lottie
        style={{ position: "absolute",top:10, height: "100%", width: "99%" }}
        speed={0.01}
        animationData={background}
        loop={true}
      /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
