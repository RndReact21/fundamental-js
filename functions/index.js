let defaultValue = "BNCC";

function greeting(parameter = defaultValue) {
  return `Greetings: ${parameter}`;
}

console.log(greeting()); // output: Greetings: BNCC
console.log(greeting("JIRA")); // output: Greetings: JIRA

const greetingVariableFunction = function (parameter = defaultValue) {
  return `Greetings: ${parameter}`;
};

console.log(greetingVariableFunction()); // output: Greetings: BNCC
console.log(greetingVariableFunction("JIRA")); // output: Greetings: JIRA

const greetingArrowFunction = (parameter = defaultValue) => {
  return `Greetings: ${parameter}`;
};

console.log(greetingArrowFunction()); // output: Greetings: BNCC
console.log(greetingArrowFunction("JIRA")); // output: Greetings: JIRA

let names = ["luca", "luffy", "Popo", "Robin", "Rika"];

names.map(function (names) {
  return names.toUpperCase();
});

names.map((names) => {
  return names.toUpperCase;
});
