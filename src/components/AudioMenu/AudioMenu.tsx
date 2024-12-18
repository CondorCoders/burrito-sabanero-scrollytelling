import { useContext } from "react";
import styles from "./AudioMenu.module.css";
import { MusicContext } from "../../contexts/MusicContext";

export const AudioMenu = () => {
  const { playMusic, setPlayMusic } = useContext(MusicContext);
  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        id="music"
        checked={playMusic}
        onChange={() => setPlayMusic(!playMusic)}
      />
      <label htmlFor="music">Música</label>
    </div>
  );
};
