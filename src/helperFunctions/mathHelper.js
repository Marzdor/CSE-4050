export const percentToDecimal = (percent) => {
  return parseFloat((percent / 100).toFixed(2));
};

export const decimalToPercent = (decimal) => {
  return parseInt(decimal * 100);
};
