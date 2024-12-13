import { Scene } from "../../components/Scene/Scene";
import styles from "./MomAndDaughter.module.css";

export const MomAndDaughter = () => {
  return (
    <Scene
      classNames={styles.background}
      imageClassNames={styles.imgBackground}
      backgroundImage="/Backgrounds/DarkSky.webp"
      altImage="Amanecer"
    >
      <Scene.Foreground
        className={styles.foreground}
        backgroundImage="/Foregrounds/FieldDark.webp"
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
        text="Cuando el sol comenzaba a bajar, halló a una madre que no podía avanzar."
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
          backgroundImage="/Characters/MomAndDaughter.webp"
          altImage="Mama e hija"
          animations={{
            from: {
              bottom: "-25%",
            },
            to: {
              bottom: "0",
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
