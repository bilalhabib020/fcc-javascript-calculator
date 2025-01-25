# React Calculator

## Description
The **React Calculator** is an interactive web-based calculator built with React and Bootstrap. This calculator offers basic arithmetic operations along with additional features like square, square root, and percentage calculations. Its user-friendly interface supports formula and output display and provides a responsive experience.

---

## Features
- Perform basic arithmetic operations: addition, subtraction, multiplication, and division.
- Additional functions:
  - Square a number.
  - Calculate the square root.
  - Calculate percentages.
- Interactive and dynamic formula display.
- Responsive design with Bootstrap integration.
- Error prevention for invalid operations and long input handling.

---

## Project Structure

### `App.jsx`
The main file managing the application's state and logic:
- **State Management**: Tracks the formula, current value, output, and evaluation status.
- **Event Handlers**:
  - `updateDisplay`: Updates the input display and appends digits.
  - `evaluate`: Computes the result of the formula.
  - `clear`: Resets the calculator to its initial state.
  - `handleOperator`: Manages operator inputs and handles edge cases.
  - `handleDecimal`: Appends a decimal point to the current value.
  - Additional Operations: Includes functions for square, square root, and percentage.
- Renders child components: `Display` and `Buttons`.

### `Buttons.jsx`
Defines all calculator buttons:
- Buttons for digits, operators, and special operations.
- Event handlers for button clicks are passed as props.

### `Display.jsx`
Manages the display area:
- **Formula Display**: Shows the formula with proper formatting.
- **Output Display**: Displays the current result or input.

---

## Installation and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-calculator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd react-calculator
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the application:
   ```bash
   npm start
   ```
5. Open the application in your browser at `http://localhost:3000`.

---

## Code Snippets

### Example State Management
```javascript
const initialState = {
  currValue: "",
  output: "0",
  formula: "",
  isEvaluated: false
};
```

### Event Handler: Update Display
```javascript
const updateDisplay = (e) => {
  if(state.formula.length >= 18) return;
  setState(prevState => {
    return {
      ...prevState,
      currValue: state.currValue + e.target.value,
      formula: state.formula + e.target.value,
      output: state.currValue + e.target.value
    };
  });
};
```

---

## Technologies Used
- React.js
- Bootstrap 5
- JavaScript (ES6+)
- CSS

---

## Screenshots
Include screenshots of the application showcasing its layout and functionality.

---

## Potential Enhancements
- Add advanced mathematical functions like trigonometry or logarithms.
- Improve the user interface with more modern styling.
- Implement history tracking for calculations.

---

## License
This project is licensed under the MIT License.

