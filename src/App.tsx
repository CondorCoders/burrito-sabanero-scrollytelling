import "./App.css";
import { BakerThanks } from "./Scenes/BakerThanks/BakerThanks";
import { FlourBags } from "./Scenes/FlourBags/FlourBags";
import { HelpBaker } from "./Scenes/HelpBaker/HelpBaker";
import { Hero } from "./Scenes/Hero/Hero";
import { Sunrise } from "./Scenes/Sunrise/Sunrise";
import { TalkToBaker } from "./Scenes/TalkToBaker/TalkToBaker";

function App() {
  return (
    <>
      <Hero />
      <Sunrise />
      <HelpBaker />
      <TalkToBaker />
      <FlourBags />
      <BakerThanks />
    </>
  );
}

export default App;
