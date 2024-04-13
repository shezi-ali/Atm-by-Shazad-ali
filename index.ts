import inquirer from 'inquirer';

// Your account balance and ATM pin
let myBalance = 50000;
const myPin = 2341;
console.log("Welcome to code with Shazad_ATM Machine");

// Prompting for PIN
const pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code",
    }
]);

if (pinAnswer.pin === myPin) {
    console.log("Your pin is correct.\nLogin successful");
    console.log(`Current account balance is ${myBalance}`);

    // Prompting for operation
    const operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["Withdraw Amount", "Check Balance"],
        }
    ]);

    if (operationAns.operation === "Withdraw Amount") {
        // Prompting for amount to withdraw
        const amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:",
            }
        ]);

        if (amountAns.amount > myBalance) {
            console.log("Your balance is insufficient");
        } else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdrawn successfully`);
            console.log(`Your remaining balance is ${myBalance}`);
        }
    } else if (operationAns.operation === "Check Balance") {
        console.log(`Your account balance is ${myBalance}`);
    }
} else {
    console.log("PIN is incorrect, please try again");
}
