import * as Yup from "yup";
import propertyFormModel from "./propertyFormModel";

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
} = propertyFormModel;

export default Yup.object({
  [nickName.name]: Yup.string(),
  [zLink.name]: Yup.string().required(`${zLink.requiredErrorMsg}`),
  [addressOne.name]: Yup.string().required(`${addressOne.requiredErrorMsg}`),

  [addressTwo.name]: Yup.string(),
  [city.name]: Yup.string().nullable().required(`${city.requiredErrorMsg}`),
  [state.name]: Yup.string(),
  [zipcode.name]: Yup.string()
    .required(`${zipcode.requiredErrorMsg}`)
    .test(
      "len",
      `${zipcode.invalidErrorMsg}`,
      (val) => val && val.length === 5
    ),
  [country.name]: Yup.string().required(`${country.requiredErrorMsg}`),
  [price.name]: Yup.string().required(`${price.requiredErrorMsg}`),
});
