import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputField from "../FormFields/InputField";
import InputNumber from "../FormFields/InputNumber";
import { FieldArray, useFormikContext } from "formik";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

export default function IncomeForm(props) {
  const { values } = useFormikContext();
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Income Form
      </Typography>
      <FieldArray name="income">
        {({ insert, remove, push }) => (
          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent="center"
          >
            {values.income.length > 0 &&
              values.income.map((friend, index) => (
                <>
                  <Grid item xs={12} md={5.5}>
                    <InputField
                      name={`income.${index}.name`}
                      label={`name`}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={5.5}>
                    <InputNumber
                      name={`income.${index}.amount`}
                      label={`amount`}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={1}>
                    <IconButton onClick={() => remove(index)}>
                      <DeleteOutlineIcon style={{ fill: "red" }} />
                    </IconButton>
                  </Grid>
                </>
              ))}

            <Grid item xs={12}>
              <IconButton onClick={() => push({ name: "", amount: "" })}>
                <AddIcon color="primary" />
              </IconButton>
            </Grid>
          </Grid>
        )}
      </FieldArray>
    </>
  );
}
