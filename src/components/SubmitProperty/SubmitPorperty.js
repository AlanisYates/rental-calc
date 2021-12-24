import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  "Property Informaion",
  "Income",
  "Expenses",
  "Loan Information",
  "Review",
];

// Form Props
// const {formId, formField} = propertyFormModel;

export default function SubmitProperty() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    // Reset all inputs on form
    setActiveStep(0);
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const handleSubmit = async () => {
    await sleep(1000);
    alert("You have submitted youtr property");
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length - 1 ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>All Steps Completed!</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", ps: 2 }}>
            <Box sx={{ flex: "1 1 auto" }}>
              <Button onClick={handleSubmit}>Submit</Button>
              <Button onClick={handleReset}>Reset</Button>
              <Button onClick={handleBack}>Back</Button>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Button onClick={handleNext}>Next</Button>
          {activeStep !== 0 && <Button onClick={handleBack}>Back</Button>}
        </>
      )}
      {/* <Typography>Hello</Typography> */}
    </Box>
  );
}
