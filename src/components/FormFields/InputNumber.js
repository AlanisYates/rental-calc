import React from "react";
import PropTypes from "prop-types";
import { at } from "lodash";
import { useField } from "formik";
import NumberFormat from "react-number-format";
import TextField from "@mui/material/TextField";

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function InputNumber(props) {
  const [values, setValues] = React.useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);

  function _renderHelperText() {
    const [touched, error] = at(meta, "touched", "error");
    if (touched && error) {
      return error;
    }
  }

  return (
    <TextField
      error={meta.touched && meta.error && true}
      helperText={_renderHelperText()}
      onChange={handleChange}
      {...field}
      {...rest}
      InputProps={{
        inputComponent: NumberFormatCustom,
      }}
    />
  );
}
