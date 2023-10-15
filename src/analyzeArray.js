const analyzeArray = (array) => {
  if (!isValidArray(array)) {
    return 'not a number array';
  } else {
    const total = array.reduce((current, previous) => {
      return current + previous;
    });

    const average = total / array.length;

    const min = array.reduce((current, previous) => {
      return Math.min(current, previous);
    });

    const max = array.reduce((current, previous) => {
      return Math.max(current, previous);
    });

    const length = array.length;

    const analyzedArray = {
      average: average,
      min: min,
      max: max,
      length: length,
    };

    return analyzedArray;
  }
};

const isValidArray = (array) => {
  if (Array.isArray(array)) {
    if (array.every((item) => typeof item !== 'number')) {
      return false;
    }
  } else {
    return false;
  }
  return true;
};

export default analyzeArray;
