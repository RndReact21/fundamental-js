let users = ["luca", "luffy", "Popo", "Robin", "Rika"];

const generateRandomTime = () => {
  return Math.floor(Math.random() * 5) * 500;
};

const getUsersData = (generateUserIDInvoker) => {
  setTimeout(() => {
    generateUserIDInvoker(users);
  }, generateRandomTime);
};

const generateUserID = (users, printUserDataInvoker) => {
  setTimeout(() => {
    let modUsers = users.map((user) => {
      return {
        name: user,
        id: user.toUpperCase() + "xYz",
      };
    });
    printUserDataInvoker(modUsers);
  }, generateRandomTime);
};

const printUserData = (users) => {
  console.log(users);
};

const flow = () => {
  getUsersData(function (userData) {
    generateUserID(userData, function (modUserData) {
      printUserData(modUserData);
    });
  });
};

flow();
