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

//Task 5: Returning Values
function calculateLoanPayment(principle, rate, time) { //Establishes calculateLoanPayment as a function
    let totalPayment = principle + (principle * rate * time); //Establishes the equation to calculate the total loan payment
    return `Total Payment: $${totalPayment.toFixed(2)}` //Returns the value calculated by the equation and displays it as a template literal in the console
};
console.log(calculateLoanPayment(1000, 0.05, 2)); //Generates an output of $6050.00
console.log(calculateLoanPayment(5000, 0.07, 3)); //Generates an output of $1100.00

//Task 6: Higher-Order Functions
function filterLargeTransactions(transactions, filterFunction) { //Establishes the filterLargeTransactions function
    let largeTransactions = transactions.filter(filterFunction); //Establishes large transactions as what will be filtered from the array
    console.log(`Large Transactions: ${largeTransactions}`); //Logs the function to the console as a template literal
};
let transactions = [200, 1500, 3200, 800, 2500]; //Establishes the intial list of transactions
filterLargeTransactions(transactions, amount => amount > 1000); //Filters out all transactions less than 1000 and logs the results to the console

//Task 7: Closures
function createCartTracker() { //Establishes the Cart Tracker Function
    let totalCartValue = 0; //Sets the initial value of the cart
    return function(cart) { //Creates the function which will allow the formula to add units to the cart to be executed
        totalCartValue += cart; //Establishes the formula which will log the total value in the cart and increase it as more units are added
        return `Total Cart Value: $${totalCartValue}`; //Logs the total cart value to the console as a template literal
    };
}
let cart = createCartTracker(); //establishes the cart tracker for the test variables
console.log(cart(20)); //Adds 20 units to the cart to generate an output of $20
console.log(cart(35)); //Adds 35 units to the cart to generate an output of $55