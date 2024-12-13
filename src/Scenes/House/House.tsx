import { Scene } from "../../components/Scene/Scene";
import styles from "./House.module.css";

export const House = () => {
  return (
    <Scene backgroundImage="/Backgrounds/Night.webp" altImage="Cielo Nocturno">
      <Scene.Foreground
        className={styles.house}
        backgroundImage="/Foregrounds/House.webp"
        altImage="Casa"
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
        text="`¡Sigue adelante!`, parecía decir, `El portal está cerca, no debes desistir.`"
        animations={{
          from: {
            top: 0,
            opacity: 0,
          },
          to: {
            top: "-20%",
            opacity: 1,
          },
          scroll: {
            start: "top bottom",
            end: "top center",
          },
        }}
      />
      <Scene.Text
        text="Finalmente, bajo un cielo estrellado, el burrito llegó al portal tan ansiado."
        animations={{
          from: {
            top: "20%",
            opacity: 0,
          },
          to: {
            top: 0,
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
          containerClassName={styles.burrito}
          backgroundImage="/Characters/BurritoNavideño.webp"
          altImage="Burrito cargando regalos y caminando"
          animations={{
            from: {
              bottom: "-5%",
              left: "40%",
            },
            to: {
              bottom: "10%",
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
