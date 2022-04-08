import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {    
    label: 1,  
    imgPath:
      "https://image.shutterstock.com/image-photo/kuala-lumpur-1-april-2019-600w-1402428338.jpg",
  },
  {
    label: 2,
    imgPath:
      "https://media.istockphoto.com/vectors/ramadan-kareem-horizontal-banner-with-golden-crescent-and-star-on-vector-id1214300056?k=20&m=1214300056&s=612x612&w=0&h=11Mmh4hXIZAHw9Mlagqrv8X7STOctyXfBDXl32xBqfs=",
  },
  {
    label: 3,
    imgPath:
      "https://media.istockphoto.com/photos/rosary-beads-isolated-on-white-background-picture-id1320773264?k=20&m=1320773264&s=612x612&w=0&h=zuqMXbVZmjObyvDrvjOL7CPV9XK2bDCLaIvrkbedy0A=",
  },
  {
    label: 4,
    imgPath:
      "https://media.istockphoto.com/photos/library-picture-id1178225788?k=20&m=1178225788&s=612x612&w=0&h=yFktp1P7OB186V03ajPuJb4MXYPp7AZUeCOa7DUyQdk=",
  },
];

const Carousel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: "100%", marginTop : 8 ,flexGrow: 1 }}>
      {/* <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        {/* <Typography>{images[activeStep].label}</Typography>
      </Paper> */}
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: "60vh",
                  display: "block",
                  //   maxWidth: 400,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {/* <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      /> */}
    </Box>
  );
};

export default Carousel;
