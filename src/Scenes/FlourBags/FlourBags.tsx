import { Scene } from "../../components/Scene/Scene";
import styles from "./FlourBags.module.css";

export const FlourBags = () => {
  return (
    <Scene backgroundImage="/Backgrounds/Sundown.webp" altImage="Atardecer">
      <Scene.Item
        className={styles.gradient}
        containerClassName={styles.wheat}
        backgroundImage="/Transitions/Wheat.webp"
        altImage="Wheat"
        animations={{
          from: {
            top: "0",
          },
          to: {
            top: "-10%",
          },
          scroll: {
            start: "top bottom",
            end: "center bottom",
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
        text="Con pasos ligeros al molino partió, y pronto con la harina de regreso volvió."
        animations={{
          from: {
            top: "30%",
            opacity: 0,
          },
          to: {
            top: "20%",
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
          backgroundImage="/Characters/BurritoWalkingWithBag.webp"
          altImage="Burrito corriendo"
          animations={{
            from: {
              left: "40%",
            },
            to: {
              left: "50%",
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
