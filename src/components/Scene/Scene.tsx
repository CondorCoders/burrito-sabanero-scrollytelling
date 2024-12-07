import { CSSProperties, useRef } from "react";
import styles from "./Scene.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import _ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(_ScrollTrigger);

interface SceneProps {
  backgroundImage?: string;
  altImage?: string;
  backgroundColor?: string;
  gradient?: boolean;
}

interface ForegroundProps {
  backgroundImage: string;
  altImage: string;
  className?: string;
  containerClassName?: string;
  animations: AnimationsType;
}

interface AnimationsType {
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
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
    gsap.fromTo(
      container.current,
      { ...animations.from },
      {
        ...animations.to,
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: "top bottom",
          ...animations.scroll,
        },
      }
    );
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

const Container = ({ children }: React.PropsWithChildren) => {
  return <div className={styles.container}>{children}</div>;
};

export const Scene = ({
  backgroundImage,
  altImage,
  backgroundColor,
  gradient = true,
  children,
}: React.PropsWithChildren<SceneProps>) => {
  return (
    <div
      className={`${styles.background} ${gradient ? styles.gradient : ""}`}
      style={
        {
          "--background-color": backgroundColor,
        } as CSSProperties
      }
    >
      {backgroundImage && (
        <img
          className={styles.backgroundImg}
          src={backgroundImage}
          alt={altImage}
        />
      )}
      {children}
    </div>
  );
};

Scene.Foreground = Foreground;
Scene.Item = Item;
Scene.Container = Container;
