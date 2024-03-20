import { ParallaxBanner } from "react-scroll-parallax";
import bg from "../assets/img/banner-background.jpg";
import fg from "../assets/img/banner-foreground.png";
import "../assets/style/hero.css";

const HeroSection = () => {
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
        <h1 className="headline white">Hello There!</h1>
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
