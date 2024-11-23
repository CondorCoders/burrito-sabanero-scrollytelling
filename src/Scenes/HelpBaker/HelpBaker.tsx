import { Scene } from "../../components/Scene/Scene";

export const HelpBaker = () => {
  return (
    <Scene backgroundImage="/Backgrounds/Afternoon.webp" altImage="Atardecer">
      <Scene.Foreground
        backgroundImage="/Foregrounds/FieldWithHouse.webp"
        altImage="Campo con una casa"
        animations={{
          from: {
            y: -100,
          },
          to: {
            y: 0,
          },
        }}
      />
      <Scene.Item
        backgroundImage="/Elements/Flour.webp"
        altImage="Panadero con cara de angustiado"
        animations={{
          from: {
            y: -100,
          },
          to: {
            y: 0,
          },
        }}
      />
      <Scene.Item
        center
        backgroundImage="/Characters/Baker.webp"
        altImage="Panadero con cara de angustiado"
        animations={{
          from: {
            y: -100,
          },
          to: {
            y: 0,
          },
        }}
      />
    </Scene>
  );
};
