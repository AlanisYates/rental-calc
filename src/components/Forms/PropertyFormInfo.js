import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputField from "../FormFields/InputField";
import { TextField } from "@mui/material";

export default function PropertyFormInfo(props) {
  const {
    formField: {
      nickName,
      //   addressOne,
      //   addressTwo,
      //   city,
      //   state,
      //   zipcode,
      //   country,
      //   price,
    },
  } = props;
  return (
    <>
      <Typography variant="h6">Property Form</Typography>
      <TextField label={nickName.name} />

      {/* <Grid container spacing={3}>
        <Grid item xs={12} spacing={3}>
         
        </Grid>
      </Grid> */}
    </>
  );
}
