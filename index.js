const userInputString = prompt(
    "Please enter some flavors seperated by commas.", "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const stringArray = userInputString.split(",");
const flavors = {};

for (const flavor of stringArray){
    if (flavor in flavors){
        flavors[flavor]++;
    }
    else {
      flavors[flavor] = 1;
    }
  }

  let flavorString = "";
  for (const [flavor, count] of Object.entries(flavors)) {
    flavorString += `${flavor} ${count}, `;
  }
console.log(flavorString); 