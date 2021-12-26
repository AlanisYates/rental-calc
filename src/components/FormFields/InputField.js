import React from "react";
import { at } from "lodash";
import { useField, ErrorMessage, Field } from "formik";
import TextField from "@mui/material/TextField";

export default function InputField(props) {
  const { name, label } = props;
    const { errorText, ...rest } = props;
    const [field, meta] = useField(props);

    function _renderHelperText() {
      const [touched, error] = at(meta, "touched", "error");
      if (touched && error) {
        return error;
      }
    }

  return (
      <>
      <TextField
        id={props.id || name}
        label={label}
        {...field}
        {...rest}
  
        error={meta.touched && meta.error && true}
        helperText={_renderHelperText()}
      //   {...field}
      //   {...rest}
      />
     {/* <label htmlFor={props.id || props.name}>{label}</label>
       <input className="text-input" {...field} {...props} />
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null} */}
    </>
  );
}
