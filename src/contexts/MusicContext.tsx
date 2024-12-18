import { createContext, useEffect, useState } from "react";

interface MusicContextType {
  playMusic: boolean;
  setPlayMusic: (play: boolean) => void;
}

const defaultValue: MusicContextType = {
  playMusic: false,
  setPlayMusic: () => null,
};

export const MusicContext = createContext<MusicContextType>(defaultValue);

export const MusicProvider = ({ children }: React.PropsWithChildren) => {
  const [playMusic, setPlayMusic] = useState(defaultValue.playMusic);

  useEffect(() => {
    const sound = new Audio("/Music/ChristmasMusic.mp3");
    sound.volume = 0.4;

    if (playMusic) {
      sound.play();
    }
    if (!playMusic) {
      sound.pause();
    }

    return () => {
      sound.pause();
      sound.currentTime = 0;
    };
  }, [playMusic]);

  return (
    <MusicContext.Provider
      value={{
        setPlayMusic,
        playMusic,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
