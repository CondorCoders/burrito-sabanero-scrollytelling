import "./App.css";
import { MusicProvider } from "./contexts/MusicContext";
import { BakerThanks } from "./Scenes/BakerThanks/BakerThanks";
import { BurroTalks } from "./Scenes/BurroTalks/BurroTalks";
import { Credits } from "./Scenes/Credits/Credits";
import { FlourBags } from "./Scenes/FlourBags/FlourBags";
import { HelpBaker } from "./Scenes/HelpBaker/HelpBaker";
import { Hero } from "./Scenes/Hero/Hero";
import { House } from "./Scenes/House/House";
import { MomAndDaughter } from "./Scenes/MomAndDaughter/MomAndDaughter";
import { MomTalks } from "./Scenes/MomTalks/MomTalks";
import { Recap } from "./Scenes/Recap/Recap";
import { StarAndNightSky } from "./Scenes/StarAndNightSky/StarAndNightSky";
import { Sunrise } from "./Scenes/Sunrise/Sunrise";
import { TalkToBaker } from "./Scenes/TalkToBaker/TalkToBaker";
import { TheEnd } from "./Scenes/TheEnd/TheEnd";

function App() {
  return (
    <MusicProvider>
      <Hero />
      <Sunrise />
      <HelpBaker />
      <TalkToBaker />
      <FlourBags />
      <BakerThanks />
      <MomAndDaughter />
      <MomTalks />
      <BurroTalks />
      <StarAndNightSky />
      <House />
      <Recap />
      <TheEnd />
      <Credits />
    </MusicProvider>
  );
}

export default App;
