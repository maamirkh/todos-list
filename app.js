import inquirer from "inquirer";
let buyingList = [];
let condition = true;
while (condition) {
    let addItem = await inquirer.prompt([
        {
            name: 'newItem',
            type: 'input',
            message: "what you want to add in your Todos?"
        },
        {
            name: 'addMore',
            type: 'confirm',
            message: "Do you want to add more ?",
            default: "true"
        }
    ]);
    buyingList.push(addItem.newItem);
    condition = (addItem.addMore);
    console.log(`purchased item:   ${buyingList}`);
}
