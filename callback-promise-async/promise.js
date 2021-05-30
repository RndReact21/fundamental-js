let users = ["luca", "luffy", "Popo", "Robin", "Rika"];

const generateRandomTime = () => {
  return Math.floor(Math.random() * 5) * 500;
};

const getUsersData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users);
    }, generateRandomTime);
  });
};

const generateUserID = (users) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let modUsers = users.map((user) => {
        return {
          name: user,
          id: user.toUpperCase() + "xYz",
        };
      });
      resolve(modUsers);
    }, generateRandomTime);
  });
};

const printUserData = (users) => {
  console.log(users);
};

const flow = () => {
  getUsersData()
    .then((userData) => {
      return generateUserID(userData); // return new promise
    })
    .then((modUserData) => {
      //  chained then
      printUserData(modUserData);
    });
};

const flowVer2 = () => {
  getUsersData().then((userData) => {
    generateUserID(userData).then((modUserData) => {
      printUserData(modUserData);
    });
  });
};

flow();
flowVer2(); // exactly the same with flow()
