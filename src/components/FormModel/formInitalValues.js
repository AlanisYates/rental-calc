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

// export default {
//   [nickName.name]: "",
//   [addressOne.name]: "",
//   [addressTwo.name]: "",
//   [city.name]: "",
//   [state.name]: "",
//   [zipcode.name]: "",
//   [country.name]: "",
//   [price.name]: "",
//   [zLink.name]: "",
//   [term.name]: "",
//   [loanAmt.name]: "",
//   [interest.name]: "",
//   [downPay.name]: "",
//   income: [
//     {
//       name: "",
//       amount: "",
//     },
//     {
//       name: "",
//       amount: "",
//     },
//   ],
//   expense: [
//     {
//       name: "",
//       amount: "",
//     },
//   ],
// };

export default {
  [nickName.name]: "Test",
  [addressOne.name]: "123 address way",
  [addressTwo.name]: "nah",
  [city.name]: "Tampa",
  [state.name]: "FL",
  [zipcode.name]: "33679",
  [country.name]: "United States",
  [price.name]: "200000",
  [zLink.name]: "6745",
  [term.name]: "360",
  [loanAmt.name]: "3000000",
  [interest.name]: "3.5",
  [downPay.name]: "20000",
  income: [
    {
      name: "rent",
      amount: ".99",
    },
    {
      name: "rent 1",
      amount: "0.74",
    },
    {
      name: "rent 2",
      amount: "105.99",
    },
  ],
  expense: [
    {
      name: "insurance",
      amount: "300",
    },
  ],
};
