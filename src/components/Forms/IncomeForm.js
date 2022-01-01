import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputField from "../FormFields/InputField";
import InputNumber from "../FormFields/InputNumber";
import { FieldArray, useFormikContext } from "formik";
import { Divider } from "@mui/material";

export default function IncomeForm(props) {
  const { values } = useFormikContext();
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Income Form
      </Typography>
      <FieldArray name="income">
        {({ insert, remove, push }) => (
          <Grid container spacing={2}>
            {values.income.length > 0 &&
              values.income.map((friend, index) => (
                <>
                  <Grid item xs={12} md={6}>
                    <InputField
                      name={`income.${index}.name`}
                      label={`name`}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputNumber
                      name={`income.${index}.amount`}
                      label={`amount`}
                      fullWidth
                    />
                  </Grid>
                  <Button onClick={() => remove(index)}>
                    Remove Friend
                  </Button>
                </>
              ))}
      
              <Grid item xs={12}>


            <Button onClick={() => push({ name: "", amount: "" })}>
              Add Friend
            </Button>
              </Grid>
          </Grid>
        )}
      </FieldArray>
    </>
  );
}
