// var
var data = "amy";

console.log(data); // output: amy

if (data === "amy") {
  var data = "Terrence";
  console.log("greeting " + data); // output: greeting Terrence
}

// because var have no scope control now the data outside of if become "Terrence"
console.log(data); // output: Terrence

// let

let variable = "amy";

console.log(variable); // output: amy

if (variable === "amy") {
  let variable = "Terrence";
  console.log("greeting " + variable); // output: greeting Terrence
}

// because let have scope control, variable have not change it still amy
console.log(variable); // output: amy

// const

const name = "BNCC";
name = "New Club";
