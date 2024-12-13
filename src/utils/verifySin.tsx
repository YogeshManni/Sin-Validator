// check if a string contains only numeric characters
const isNumeric = (str: string): boolean => {
  return /^\d+$/.test(str); // regular expression to verify the string contains only digits (0-9)
};

// validate SIN using the Luhn Algorithm
export const isValidSIN = (sin: string): boolean => {
  // return false if  SIN is not 9 digits long and contains characters other then numbers
  if (sin.length !== 9 || !isNumeric(sin)) {
    return false;
  }

  //  Convert the SIN into an array of numbers
  const digits = sin.split("").map(Number);

  // Calculate the checksum using the Luhn Algorithm
  const checksum = digits.reduce((sum, digit, index) => {
    if (index % 2 === 1) {
      // Doubling every second digit
      const doubled = digit * 2;

      // If the result is greater than 9 , then we will subtract 9 to get the sum of its digits
      return sum + (doubled > 9 ? doubled - 9 : doubled);
    }

    // For digits that are not doubled, simply add them to the sum
    return sum + digit;
  }, 0); // Start the sum at 0

  //  Check if the checksum is divisible by 10
  return checksum % 10 === 0; // this will return true if valid, false otherwise
};
