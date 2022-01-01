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
    term,
    loanAmt,
    interest,
    downPay,
  },
} = propertyFormModel;

export default {
  [nickName.name]: "",
  [addressOne.name]: "",
  [addressTwo.name]: "",
  [city.name]: "",
  [state.name]: "",
  [zipcode.name]: "",
  [country.name]: "",
  [price.name]: "",
  [zLink.name]: "",
  [term.name]: "",
  [loanAmt.name]: "",
  [interest.name]: "",
  [downPay.name]: "",
  income: [
    {
      name: "",
      amount: "",
    },
    {
      name: "",
      amount: "",
    },
  ],
  expense: [
    {
      name: "",
      amount: "",
    },
  ],
};
