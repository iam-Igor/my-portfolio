import projects from "../../src/utils/sources/project.json";
import { useRef } from "react";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { Button } from "react-bootstrap";

const MyProjectsPreview = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  function Image(id) {
    function useParallax(value, distance) {
      return useTransform(value, [0, 1], [-distance, distance]);
    }

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 100);

    const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

    return (
      <>
        {projects && (
          <section className="py-5 d-flex flex-column align-items-center">
            <div ref={ref}>
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={`${id.id.image}`}
                alt={`${id.id.image}`}
                className="pointer rounded-4 prj-img"
                onClick={() => {
                  window.open(id.id.link);
                }}
              />
            </div>
            <div className="text-center">
              <motion.h2 style={{ y, opacity }}>{`#${id.id.title}`}</motion.h2>
              <motion.p style={{ y, opacity }}>{id.id.description}</motion.p>
            </div>
          </section>
        )}
      </>
    );
  }

  return (
    <>
      <h2>My Projects Highlight</h2>
      <p>
        Below you can see and explore some of my projects made in the last year
      </p>
      <Button
        className="rounded-4 btn-prj my-4"
        onClick={() => {
          window.open("https://github.com/iam-Igor");
        }}
      >
        Explore More<i className="ms-1 bi bi-arrow-right"></i>
      </Button>
      {projects.map((prj, i) => (
        <Image key={i} id={prj} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
};
export { MyProjectsPreview };
