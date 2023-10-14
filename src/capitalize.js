import { log } from 'console';

const capitalize = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (isUpperCase(str[i])) {
      return str;
    } else if (isLowerCase(str[i])) {
      return str.slice(0, i) + str.charAt(i).toUpperCase() + str.slice(i + 1);
    }
  }
  return 'no valid characters';
};

const isLowerCase = (char) => {
  if (char == char.toLowerCase() && char != char.toUpperCase()) {
    return true;
  }
  return false;
};

const isUpperCase = (char) => {
  if (char == char.toUpperCase() && char != char.toLowerCase()) {
    return true;
  }
  return false;
};

export default capitalize;
