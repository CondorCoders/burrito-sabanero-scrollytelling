import { Scene } from "../../components/Scene/Scene";

export const MomTalks = () => {
  return (
    <Scene backgroundColor="#254E4D" gradient={false}>
      <Scene.Text
        text="Su hija agotada no podía seguir, y con voz cansada comenzó a pedir:"
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
        text="El camino es tan largo, ya no puedo más,mi cuerpo está débil, ya no puedo dar más."
        animations={{
          from: {
            top: "40%",
            opacity: 0,
          },
          to: {
            top: "30%",
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
        backgroundImage="/Characters/MomCloseUp.webp"
        altImage="Rostro de mama hablando"
        animations={{
          from: {
            opacity: "0.5",
            bottom: 0,
          },
          to: {
            opacity: "1",
            bottom: "10%",
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
