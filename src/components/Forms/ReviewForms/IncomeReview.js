import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function IncomeReview(props) {
  const { totalIncome } = props;
  return (
    <Grid container spacing={3} alignItems="center" justifyContent="center">
      <Grid item xs={6}>
        <Typography variant="h4" gutterBottom>
          Income
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h5">
          {totalIncome?.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Typography>
      </Grid>
    </Grid>
  );
}
