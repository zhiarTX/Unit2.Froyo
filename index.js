const userInputString = prompt(
    "Please enter some flavors seperated by commas.", "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const stringArray = userInputString.split(",");
const flavors = {};

for (const flavor of stringArray){
    if (flavor in flavors){
        flavors[flavor].push(flavor);
    }
    else {
      flavors[flavor] = [flavor];
    }
  }

let flavorString =``;
for (const [flavor, count] of Object.entries(flavors)){
    flavorString += `${flavor} ${count},`;
}
console.log(flavorString);