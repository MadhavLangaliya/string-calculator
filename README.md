# String Calculator Kata

This project implements the String Calculator Kata in Node.js using Test-Driven Development (TDD) with Jest.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Description

The String Calculator Kata is a programming exercise that focuses on developing a class (`StringCalculator`) to handle various string inputs representing numbers. It involves implementing methods that can perform calculations on these inputs under specific conditions and constraints, such as custom delimiters and error handling for negative numbers.

## Features

1. **Add Method**
   - Handles empty strings, single numbers, and sums of multiple numbers separated by commas or new lines.
   - Supports custom delimiters specified at the start of the string (`//delimiter\n...`).

2. **Error Handling**
   - Throws an exception for negative numbers with a message indicating the negative numbers.
   - Ignores numbers larger than 1000.

3. **Custom Delimiters**
   - Supports delimiters of any length (`//[delimiter]\n...`).
   - Supports multiple delimiters (`//[delim1][delim2]\n...`).

4. **Method Call Counting**
   - Includes a method to count how many times the `Add` method has been called.

5. **Event Handling (Node.js Only)**
   - Demonstrates an event (`AddOccurred`) triggered after each `Add` call.

## Requirements

- Node.js (recommended version)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MadhavLangaliya/string-calculator.git
   cd string-calculator


## Install dependencies:

npm install

## Run tests:

npm test

