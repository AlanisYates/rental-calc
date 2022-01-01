import { Divider, Typography } from "@mui/material";
import { useFormikContext } from "formik";
import { values } from "lodash";
import React from "react";

export default function ReviewProperty() {
  const { values: formValues } = useFormikContext();

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Review
      </Typography>

      <Divider />

      {/* Income */}

      {/* Expenses */}
    </>
  );
}
