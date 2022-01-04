import React from "react";
import { Divider, Typography, Button, Box, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import { FieldArray, useFormikContext } from "formik";
import { numberWithCommas } from "../utils/utils";
import ArrDoughnut from "./components/ArrDoughnut";
import ExpenseReview from "./ReviewForms/ExpenseReview";
import ArrayReview from "./ReviewForms/ArrayReview";
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';

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
      <Typography variant="h1" paddingTop={1}>
        Review
      </Typography>
      {/* <Divider /> */}
      {/* Income */}

      <Card sx={{ display: 'flex', width:'70%' }}>

      <ArrayReview
        totalAmount={totalIncome()}
        amountArr={formValues.income}
        title="Income"
      />
      </Card>
      {/* expense */}
      <Card sx={{ display: 'flex', width: '70%' }}>
      <ArrayReview
        totalAmount={totalExpense()}
        amountArr={formValues.expense}
        title="Expense"
      />
</Card>
      {/* Expenses */}

      {/* 
      
      Calculations
        cash
        loan payment
        maybe chart of cost breakdown

      */}
      <ExpenseReview />
    </>
  );
}
