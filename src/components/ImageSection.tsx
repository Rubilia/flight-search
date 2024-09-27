import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import flightsImage from "../assets/images/flights_image.svg";

function ImageSection() {
  return (
    <Box
      sx={{
        marginLeft: "10%",
        marginRight: "10%",
        textAlign: "center",
        position: "relative",
      }}
    >
      <img
        src={flightsImage}
        alt="Flights"
        style={{ width: "100%", height: "auto" }}
      />

      <Typography
        variant="h4"
        component="div"
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#202124",
          fontFamily: "Roboto, sans-serif",
          fontWeight: 400,
          fontSize: "56px",
          padding: "8px 16px",
          borderRadius: "4px",
        }}
      >
        Flights
      </Typography>
    </Box>
  );
}

export default ImageSection;
