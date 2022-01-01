import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputField from "../FormFields/InputField";
import InputNumber from "../FormFields/InputNumber";
import { FieldArray, useFormikContext } from "formik";

export default function ExpenseForm(props) {
  const { values } = useFormikContext();
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Expense Form
      </Typography>
      <FieldArray name="expense">
        {({ insert, remove, push }) => (
          <Grid container spacing={2}>
            {values.expense.length > 0 &&
              values.expense.map((friend, index) => (
                <>
                  <Grid item xs={12} md={6}>
                    <InputField
                      name={`expense.${index}.name`}
                      label={`name`}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputNumber
                      name={`expense.${index}.amount`}
                      label={`amount`}
                      fullWidth
                    />
                  </Grid>
                </>
              ))}
            <Button onClick={() => push({ name: "", amount: "" })}>
              Add Friend
            </Button>
          </Grid>
        )}
      </FieldArray>
    </>
  );
}
