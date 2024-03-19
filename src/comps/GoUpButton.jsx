import { Box, SpeedDial } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const GoUpButton = () => {
  return (
    <Box
      className="go-up"
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
