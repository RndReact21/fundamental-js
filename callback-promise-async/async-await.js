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

const flow = async () => {
  try {
    let userData = await getUsersData();
    let modUserData = await generateUserID(userData);
    printUserData(modUserData);
  } catch (err) {
    console.error(err);
  }
};

flow();
