import { Col, Container, Row } from "react-bootstrap";
import { HeroSection } from "./HeroSection";
import { AboutMePreview } from "./AboutMePreview";
import { MyProjectsPreview } from "./MyProjectsPreview";
import { SkillSection } from "./SkillSection";
import { motion, useScroll, useSpring } from "framer-motion";
import { Quote } from "./Quote";
import { Footer } from "./Footer";

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Container fluid className="overflow-x-hidden">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Row className="flex-column bg-dark">
        <Col className="d-flex flex-column align-items-center pb-5 px-0 bg-dark text-white">
          {" "}
          <HeroSection />
        </Col>

        <Col
          className="text-white py-5 d-flex flex-md-row flex-column align-items-center justify-content-md-around"
          id="about"
        >
          <AboutMePreview />
        </Col>
        <Col
          className="d-flex flex-column text-white py-5 justify-content-center align-items-center"
          id="projects"
        >
          <MyProjectsPreview />
        </Col>
        <Col className="d-flex flex-column py-5 text-white" id="skills">
          <SkillSection />
        </Col>
        <Col className="d-flex flex-column py-5 text-white align-items-center position-relative mt-5">
          <Quote />
        </Col>
        <Col className="d-flex flex-column pt-5 pb-2 text-white align-items-center position-relative mt-5 bg-black">
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export { HomePage };
