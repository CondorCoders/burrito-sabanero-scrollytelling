import { Scene } from "../../components/Scene/Scene";

export const TheEnd = () => {
  return (
    <Scene backgroundColor="#1A232F" gradient={false}>
      <Scene.Foreground
        backgroundImage="/Foregrounds/Stars.webp"
        altImage="Estrellas"
        animations={{
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
          scroll: {
            start: "top bottom",
            end: "bottom center",
          },
        }}
      />
      <Scene.Text
        text="Con bondad y amor por donde pasó, la magia de la Navidad siempre dejó."
        animations={{
          from: {
            top: "20%",
            opacity: 0,
          },
          to: {
            top: "5%",
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
        backgroundImage="/Characters/BurritoFeliz.webp"
        altImage="Burrito sonriendo"
        animations={{
          from: {
            opacity: "0.5",
            bottom: "-10%",
          },
          to: {
            opacity: "1",
            bottom: 0,
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
