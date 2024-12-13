import { Scene } from "../../components/Scene/Scene";

export const BurroTalks = () => {
  return (
    <Scene backgroundColor="#254E4D" gradient={false}>
      <Scene.Text
        invert
        text="“Sube conmigo,”"
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
      <Scene.Text
        text="dijo el burro con calma,"
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
      <Scene.Item
        center
        backgroundImage="/Characters/BurritoCloseUp.webp"
        altImage="Rostro de burro hablando"
        animations={{
          from: {
            opacity: "0.5",
            bottom: "20%",
          },
          to: {
            opacity: "1",
            bottom: "40%",
          },
          scroll: {
            start: "start bottom",
            end: "bottom bottom",
          },
        }}
      />
      <Scene.Text
        invert
        text="“Yo llevo a tu hija, y tú sigue con alma. La tarde nos envuelve en su luz tan serena, y la estrella nos guía en la noche plena.”"
        animations={{
          from: {
            bottom: 0,
            opacity: 0,
          },
          to: {
            bottom: "15%",
            opacity: 1,
          },
          scroll: {
            start: "top bottom",
            end: "bottom bottom",
          },
        }}
      />
    </Scene>
  );
};
