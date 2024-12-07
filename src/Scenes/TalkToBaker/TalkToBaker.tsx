import { Scene } from "../../components/Scene/Scene";
import styles from "./TalkToBaker.module.css";

export const TalkToBaker = () => {
  return (
    <Scene backgroundColor="#E0BE67" gradient={false}>
      <Scene.Item
        className={styles.gradient}
        containerClassName={styles.wheat}
        backgroundImage="/Transitions/Wheat.webp"
        altImage="Wheat"
        animations={{
          from: {
            top: "-5%",
          },
          to: {
            top: "-18%",
          },
          scroll: {
            start: "top bottom",
            end: "center bottom",
          },
        }}
      />
      <Scene.Text
        text="En un pueblo vio a un panadero esforzarse, la harina era mucha y no podía cargarse"
        animations={{
          from: {
            top: "-20%",
            opacity: 0,
          },
          to: {
            top: "-25%",
            opacity: 1,
          },
          scroll: {
            start: "top bottom",
            end: "top center",
          },
        }}
      />
      <Scene.Text
        text="El burrito le dijo:"
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
        text="“Déjame ayudar, llevaré la carga y podrás hornear”"
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
        backgroundImage="/Characters/BurritoWalking.webp"
        altImage="Burro Caminando"
        animations={{
          from: {
            left: "30%",
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
    </Scene>
  );
};
