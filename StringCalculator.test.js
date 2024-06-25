// StringCalculator.test.js
const StringCalculator = require('./StringCalculator');

describe('StringCalculator', () => {
  let calc;

  beforeEach(() => {
    calc = new StringCalculator();
  });

  it('should return 0 for an empty string', () => {
    const result = calc.Add('');
    expect(result).toBe(0);
  });

  it('should return the number itself for a single number', () => {
    const result = calc.Add('5');
    expect(result).toBe(5);
  });

  it('should return the sum of two numbers', () => {
    const result = calc.Add('2,3');
    expect(result).toBe(5);
  });

  it('should handle new lines between numbers', () => {
    const result = calc.Add('1\n2,3');
    expect(result).toBe(6);
  });

  it('should support a custom delimiter', () => {
    const result = calc.Add('//;\n1;2');
    expect(result).toBe(3);
  });

  it('should throw an exception for negative numbers', () => {
    expect(() => calc.Add('1,-2,3,-4')).toThrow('negatives not allowed: -2,-4');
  });

  it('should ignore numbers larger than 1000', () => {
    const result = calc.Add('2,1001');
    expect(result).toBe(2);
  });

  it('should support delimiters of any length', () => {
    const result = calc.Add('//[***]\n1***2***3');
    expect(result).toBe(6);
  });

  it('should support multiple delimiters', () => {
    const result = calc.Add('//[*][%]\n1*2%3');
    expect(result).toBe(6);
  });

  it('should support multiple delimiters with longer lengths', () => {
    const result = calc.Add('//[**][%%]\n1**2%%3');
    expect(result).toBe(6);
  });

  it('should correctly count the number of times Add() is called', () => {
    calc.Add('1,2');
    calc.Add('3,4');
    expect(calc.GetCalledCount()).toBe(2);
  });
});
