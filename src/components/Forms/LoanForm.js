import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputNumber from "../FormFields/InputNumber";
import Grid from "@mui/material/Grid";
import * as loanLib from "loanjs";

export default function LoanForm(props) {
  const {
    formField: { interest, downPay, loanAmt, term },
  } = props;
  const handleCalc = () => {
    // const loan = new loanLib.Loan(
    //   parseInt(loanAmt),
    //   parseInt(term),
    //   parseFloat(interest)
    // );
    // console.log(loan.installments[0]);
    console.log(interest.value);
  };

  // const data = 500000, 360, 3.5

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Loan Form
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <InputNumber name={term.name} label={term.label} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputNumber name={loanAmt.name} label={loanAmt.label} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputNumber name={interest.name} label={interest.label} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputNumber name={downPay.name} label={downPay.label} fullWidth />
        </Grid>
      </Grid>
      <Button onClick={handleCalc}>Calculate payment</Button>
    </>
  );
}
