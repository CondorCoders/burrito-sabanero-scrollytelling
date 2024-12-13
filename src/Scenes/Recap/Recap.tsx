import { Scene } from "../../components/Scene/Scene";
import styles from "./Recap.module.css";

export const Recap = () => {
  return (
    <Scene backgroundColor="#1A232F" gradient={false}>
      <Scene.Text
        text="Así, desde el alba hasta el anochecer, el burrito sabanero llegó a Belén."
        animations={{
          from: {
            top: "10%",
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
          containerClassName={`${styles.recapScene} ${styles.topScene}`}
          backgroundImage="/Elements/SunriseRecap.webp"
          altImage="Amanecer con un burrito corriendo"
          animations={{
            from: {
              opacity: "0",
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
        <Scene.Item
          center
          containerClassName={styles.recapScene}
          backgroundImage="/Elements/BakerRecap.webp"
          altImage="Panadero sonriendo"
          animations={{
            from: {
              opacity: "0",
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
        <Scene.Item
          center
          containerClassName={styles.recapScene}
          backgroundImage="/Elements/MomAndDaughterRecap.webp"
          altImage="Panadero sonriendo"
          animations={{
            from: {
              opacity: "0",
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
      </Scene.Container>
    </Scene>
  );
};
