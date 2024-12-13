import { Scene } from "../../components/Scene/Scene";
import styles from "./StarAndNightSky.module.css";

export const StarAndNightSky = () => {
  return (
    <Scene
      backgroundImage="/Backgrounds/NightSky.webp"
      altImage="Cielo en la noche"
    >
      <Scene.Foreground
        backgroundImage="/Foregrounds/DarkTrees.webp"
        altImage="Field"
        animations={{
          from: {
            bottom: "-50%",
          },
          to: {
            bottom: 0,
          },
          scroll: {
            start: "top bottom",
            end: "top center",
          },
        }}
      />
      <Scene.Text
        text="Al caer la noche, el burro miró, la estrella más alta su ruta marcó."
        animations={{
          from: {
            top: "20%",
            opacity: 0,
          },
          to: {
            top: "10%",
            opacity: 1,
          },
          scroll: {
            start: "top bottom",
            end: "top center",
          },
        }}
      />
      <Scene.Container>
        <Scene.Item
          center
          containerClassName={styles.star}
          backgroundImage="/Elements/Star.webp"
          altImage="Estrella"
          animations={{
            from: {
              bottom: "20%",
            },
            to: {
              bottom: "40%",
            },
            scroll: {
              start: "start bottom",
              end: "bottom bottom",
            },
          }}
        />
      </Scene.Container>
    </Scene>
  );
};
