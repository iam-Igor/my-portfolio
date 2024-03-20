import quote from "../assets/img/quote.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Quote = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      {" "}
      <div ref={ref} className="pb-5">
        <motion.h5
          className="text-secondary"
          initial={{ x: "-100vw" }}
          animate={inView ? { x: 0 } : { x: "-100vw" }}
          transition={{ duration: 1, type: "tween" }}
        >
          Everyone should learn how to code because it teaches you how to think.
        </motion.h5>
        <motion.h4
          initial={{ x: "200vw" }}
          animate={inView ? { x: 0 } : { x: "200vw" }}
          transition={{ duration: 1, type: "tween" }}
        >
          -Steve Jobs
        </motion.h4>
      </div>
      <img src={quote} className="quote-img" />
    </>
  );
};

export { Quote };
