import { Scene } from "../../components/Scene/Scene";
import styles from "./Credits.module.css";

export const Credits = () => {
  return (
    <Scene
      classNames={styles.sky}
      backgroundImage="/Backgrounds/Sky.webp"
      altImage="Cielo"
    />
  );
};
