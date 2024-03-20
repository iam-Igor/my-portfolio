import { Box, SpeedDial } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useEffect, useState } from "react";
const GoUpButton = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <Box
      className={`go-up ${scrollY > 1000 ? "" : "d-none"}`}
      sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}
    >
      <SpeedDial
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        className="btn-dial"
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<ArrowUpwardIcon />}
      ></SpeedDial>
    </Box>
  );
};

export { GoUpButton };
