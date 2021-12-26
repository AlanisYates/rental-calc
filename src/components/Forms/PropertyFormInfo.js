import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputField from "../FormFields/InputField";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import { Button } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(6),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
      {/* <Grid container spacing={4}>
        <Grid item xs={4}>
          <InputField name={nickName.name} label={nickName.name} fullWidth />
        </Grid>
        <Grid item xs={8}>
          <InputField name={zLink.name} label={zLink.label} />
        </Grid>
      </Grid>
     
        <Grid item xs={12}>
          <InputField
            name={addressOne.name}
            label={addressOne.name}
            fullWidth
          />
        </Grid> */}
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>

      {/* <InputField name={addressTwo.name} label={addressTwo.label} /> */}
    </>
  );
}
