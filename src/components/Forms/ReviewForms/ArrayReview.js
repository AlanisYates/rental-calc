import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ArrDoughnut from "../components/ArrDoughnut";
import Box from "@mui/material/Box";
import { Stack, Divider } from "@mui/material";

export default function ArrayReview(props) {
  const { totalAmount, amountArr, title } = props;

  const annual = totalAmount * 12;
  return (
    <Grid container spacing={1} alignItems="center" justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={7} alignContent="center">
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          alignItems="center"
          justifyContent="center"
          spacing={3}
          textAlign="center"
        >
          <Stack>
            <Typography variant="h4" fontWeight="400" gutterBottom>
              Monthly
            </Typography>
            <Typography variant="h4" color="primary">
              {totalAmount?.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="h4" fontWeight="400" gutterBottom>
              Annaully
            </Typography>
            <Typography variant="h4" color="primary">
              {annual?.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </Typography>
          </Stack>
        </Stack>
      </Grid>

      <Grid item xs={5} justifyContent="center">
        <Box width="75%">
          <ArrDoughnut
            labels={amountArr.map((item) => item.name)}
            amounts={amountArr.map((item) => item.amount)}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
