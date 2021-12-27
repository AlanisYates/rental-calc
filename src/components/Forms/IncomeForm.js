import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputField from "../FormFields/InputField";
import InputNumber from "../FormFields/InputNumber";
import { Field, ErrorMessage, FieldArray, useFormikContext } from "formik";

export default function IncomeForm(props) {
  const { values } = useFormikContext();
  return (
    <>
      <FieldArray name="income">
        {({ insert, remove, push }) => (
          <div>
            {values.income.length > 0 &&
              values.income.map((friend, index) => (
                <div className="row" key={index}>
                  <div className="col">
                    <label htmlFor={`income.${index}.name`}>Name</label>
                    <Field
                      name={`income.${index}.name`}
                      placeholder="Jane Doe"
                      type="text"
                    />
                    <ErrorMessage
                      name={`income.${index}.name`}
                      component="div"
                      className="field-error"
                    />
                  </div>
                  <div className="col">
                    <label htmlFor={`income.${index}.amount`}>amount</label>
                    <Field
                      name={`income.${index}.amount`}
                      placeholder="jane@acme.com"
                      //   type="amount"
                    />
                    <ErrorMessage
                      name={`income.${index}.name`}
                      component="div"
                      className="field-error"
                    />
                  </div>
                  <div className="col">
                    <button
                      type="button"
                      className="secondary"
                      onClick={() => remove(index)}
                    >
                      X
                    </button>
                  </div>
                </div>
              ))}
            <button
              type="button"
              className="secondary"
              onClick={() => push({ name: "", amount: "" })}
            >
              Add Friend
            </button>
          </div>
        )}
      </FieldArray>
    </>
  );
}
