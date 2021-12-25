import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Formik, Form } from "formik";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StepLabel from "@mui/material/StepLabel";
import PropertyFormInfo from "../Forms/PropertyFormInfo";
import formInitalValues from "../FormModel/formInitalValues";
import propertyFormModel from "../FormModel/propertyFormModel";
import validationSchema from "../FormModel/validationSchema";

const steps = [
  "Property Informaion",
  "Income",
  "Expenses",
  "Loan Information",
  "Review",
];

const { formId, formField } = propertyFormModel;

const _renderStepContent = (step) => {
  switch (step) {
    case 0:
      return <PropertyFormInfo formField={formField} />;
    case 1:
      return <Typography>Income Form</Typography>;
    case 2:
      return <Typography>Expense Form</Typography>;
    case 3:
      return <Typography>Loan Information Form</Typography>;
    case 4:
      return <Typography>Property Review Form</Typography>;
    default:
      return <div>Not Found</div>;
  }
};

export default function SubmitProperty() {
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    // actions.setSubmitting(false);

    // setActiveStep(activeStep + 1);
  }

//   function _handleSubmit(values, actions) {
//     if (isLastStep) {
//       _submitForm(values, actions);
//     } else {
        
//     //   setActiveStep(activeStep + 1);
//         actions.setTouched({});
//         actions.setSubmitting(false);
//     }
//   }

const _handleSubmit = (values,actions) => {
    _submitForm(values,actions)
}

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  const handleReset = () => {
    // Reset all inputs on form
    setActiveStep(0);
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
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>All Steps Completed!</Typography>
          {/* <Box sx={{ display: "flex", flexDirection: "row", ps: 2 }}>
            <Box sx={{ flex: "1 1 auto" }}>
              <Button onClick={_handleSubmit}>Submit</Button>
              <Button onClick={handleReset}>Reset</Button>
              <Button onClick={_handleBack}>Back</Button>
            </Box>
          </Box> */}
        </>
      ) : (
        <>
          <Formik
            initialValues={formInitalValues}
            validationSchema={validationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep)}
                {activeStep !== 0 && (
                  <Button onClick={_handleBack}>Back</Button>
                )}
                <Box>

                {/* <Button
                  disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                  color="primary"
                //   onClick={() => {
                //       setActiveStep(activeStep + 1)
                //   }}
                >
                  {isLastStep ? "Submit" : "Next"}
                </Button> */}
                <Button type="submit">Submit</Button>
                </Box>
              </Form>
            )}
          </Formik>
        </>
      )}
    </Box>
  );
}
