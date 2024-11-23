import { CSSProperties, useRef } from "react";
import styles from "./Scene.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import _ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(_ScrollTrigger);

interface SceneProps {
  backgroundImage: string;
  altImage: string;
  backgroundColor?: string;
}

interface ForegroundProps {
  backgroundImage: string;
  altImage: string;
  className?: string;
  containerClassName?: string;
  animations: AnimationsType;
}

interface AnimationsType {
  from: gsap.TweenVars;
  to: gsap.TweenVars;
  scroll?: ScrollTrigger.Vars;
}

interface ItemProps extends ForegroundProps {
  center?: boolean;
  animations: AnimationsType;
}

interface ScrollTriggerProps {
  className?: string;
  animations: AnimationsType;
}

const ScrollTrigger = ({
  children,
  className,
  animations,
}: React.PropsWithChildren<ScrollTriggerProps>) => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(container.current, animations.from, {
      ...animations.to,
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: "top bottom",
        ...animations.scroll,
      },
    });
  });

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
};

const Foreground = ({
  backgroundImage,
  altImage,
  className,
  animations,
  containerClassName,
}: ForegroundProps) => {
  return (
    <ScrollTrigger
      className={`${styles.foreground} ${containerClassName}`}
      animations={animations}
    >
      <img
        className={`${styles.foregroundImg} ${className}`}
        src={backgroundImage}
        alt={altImage}
      />
    </ScrollTrigger>
  );
};

const Item = ({
  backgroundImage,
  altImage,
  center,
  className,
  containerClassName,
  animations,
}: ItemProps) => {
  return (
    <ScrollTrigger
      className={`${styles.item} ${
        center ? styles.center : ""
      } ${containerClassName}`}
      animations={animations}
    >
      <img
        className={`${styles.character} ${className}`}
        src={backgroundImage}
        alt={altImage}
      />
    </ScrollTrigger>
  );
};

export const Scene = ({
  backgroundImage,
  backgroundColor,
  children,
}: React.PropsWithChildren<SceneProps>) => {
  return (
    <div
      className={styles.background}
      style={
        {
          "--background-color": backgroundColor,
        } as CSSProperties
      }
    >
      <img
        className={styles.backgroundImg}
        src={backgroundImage}
        alt={"test"}
      />
      {children}
    </div>
  );
};

Scene.Foreground = Foreground;
Scene.Item = Item;
