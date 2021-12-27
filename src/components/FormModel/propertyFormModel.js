export default {
  formId: "propertyForm",
  formField: {
    nickName: {
      name: "nickName",
      label: "Name",
    },
    zLink: {
      name: "zLink",
      label: "Zillow Link *",
      requiredErrorMsg: "Link is required.",
    },
    addressOne: {
      name: "addressOne",
      label: "Address Line 1 *",
      requiredErrorMsg: "Address line 1 is required.",
    },
    addressTwo: {
      name: "addressTwo",
      label: "Address Line 2",
    },
    city: {
      name: "city",
      label: "City *",
      requiredErrorMsg: "City is required.",
    },
    state: {
      name: "state",
      label: "State/Province/Region",
    },
    zipcode: {
      name: "zipcode",
      label: "Zipcode *",
      requiredErrorMsg: "Zipcode is required",
      invalidErrorMsg: "Zipcode is not valid (e.g. 70000)",
    },
    country: {
      name: "country",
      label: "Country *",
      requiredErrorMsg: "Country is required",
    },
    price: {
      name: "price",
      label: "Price *",
      requiredErrorMsg: "Price is required",
    },
    friends: {
      name: "friends",
    },
  },
};
