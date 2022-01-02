import React from "react";
import { Divider, Typography, Button, Box } from "@mui/material";
import { useFormikContext } from "formik";
import { values } from "lodash";
import { numberWithCommas } from "../utils/utils";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ReviewProperty() {
  const { values: formValues } = useFormikContext();

  function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

  const data = {
    // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    labels: formValues.income.map(item => item.name),
    datasets: [
      {
        label: "# of Votes",
        data: formValues.income.map(item => item.amount),
        backgroundColor: formValues.income.map(item => random_rgba()),
        // borderColor: formValues.income.map(item => random_rgba()),
        borderWidth: 2,
      },
    ],
  };
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
      <Box width="25%">


      <Doughnut data={data} />
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
