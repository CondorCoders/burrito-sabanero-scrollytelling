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
      <Scene.Text
        text="El panadero dijo con gratitud sincera:"
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
      <Scene.Text
        invert
        text="“¡Gracias, burrito, por tu gran carrera! Hoy hornearé pan con todo mi afán, y mi alegría llenará el pueblo de pan.”"
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
