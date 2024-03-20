import { ParallaxBanner } from "react-scroll-parallax";
import bg from "../assets/img/banner-background.jpg";
import fg from "../assets/img/banner-foreground.png";
import "../assets/style/hero.css";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["There!", "World!", "User!", "Devs!", "Everybody!"];
  const [currentWord, setCurrentWord] = useState("");

  const background = {
    image: bg,
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset center">
        <h1 className="headline white">
          Hello <span>{currentWord}</span>
          <span className="flicker">|</span>
        </h1>
      </div>
    ),
  };

  const foreground = {
    image: fg,
    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay = {
    opacity: [0, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradient inset" />,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (wordIndex < words.length) {
      let text = "";
      const interval = setInterval(() => {
        text += words[wordIndex][text.length];
        setCurrentWord(text);
        if (text === words[wordIndex]) clearInterval(interval);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [wordIndex]);
  return (
    <>
      {" "}
      <ParallaxBanner
        layers={[background, headline, foreground, gradientOverlay]}
        className="full"
      />
      <div className="center full text-center headline-cont">
        <h1 className="headline gray">I am a Full-Stack Developer</h1>
      </div>
    </>
  );
};

export { HeroSection };
