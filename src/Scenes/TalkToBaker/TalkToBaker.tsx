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
