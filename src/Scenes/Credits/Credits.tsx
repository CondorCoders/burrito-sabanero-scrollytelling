import { Scene } from "../../components/Scene/Scene";
import styles from "./Credits.module.css";

export const Credits = () => {
  return (
    <Scene
      classNames={styles.sky}
      backgroundImage="/Backgrounds/Sky.webp"
      altImage="Cielo"
    >
      <div className={styles.containerInner}>
        <h1 className={styles.heading}>Créditos</h1>
        <p className={styles.subheading}>
          Creado por la comunidad{" "}
          <a className={styles.link} href="https://github.com/CondorCoders">
            CondorCoders
          </a>
        </p>
        <p className={styles.subheading}>
          Imagenes creadas con{" "}
          <a className={styles.link} href="https://leonardo.ai/">
            Leonardo AI
          </a>
        </p>
        <p className={styles.subheading}>
          Música de fondo:{" "}
          <a
            className={styles.link}
            href="https://uppbeat.io/t/simon-folwar/elves-workshop"
          >
            Elves Workshop
          </a>
        </p>
        <p className={styles.subheading}>
          Efectos de sonido:{" "}
          <a className={styles.link} href="https://www.zapsplat.com/">
            Zapspla
          </a>
        </p>
      </div>
    </Scene>
  );
};
