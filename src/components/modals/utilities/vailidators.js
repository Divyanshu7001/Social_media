export const validate = ({ values, setErrors }) => {
  const newErrors = {};

  values.forEach((fieldObj) => {
    const key = Object.keys(fieldObj)[0];
    const val = fieldObj[key];

    if (!val) {
      newErrors[key] = `Please fill ${
        key.charAt(0).toUpperCase() + key.slice(1)
      }`;
    }
  });

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
