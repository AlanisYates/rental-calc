import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputField from "../FormFields/InputField";
import InputNumber from "../FormFields/InputNumber";

export default function PropertyFormInfo(props) {
  const {
    formField: {
      nickName,
      addressOne,
      addressTwo,
      city,
      state,
      zipcode,
      country,
      price,
      zLink,
    },
  } = props;
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Property Form
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <InputField name={nickName.name} label={nickName.label} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputNumber name={price.name} label={price.label} fullWidth />
        </Grid>
        <Grid item xs={12} md={12}>
          <InputField name={zLink.name} label={zLink.label} fullWidth />
        </Grid>
        <Grid item xs={12} md={12}>
          <InputField
            name={addressOne.name}
            label={addressOne.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <InputField
            name={addressTwo.name}
            label={addressTwo.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InputField name={city.name} label={city.label} fullWidth />
        </Grid>
        <Grid item xs={12} md={4}>
          <InputField name={state.name} label={state.label} fullWidth />
        </Grid>
        <Grid item xs={12} md={2}>
          <InputField name={zipcode.name} label={zipcode.label} fullWidth />
        </Grid>
        <Grid item xs={12} md={2}>
          <InputField name={country.name} label={country.label} fullWidth />
        </Grid>
      </Grid>
    </>
  );
}
