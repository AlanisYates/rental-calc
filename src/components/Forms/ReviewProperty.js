import { Divider, Typography, Button } from "@mui/material";
import { useFormikContext } from "formik";
import { values } from "lodash";
import React from "react";
import { numberWithCommas } from "../utils/utils";

export default function ReviewProperty() {
  const { values: formValues } = useFormikContext();

  //   Calculations
  const reducer = (a, b) => {
    return Number(a) + Number(b);
  };

  const totalIncome = () => {
    return formValues.income.map((item) => item.amount).reduce(reducer);
  };

  const totalExpense = () => {
    return formValues.expense.map((item) => item.amount).reduce(reducer);
  };

  const cashFlow = (totalIncome() - totalExpense()).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Review
      </Typography>

      <Divider />

      {/* Income */}
      <Typography variant="h2">Income</Typography>
      <Typography variant="h5">
        {numberWithCommas(
          totalIncome().toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })
        )}
      </Typography>
      <Typography variant="h2">Expenses</Typography>
      <Typography variant="h5">
        {numberWithCommas(
          totalExpense().toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })
        )}
      </Typography>
      <Typography variant="h2">Cashflow</Typography>
      <Typography variant="h5">{numberWithCommas(cashFlow)}</Typography>

      {/* <Button
        onClick={() => {
          console.log(numberWithCommas(totalIncome()));
        }}
      >
        Log val
      </Button> */}

      {/* Expenses */}

      {/* 
      
      Calculations
        cash
        loan payment
        maybe chart of cost breakdown

      */}
    </>
  );
}
