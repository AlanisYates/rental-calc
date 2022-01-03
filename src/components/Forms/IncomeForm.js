import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputField from "../FormFields/InputField";
import InputNumber from "../FormFields/InputNumber";
import { FieldArray, useFormikContext } from "formik";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
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
                  <Grid item xs={12} md={4}>
                    <InputField
                      name={`income.${index}.name`}
                      label={`name`}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <InputNumber
                      name={`income.${index}.amount`}
                      label={`amount`}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    {/* <Button onClick={() => remove(index)}>Remove Friend</Button> */}
                    <IconButton onClick={() => remove(index)}>
                      <DeleteOutlineIcon />
                    </IconButton>
                  </Grid>
                </>
              ))}

            <Grid item xs={12}>
              <IconButton onClick={() => push({ name: "", amount: "" })}>
                <AddIcon />
              </IconButton>
            </Grid>
          </Grid>
        )}
      </FieldArray>
    </>
  );
}
