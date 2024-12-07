import { Scene } from "../../components/Scene/Scene";
import styles from "./BakerThanks.module.css";

export const BakerThanks = () => {
  return (
    <Scene backgroundColor="#E0BE67" gradient={false}>
      <Scene.Item
        className={styles.gradient}
        containerClassName={styles.grass}
        backgroundImage="/Transitions/Grass.webp"
        altImage="Grass"
        animations={{
          from: {
            top: "-15%",
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
      <Scene.Item
        containerClassName={`${styles.breadRight} ${styles.bread}`}
        backgroundImage="/Elements/Bread.webp"
        altImage="Pan"
        animations={{
          from: {
            opacity: "0.5",
            bottom: "300px",
          },
          to: {
            opacity: "1",
            bottom: "400px",
          },
          scroll: {
            start: "start bottom",
            end: "bottom bottom",
          },
        }}
      />
      <Scene.Item
        containerClassName={styles.bread}
        backgroundImage="/Elements/Bread.webp"
        altImage="Pan"
        animations={{
          from: {
            opacity: "0.5",
            bottom: "300px",
          },
          to: {
            opacity: "1",
            bottom: "500px",
          },
          scroll: {
            start: "start bottom",
            end: "bottom bottom",
          },
        }}
      />
      <Scene.Item
        center
        backgroundImage="/Characters/BakerHappy.webp"
        altImage="Panadero Feliz"
        animations={{
          from: {
            opacity: "0.5",
          },
          to: {
            opacity: "1",
          },
          scroll: {
            start: "start bottom",
            end: "bottom bottom",
          },
        }}
      />
    </Scene>
  );
};
