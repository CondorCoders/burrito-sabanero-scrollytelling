import { Scene } from "../../components/Scene/Scene";
import styles from "./Sunrise.module.css";

export const Sunrise = () => {
  return (
    <Scene backgroundImage="/Backgrounds/Sunrise.webp" altImage="Amanecer">
      <Scene.Item
        containerClassName={styles.clouds}
        className={styles.cloudImage}
        backgroundImage="/Transitions/Cloud.webp"
        altImage="Clouds"
        animations={{
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
      <Scene.Text
        text="Por un sendero al alba comenzó, el burrito sabanero su viaje emprendió."
        animations={{
          from: {
            top: "30%",
            opacity: 0,
          },
          to: {
            top: "25%",
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
          backgroundImage="/Characters/BurritoRunning.webp"
          altImage="Burrito corriendo"
          animations={{
            from: {
              bottom: "-5%",
              transform: "translate(-90%, 0) rotate(-40deg)",
            },
            to: {
              bottom: "18%",
              transform: "translate(-50%, 0) rotate(0deg)",
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
