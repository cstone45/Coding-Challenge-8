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

//Task 3: Arrow Function
const calculateServiceFee = (amount, serviceType) => { //Establishes the calculate service fee function
    if (serviceType === "Premium") serviceFee = amount * 0.15; //Sets the equation for a Premium Servicetype
    else if (serviceType === "Standard") serviceFee = amount * 0.10; //Sets the equation for a Standard Servicetype
    else amount * 0.05; //Sets the equation for a Basic Servicetype
    console.log(`Service Fee: $${serviceFee.toFixed(2)}`); //Logs the results of the equation to the console a a template literal
};
calculateServiceFee(200, "Premium"); //Generates an output of $30.00
calculateServiceFee(500, "Standard"); //Generates an output of $50.00

//Task 4: Parameters and Arguments
function calculateRentalCost(days, carType, insurance = false) { //Establishes calculateRentalCost as a function
    let carRates = {"Economy": 40, "Standard": 60, "Luxury": 100,}; //Sets the rental cost rate for rental cars of different types
    let rentalCost = (carRates[carType] * days) + (insurance? days * 20: 0); //Creates the equation which will be used to find total rental cost from applied perameters
    console.log(`Total Rental Cost: $${rentalCost}`); //Logs the rentalCost formula to the console as a template literal
};
calculateRentalCost(3, "Economy", true); //Generates an output of $180
calculateRentalCost(5, "Luxury", false); //Generates an output of $500