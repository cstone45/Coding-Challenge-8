//Task 1: Function Declaration
function calculateSalary(baseSalary, bonus, taxRate) { //Declares the function calculateSalary
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate); //Declares the equation for net salary which will be calculated later
    console.log(`Net Salary: $${netSalary.toFixed(2)}`) //Logs the Equation to the console as a template literal
};
calculateSalary(5000, 500, 0.1); //Generates an output of $5000.00
calculateSalary(7000, 1000, 0.15); //Generates an output of 6950.00