import React from "react";
import { Divider, Typography, Button, Box } from "@mui/material";
import { useFormikContext } from "formik";
import { numberWithCommas } from "../utils/utils";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ArrDoughnut from "./components/ArrDoughnut";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ReviewProperty() {
  const { values: formValues } = useFormikContext();

  //   Calculations
  const reducer = (a, b) => {
    return Number(a) + Number(b);
  };

  const totalIncome = () => {
    return Number(formValues.income.map((item) => item.amount).reduce(reducer));
  };

  const totalExpense = () => {
    return Number(
      formValues.expense.map((item) => item.amount).reduce(reducer)
    );
  };

  const cashFlow = totalIncome() - totalExpense();

  const capRate = ((cashFlow * 12) / Number(formValues.price)).toLocaleString(
    undefined,
    { style: "percent", minimumFractionDigits: 2 }
  );

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Review
      </Typography>

      <Divider />

      {/* Income */}
      <Typography variant="h2">Income</Typography>
      <Typography variant="h5">
        {totalIncome().toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </Typography>
      <Divider />
      <Typography variant="h2">Expenses</Typography>
      <Typography variant="h5">
        {totalExpense().toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </Typography>
      <Divider />
      <Typography variant="h2">Monthly Cashflow</Typography>
      <Typography variant="h5">
        {cashFlow.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </Typography>
      <Divider />
      <Typography variant="h2">Annual Cashflow</Typography>
      <Typography variant="h5">
        {(cashFlow * 12).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </Typography>
      <Divider />

      <Typography variant="h2">Cap</Typography>
      <Typography variant="h5">{capRate}</Typography>
      <Divider />
      <Box width="25%">
        <ArrDoughnut
          labels={formValues.income.map((item) => item.name)}
          amounts={formValues.income.map((item) => item.amount)}
        />
      </Box>
      <Box width="25%">
        <ArrDoughnut
          labels={formValues.expense.map((item) => item.name)}
          amounts={formValues.expense.map((item) => item.amount)}
        />
      </Box>
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
