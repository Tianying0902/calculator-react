const formatter = (value) => {
  let output = "";
  let decimal = "";
  let isNeg;
  if (parseFloat(value) < 0) {
    isNeg = true;
    output = output.substring(1);
  }
  if (value.includes(".")) {
    output = value.substring(0, value.indexOf("."));
    decimal = value.substring(value.indexOf("."));
  } else {
    output = value;
  }
  return isNeg
    ? "-" + parseFloat(output).toLocaleString() + decimal
    : parseFloat(output).toLocaleString() + decimal;
};
export default formatter;
