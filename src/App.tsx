import "./App.css";
import { HelpBaker } from "./Scenes/HelpBaker/HelpBaker";
import { Hero } from "./Scenes/Hero/Hero";
import { Sunrise } from "./Scenes/Sunrise/Sunrise";

function App() {
  return (
    <>
      <Hero />
      <Sunrise />
      <HelpBaker />
    </>
  );
}

export default App;
