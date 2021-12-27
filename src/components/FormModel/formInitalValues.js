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
    friends,
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
  income: [
    {
      name: "Item Name",
      amount: "",
    },
  ],
};
