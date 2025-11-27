import "./App.css";
import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import InfoMain from "./pages/InfoMain";
import Projects from "./pages/Projects";
import clickSound from "./assets/sounds/click.mp3";

const App = () => {
  useEffect(() => {
    const playClickSound = () => {
      const audio = new Audio(clickSound);
      audio.volume = 0.3;
      audio.play().catch((error) => {
        console.log("Could not play click sound:", error);
      });
    };

    document.addEventListener("click", playClickSound, true);

    // Cleanup: remove event listener on unmount
    return () => {
      document.removeEventListener("click", playClickSound, true);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<InfoMain />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
