
//OVERALL
//create website for customers to order ice cream flavors
//the customer response is captured example "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
//from the browser console, view a table listing of how many of each flavor they ordered.
//example produces result of vanilla (3), coffee (2), strawberry (1).

//Pseudocode
//javascript prompt will accept customer order in comma separated format
//prompt returns an input string
//Split input string into an array of strings.  Use .split.
//Use a loop to iterate through the array of flavors
//Create an object 
//Within object keep count of how many orders there are of each flavor

//Provide instructions to customer via prompt.  At this same time this creates a variable name for the array. 

const flavorOrder = prompt("Enter flavors seperated by a comma. We have them all!")

// order has now been received.

//split array by comma separator

const flavorSplit = flavorOrder.split(",")

// console.log(flavorSplit) - This works.


//create empty object to keep track of flavors
const totalFlavorsOrdered = {}

//Use a for of loop to total the different flavors from the flavorSplit variable

for (const type of flavorSplit) {
    if (totalFlavorsOrdered[type]){
        totalFlavorsOrdered[type]++;
    }
    else {
        totalFlavorsOrdered[type] = 1;
    }
}

console.table(totalFlavorsOrdered);

// This works for summing the order by flavor type.