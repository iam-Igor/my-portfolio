import { Parallax } from "react-scroll-parallax";
import logos from "../utils/sources/skills.json";
import { Popover, Typography } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillSection = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [hoveredLogo, setHoveredLogo] = useState(null);

  const handlePopoverOpen = (event, logoIndex) => {
    setAnchorEl(event.currentTarget);
    setHoveredLogo(logoIndex);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setHoveredLogo(null);
  };
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const open = Boolean(anchorEl);

  return (
    <>
      <h1 ref={ref} className="text-center mb-5">
        Skills
      </h1>
      <motion.div
        className="d-flex justify-content-around flex-md-row flex-column"
        initial={{ x: "-100vw" }}
        animate={inView ? { x: 0 } : { x: "-100vw" }}
        transition={{ duration: 1, type: "tween" }}
      >
        <ul className="text-center list-unstyled mt-5 mt-md-0">
          <p className="fw-bold text-secondary">Front-End</p>
          <li>Excellent knowledge of HTML 5, CSS, SaSS</li>
          <li>Excellent knowledge of the JavaScript language</li>
          <li>Excellent knowledge of the React JS framework and Redux</li>
          <li>
            Excellent knowledge of libraries like Bootstrap | React Bootstrap
          </li>
          <li>Basic knowledge of the TypeScript language</li>
          <li>Good knowledge of managing RestFul APIs</li>
          <li>Knowledge of version control tools like Git</li>
        </ul>
        <ul className="text-center list-unstyled mt-5 mt-md-0 ">
          <p className="fw-bold text-secondary">Back-End</p>
          <li>Good knowledge of the JAVA language and OOP</li>
          <li>Good knowledge of the Spring and Hibernate framework</li>
          <li>Good knowledge of the PostgreSql DB and JPQL Queries</li>
          <li>Good knowledge of Spring security and JWT Authentication</li>
          <li>Experience in developing RESTful services using Spring Boot</li>
        </ul>
      </motion.div>
      {logos && (
        <Parallax speed={5} className="d-flex justify-content-center" ref={ref}>
          <motion.div
            className=" bg-secondary py-5  rounded-5 mt-5 logos-cont "
            initial={{ x: "200vw" }}
            animate={inView ? { x: 0 } : { x: "200vw" }}
            transition={{ duration: 1, type: "tween" }}
          >
            {logos.map((logo, i) => {
              return (
                <div key={i}>
                  <img
                    aria-owns={open ? `mouse-over-popover-${i}` : undefined}
                    aria-haspopup="true"
                    onMouseEnter={(event) => handlePopoverOpen(event, i)}
                    onMouseLeave={handlePopoverClose}
                    src={logo.url}
                    style={{ width: "50px", height: "50px" }}
                    className="mx-md-2"
                  />
                  <Popover
                    id={`mouse-over-popover-${i}`}
                    sx={{
                      pointerEvents: "none",
                    }}
                    open={open && hoveredLogo === i}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                    disableScrollLock
                  >
                    <Typography sx={{ p: 1 }}>{logo.title}</Typography>
                  </Popover>
                </div>
              );
            })}
          </motion.div>
        </Parallax>
      )}
    </>
  );
};

export { SkillSection };
