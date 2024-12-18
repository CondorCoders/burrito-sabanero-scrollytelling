import gsap from "gsap";
import "./App.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Scenes } from "./Scenes/Scenes";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  return <Scenes />;
}

export default App;
