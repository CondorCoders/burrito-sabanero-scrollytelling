import { AudioMenu } from "../components/AudioMenu/AudioMenu";
import { MusicProvider } from "../contexts/MusicContext";
import { BakerThanks } from "./BakerThanks/BakerThanks";
import { BurroTalks } from "./BurroTalks/BurroTalks";
import { Credits } from "./Credits/Credits";
import { FlourBags } from "./FlourBags/FlourBags";
import { HelpBaker } from "./HelpBaker/HelpBaker";
import { Hero } from "./Hero/Hero";
import { House } from "./House/House";
import { MomAndDaughter } from "./MomAndDaughter/MomAndDaughter";
import { MomTalks } from "./MomTalks/MomTalks";
import { Recap } from "./Recap/Recap";
import { StarAndNightSky } from "./StarAndNightSky/StarAndNightSky";
import { Sunrise } from "./Sunrise/Sunrise";
import { TalkToBaker } from "./TalkToBaker/TalkToBaker";
import { TheEnd } from "./TheEnd/TheEnd";
export const Scenes = () => {
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
      <AudioMenu />
    </MusicProvider>
  );
};
