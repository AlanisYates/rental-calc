import Yup from "yup";
import propertyFormModel from "./propertyFormModel";

const {
  formField: {
    nickName,
    addressOne,
    addressTwo,
    city,
    state,
    zipCode,
    country,
    price,
  },
} = propertyFormModel;

export default [
  Yup.object.shape({
    [nickName.name]: Yup.string(),
    [addressOne.name]: Yup.string().required(`${addressOne.requiredErrorMsg}`),
    [addressTwo.name]: Yup.string(),
    [city.name]: Yup.string().nullable().required(`${city.requiredErrorMsg}`),
    [state.name]: Yup.string().required(`${state.requiredErrorMsg}`),
    [zipCode.name]: Yup.string()
      .required(`${zipCode.requiredErrorMsg}`)
      .test(
        "len",
        `${zipcode.invalidErrorMsg}`,
        (val) => val && val.length === 5
      ),
    [country.name]: Yup.string().required(`${country.requiredErrorMsg}`),
    [price.name]: Yup.string().required(`${price.requiredErrorMsg}`),
  }),
];
