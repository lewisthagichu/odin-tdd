const isvalid = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'Invalid input value';
  }
  return true;
};

const add = (num1, num2) => {
  if (isvalid(num1, num2)) {
    return num1 + num2;
  }
};

const substract = (num1, num2) => {
  if (isvalid(num1, num2)) {
    return num1 - num2;
  }
};

const multiply = (num1, num2) => {
  if (isvalid(num1, num2)) {
    return num1 * num2;
  }
};

const divide = (num1, num2) => {
  if (isvalid(num1, num2)) {
    return num1 / num2;
  }
};

const calculator = {
  add,
  substract,
  multiply,
  divide,
};

export default calculator;
