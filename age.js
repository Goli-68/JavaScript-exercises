//Age-ify (A future age calculator)

let yearOfBirth = 1989;
let yearFuture = 2045;
const theirAge = yearFuture  - yearOfBirth;
console.log(" You will be " + theirAge + " years old in " + yearFuture);


//Goodboy-Oldboy (A dog age calculator)

let dogYearOfBirth = 2024;
let dogYearFuture = 2027;
const dogAge = dogYearFuture - dogYearOfBirth;
const dogYear = dogAge * 7;
const shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears) {
  console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture);
} else {
  console.log("Your dog will be " + age + " dog years old in " + dogYearFuture);
}

//Housey pricey (A house price estimator)
const peterWidth = 8;
const peterDepth = 10;
const peterHeight = 10;
const peterGardenSizeInM2 = 100;
const peterHousePrice = 2500000;

const peterVolumeInMeters = peterWidth * peterDepth * peterHeight;
const realHousePrice = peterVolumeInMeters * 2.5 * 1000 + peterGardenSizeInM2 * 300;

if (realHousePrice < peterHousePrice) {
  console.log("Peter is paying too much for his house.");
}
else if (realHousePrice > peterHousePrice) {
  console.log("Peter is paying too little for his house.");
}
else {
  console.log("Peter is paying the right price for his house.");
}

const juliaWidth = 5;
const juliaDepth = 11;
const juliaHeight = 8;
const juliaGardenSizeInM2 = 70;
const juliaHousePrice = 1000000;

const juliaVolumeInMeters = juliaWidth * juliaDepth * juliaHeight;
const realHousePriceJulia = juliaVolumeInMeters * 2.5 * 1000 + juliaGardenSizeInM2 * 300;

if (realHousePriceJulia < juliaHousePrice) {
  console.log("Julia is paying too much for her house.");
}
else if (realHousePriceJulia > juliaHousePrice) {
  console.log("Julia is paying too little for her house.");
}  
else{
    console.log("Julia is paying the right price for her house.");
}

//Ez Namey (Startup name generator) Optional
 const firstWords = ['Easy', 'Awesome', 'good', 'nice', 'cheap', 'happy', 'lucky', 'Smart', 'great', 'Future'];
 const secondWords = ['money', 'firm', 'business', 'house', 'Ideas', 'company', 'city', 'Works', 'library', 'person'];
 //I need explanation for the code below
const randomFirstIndex = Math.floor(Math.random() * 10);
const randomSecondIndex = Math.floor(Math.random() * 10);

const startupName = firstWords[randomFirstIndex] + " " + secondWords[randomSecondIndex];

const nameLength = startupName.length;

console.log("The startup: \"" + startupName + "\" contains " + nameLength + " characters");