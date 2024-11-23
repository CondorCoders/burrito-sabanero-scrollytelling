import { Scene } from "../../components/Scene/Scene";
import styles from "./Sunrise.module.css";

export const Sunrise = () => {
  return (
    <Scene backgroundImage="/Backgrounds/Sunrise.webp" altImage="Amanecer">
      <Scene.Foreground
        containerClassName={styles.clouds}
        backgroundImage="/Transitions/Cloud.webp"
        altImage="Clouds"
        animations={{
          from: {
            top: "-20%",
          },
          to: {
            top: "-120%",
          },
          scroll: {
            start: "center bottom",
          },
        }}
      />
      <Scene.Foreground
        backgroundImage="/Foregrounds/Field.webp"
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
      <Scene.Item
        center
        backgroundImage="/Characters/BurritoRunning.webp"
        altImage="Burrito corriendo"
        animations={{
          from: {
            bottom: "-5%",
            left: "-10%",
            transform: "rotate(-40deg)",
          },
          to: {
            bottom: "25%",
            left: "50%",
            transform: "translate(-50%, 0) rotate(0deg)",
          },
          scroll: {
            markers: true,
            start: "start bottom",
            end: "bottom bottom",
          },
        }}
      />
    </Scene>
  );
};
