let initialArray = [
  "item1",
  () => {
    return "item2";
  },
];

let [item1, item2] = initialArray;
console.log(item1);
console.log(item2());

let initialObject = {
  key1: "value1",
  key2: () => {
    return "value2";
  },
};

let { key1, key2 } = initialObject;

const generateUserCardHTML = (user) => {
  return `
  <h1>${user.name}</h1>
  <h2>${user.address}</h2>
  <ul>
    ${user.skills
      .map((skill) => {
        return `<li>${skill}</li>`;
      })
      .join("")}
  </ul>
  `;
};

const generateUserCardHTMLDesc = ({ name, address, skills }) => {
  return `
    <h1>${name}</h1>
    <h2>${address}</h2>
    <ul>
        ${skills
          .map((skill) => {
            return `<li>${skill}</li>`;
          })
          .join("")}
    </ul>
    `;
};
