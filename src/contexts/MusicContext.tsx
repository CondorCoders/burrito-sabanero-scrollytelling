import { createContext, useState } from "react";

interface MusicContextType {
  playMusic: boolean;
  setPlayMusic?: (play: boolean) => void;
}

const defaultValue: MusicContextType = {
  playMusic: true,
  setPlayMusic: () => null,
};

export const MusicContext = createContext<MusicContextType>(defaultValue);

export const MusicProvider = ({ children }: React.PropsWithChildren) => {
  const [playMusic, setPlayMusic] = useState(true);

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
