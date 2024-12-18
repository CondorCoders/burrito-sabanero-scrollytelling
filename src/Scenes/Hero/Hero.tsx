import { useContext, useEffect, useRef } from "react";
import { Scene } from "../../components/Scene/Scene";
import styles from "./Hero.module.css";
import { MusicContext } from "../../contexts/MusicContext";

export const Hero = () => {
  const { setPlayMusic } = useContext(MusicContext);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    // Automatically show the dialog on page load
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, []);

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <Scene
      classNames={styles.container}
      gradient={false}
      backgroundImage="/Backgrounds/Sky.webp"
      altImage="Cielo"
    >
      <div className={styles.containerInner}>
        <h1 className={styles.heading}>
          Las aventuras del <br />
          <span className={styles.accent}>Burrito Sabanero</span>
        </h1>
        <p className={styles.subheading}>
          Inspirado en la clásica canción navideña y creado con cariño por la
          comunidad de Condor Coders
        </p>
        <dialog ref={dialogRef} className={styles.dialog}>
          <p>
            <strong>Importante:</strong> <br />
            La página utiliza música como parte esencial de la experiencia, por
            lo que te recomendamos usar audífonos para disfrutar al máximo cada
            detalle. Si estás en un espacio público, ajusta el volumen de tu
            dispositivo para no interrumpir a quienes te rodean.
          </p>
          <div className={styles.actions}>
            <button
              onClick={() => {
                setPlayMusic(true);
                closeDialog();
              }}
            >
              Continuar con Audio
            </button>
            <button
              onClick={() => {
                setPlayMusic(false);
                closeDialog();
              }}
            >
              Continuar sin Audio
            </button>
          </div>
        </dialog>
      </div>
    </Scene>
  );
};
