import { Button } from "react-bootstrap";
import avatar from "../assets/img/me-avatar.jpeg";

const AboutMePreview = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div style={{ width: "60%" }} className="mb-5 mb-md-0">
        <h2>Let's get know about me closer</h2>
        <p className="my-5">
          I was born in 1995, and I live in Cosenza, Italy. I have always had a
          passion for technology in general. Since I started writing my first
          pieces of code, I fell in love with this world because I enjoy turning
          my ideas into something concrete. I am methodical, precise, and
          skilled in problem-solving, and I adapt easily to both teamwork and
          autonomy.
        </p>
        <Button
          className="rounded-4 hero-btn"
          onClick={() => scrollToSection("skills")}
        >
          About my skills
        </Button>
      </div>
      <div
        style={{
          backgroundImage: `url(${avatar})`,
          height: "270px",
          width: "300px",
          backgroundSize: "cover",
          backgroundPositionY: "60%",
        }}
        className="text-center rounded-4 position-relative"
      >
        <Button className="button-false-1 rounded-4"></Button>
        <Button className="button-false-2 rounded-4"></Button>
      </div>
    </>
  );
};

export { AboutMePreview };
