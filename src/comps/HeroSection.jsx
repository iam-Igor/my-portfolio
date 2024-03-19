import { Button } from "react-bootstrap";
import { useParallax } from "react-scroll-parallax";

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const parallax = useParallax({
    onProgressChange: (progress) => {
      if (parallax.ref.current) {
        // set progress to CSS variable
        parallax.ref.current.style.setProperty(
          "--progress",
          progress.toString()
        );
      }
    },
  });

  return (
    <>
      {" "}
      <h1
        ref={parallax.ref}
        className="text-stroke "
        // use the progress variable to change the width of the stroke as progress updates
        style={{ textStrokeWidth: `calc(20px * var(--progress))` }}
      >
        Hello There!
      </h1>
      <h4 className="my-3">I'm a Full-Stack Developer</h4>
      <Button
        className="rounded-4 hero-btn"
        onClick={() => scrollToSection("projects")}
      >
        Explore my projects <i className="bi bi-arrow-right"></i>
      </Button>
    </>
  );
};

export { HeroSection };
