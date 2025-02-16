//Task 1: Function Declaration
function calculateSalary(baseSalary, bonus, taxRate) { //Declares the function calculateSalary
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate); //Declares the equation for net salary which will be calculated later
    console.log(`Net Salary: $${netSalary.toFixed(2)}`) //Logs the Equation to the console as a template literal
};
calculateSalary(5000, 500, 0.1); //Generates an output of $5000.00
calculateSalary(7000, 1000, 0.15); //Generates an output of 6950.00

//Task 2: Function Expression
const calculateDiscount = function(price, discountRate) { //Establishes calculate discount as a function
    let finalPrice = price - (price * discountRate); //Creates the equation which will find the Final Price when the function is executed
    console.log(`Final Price: $${finalPrice.toFixed(2)}`); //Logs the results of the Equation to the console as a template literal
};
calculateDiscount(100, 0.2); //Generates an output of $80.00
calculateDiscount(250, 0.15); //Generates an output of $212.50