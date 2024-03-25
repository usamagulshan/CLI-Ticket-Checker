#! usr/bin/env node
import inquirer from "inquirer";
const visitor = await inquirer.prompt([{
        message: "Enter Visitor name", type: "string", name: "Visitor name"
    },
    { message: "Enter Visitor age", type: "number", name: "age" }
]);
if (visitor.age >= 2 && visitor.age <= 10) {
    console.log("You are a child, Ticket fee for a child is 0");
}
else if (visitor.age >= 10 && visitor.age <= 20) {
    console.log("You are a teenager, Ticket fee for teenagers are 500rs");
}
else if (visitor.age >= 21 && visitor.age <= 30) {
    console.log("You are adult, Ticket fee for adults are 1000rs");
}
else if (visitor.age >= 30 && visitor.age <= 60) {
    console.log("You are a senior citizen, Ticket fee for senior citizens are 0");
}
else {
    console.log("Sorry, You are late");
}
