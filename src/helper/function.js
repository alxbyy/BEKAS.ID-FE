export function thousandSeparator(amount, reformat = false, format = ",") {
  let result;
  if (amount) {
    if (reformat) {
      result = parseInt(amount.split(format).join(""));
    } else {
      result = amount
        .toString()
        .replace(/,/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, format);
    }
  } else {
    result = 0;
  }

  return result;
}
