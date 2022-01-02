import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Formik, Form, useFormikContext } from "formik";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StepLabel from "@mui/material/StepLabel";
import PropertyFormInfo from "../Forms/PropertyFormInfo";
import formInitalValues from "../FormModel/formInitalValues";
import propertyFormModel from "../FormModel/propertyFormModel";
import validationSchema from "../FormModel/validationSchema";
import IncomeForm from "../Forms/IncomeForm";
import ExpenseForm from "../Forms/ExpenseForm";
import LoanForm from "../Forms/LoanForm";
import ReviewProperty from "../Forms/ReviewProperty";

const initalStuff = {
  nickName: "Test",
  addressOne: "123 address way",
  addressTwo: "nah",
  city: "Tampa",
  state: "FL",
  zipcode: "33679",
  country: "United States",
  price: "200000",
  zLink: "6745",
  term: "360",
  loanAmt: "3000000",
  interest: "3.5",
  downPay: "20000",
  income: [
    {
      name: "rent",
      amount: "1200",
    },
    {
      name: "rent 1",
      amount: "356",
    },
    {
      name: "rent 2",
      amount: "1005.99",
    },
    {
      name: "Shed",
      amount: "203",
    },
    {
      name: "Perking",
      amount: "356",
    },
    {
      name: "Washer",
      amount: "145.99",
    },
  ],
  expense: [
    {
      name: "insurance",
      amount: "300",
    },
    {
      name: "insurance",
      amount: "700",
    },
  ],
};

const steps = [
  "Property Informaion",
  "Income",
  "Expenses",
  "Loan Information",
  "Review",
];

const { formField } = propertyFormModel;

const _renderStepContent = (step) => {
  switch (step) {
    case 0:
      return <PropertyFormInfo formField={formField} />;
    case 1:
      return <IncomeForm formField={formField} />;
    case 2:
      return <ExpenseForm formField={formField} />;
    case 3:
      return <LoanForm formField={formField} />;
    case 4:
      return <ReviewProperty />;
    default:
      return <div>Not Found</div>;
  }
};

export default function SubmitProperty() {
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;
  const [initVal, setInitVals] = useState(formInitalValues)

  const _handleSubmit = (values, actions) => {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const _submitForm = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      setActiveStep(activeStep + 1);
    }, 400);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleReset = () => {
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
        </>
      ) : (
        <>
          <Formik
            initialValues={initalStuff}
            validationSchema={validationSchema}
            onSubmit={_handleSubmit}
          >
            {({ values, isSubmitting }) => (
              <Form>
                {_renderStepContent(activeStep)}
                <Box>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack}>Back</Button>
                  )}

                  <Button onClick={handleReset} type="reset">
                    Reset
                  </Button>
                  <Button disabled={isSubmitting} type="submit">
                    {isLastStep ? "Submit" : "next"}
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
          <Button onClick={() => {
            // setInitVals(initalStuff)
            // console.log(initalStuff)
          }}>Load Data</Button>
        </>
      )}
    </Box>
  );
}
