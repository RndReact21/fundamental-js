let countries = ["indonesia", "malaysia", "singapore"];

// use array .push() to add new data at the back 3rd index
countries.push("thailand"); //  now array contains : [ 'indonesia', 'malaysia', 'singapore', 'thailand' ]

// use array .pop() to remove data at the back 3rd index
countries.pop(); // now array contains : [ 'indonesia', 'malaysia', 'singapore' ]

// use array .unshift() to add new data at front 0 index
countries.unshift("vietnam"); // now array contains: [ 'vietnam', 'indonesia', 'malaysia', 'singapore' ]

// use array .shift() to remove data at front 0 index
countries.shift(); // now array contains: [ 'indonesia', 'malaysia', 'singapore' ]

// use array. length to know how many data in the array
countries.length; // will return 3 since it have 3 data

countries.forEach((country) => {
  console.log(country); // will print each data in countries
});

function addCountryToString(country) {
  return `Country ${country}`;
}

// map return new array with each of the array data modified according to provided function
let mappedCountries = countries.map(addCountryToString);
// mappedCountries have value of :
// [ 'Country indonesia', 'Country malaysia', 'Country singapore' ]

function removeCountryThatStartWithI(country) {
  return country[0] != "i"; // if it's false it will be remove from array
}

// filter return new array with filter data according to the provided function
let filteredCountries = countries.filter(removeCountryThatStartWithI);
// filteredCountries have value of :
// [ 'malaysia', 'singapore' ]

function transformAllCountryUpperCaseThenReduceToString(wantedString, country) {
  return `${wantedString} ${country.toUpperCase()}`;
}
let initialValueOfReduce = "Have reduce to uppercase : ";
let reduceCountries = countries.reduce(
  transformAllCountryUpperCaseThenReduceToString,
  initialValueOfReduce
);
// reduceCountries have value of:
//

console.log(reduceCountries);
