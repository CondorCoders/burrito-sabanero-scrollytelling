import { Scene } from "../../components/Scene/Scene";
import styles from "./HelpBaker.module.css";

export const HelpBaker = () => {
  return (
    <Scene backgroundImage="/Backgrounds/Afternoon.webp" altImage="Atardecer">
      <Scene.Item
        className={styles.gradient}
        containerClassName={styles.grass}
        backgroundImage="/Transitions/Grass.webp"
        altImage="Grass"
        animations={{
          from: {
            top: "-5%",
          },
          to: {
            top: "-25%",
          },
          scroll: {
            start: "top bottom",
            end: "center bottom",
          },
        }}
      />

      <Scene.Foreground
        className={styles.campo}
        backgroundImage="/Foregrounds/FieldWithHouse.webp"
        altImage="Campo con una casa"
        animations={{
          from: {
            bottom: "-40%",
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
        text="El sol despuntaba entre el cielo rosado, y la brisa matutina le daba cuidado."
        animations={{
          from: {
            top: "30%",
            opacity: 0,
          },
          to: {
            top: "15%",
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
          containerClassName={styles.flour}
          backgroundImage="/Elements/Flour.webp"
          altImage="Panadero con cara de angustiado"
          animations={{
            from: {
              bottom: "5%",
            },
            to: {
              bottom: "20%",
            },
            scroll: {
              start: "start bottom",
              end: "bottom bottom",
            },
          }}
        />
        <Scene.Item
          center
          backgroundImage="/Characters/Baker.webp"
          altImage="Panadero con cara de angustiado"
          animations={{
            from: {
              left: "30%",
            },
            to: {
              left: "60%",
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
