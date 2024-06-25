// StringCalculator.js
class StringCalculator {
    constructor() {
      this.calledCount = 0;
    }
  
    Add(numbers) {
      if (numbers === '') {
        return 0;
      }
  
      // Handle different delimiters
      let delimiter = /[\n,]/;
      if (numbers.startsWith('//')) {
        const delimiterSection = numbers.substring(2, numbers.indexOf('\n'));
        const customDelimiters = delimiterSection.match(/\[([^\]]+)\]/g);
        if (customDelimiters) {
          delimiter = new RegExp(customDelimiters.map(d => d.slice(1, -1).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|'));
        } else {
          delimiter = new RegExp(`[${delimiterSection}]`);
        }
        numbers = numbers.substring(numbers.indexOf('\n') + 1);
      }
  
      // Split numbers by delimiter
      const numsArray = numbers.split(delimiter);
  
      // Convert array of strings to array of numbers and sum them up
      const negatives = [];
      const sum = numsArray.reduce((acc, num) => {
        const parsedNum = parseInt(num);
        if (parsedNum < 0) {
          negatives.push(parsedNum);
        }
        if (parsedNum <= 1000) {
          return acc + parsedNum;
        }
        return acc;
      }, 0);
  
      // Check if there are any negatives and throw an error
      if (negatives.length > 0) {
        throw new Error('negatives not allowed: ' + negatives.join(','));
      }
  
      // Increment calledCount
      this.calledCount++;
  
      return sum;
    }
  
    GetCalledCount() {
      return this.calledCount;
    }
  }
  
  module.exports = StringCalculator;
  