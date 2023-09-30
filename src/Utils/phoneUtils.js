export const formatPhoneNumber = inputValue => {
  const numericValue = inputValue.replace(/[^0-9]/g, '');

  let formattedNumber = numericValue;

  if (numericValue.length >= 4 && numericValue.charAt(3) !== '-') {
    formattedNumber = numericValue.slice(0, 3) + '-' + numericValue.slice(3);
  }
  if (numericValue.length >= 7 && numericValue.charAt(6) !== '-') {
    formattedNumber =
      formattedNumber.slice(0, 7) + '-' + formattedNumber.slice(7);
  }

  if (formattedNumber.length > 12) {
    formattedNumber = formattedNumber.slice(0, 12);
  }

  return formattedNumber;
};
