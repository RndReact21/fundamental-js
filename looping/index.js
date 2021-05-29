let names = ["luca", "luffy", "Popo", "Robin", "Rika"];

// normal for

for (let i = 0; i < names.length; i++) {
  console.log(names[i]); //  print all names
}
console.log("\n\n\n\n\n\n");
// for of
for (let anyVarName of names) {
  console.log(anyVarName); // print all names
}
console.log("\n\n\n\n\n\n");
// for in
for (let anyVarName in names) {
  console.log(anyVarName); // print all index, it's more hard to understand refer to docs
}
