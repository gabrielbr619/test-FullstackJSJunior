const fs = require('fs');

function fsWriteData(fileData) {
  fs.writeFileSync('UsersList.json', JSON.stringify(fileData), (error) => {
    if (error) {
      console.log({ Error: error });
    }
  });
}

module.exports = {

  find() {
    if (!fs.existsSync('./UsersList.json')) {
      return undefined;
    }
    const fileData = JSON.parse(fs.readFileSync('./UsersList.json'));
    return fileData;
  },

  new(user) {
    let fileData;
    if (fs.existsSync('./UsersList.json')) {
      fileData = JSON.parse(fs.readFileSync('./UsersList.json'));
      const userAlreadyExists = fileData.find((x) => x.email === user.email);

      if (userAlreadyExists) {
        return undefined;
      }

      fileData.push(user);
      fsWriteData(fileData);
    } else {
      fileData = [user];
      fsWriteData(fileData);
    }

    return fileData;
  },

  findById(id) {
    const fileData = JSON.parse(fs.readFileSync('./UsersList.json'));
    const idOwner = fileData.find((user) => user.id === id);
    if (!idOwner) {
      return undefined;
    }
    return idOwner;
  },

  update(id, email, senha) {
    const fileData = JSON.parse(fs.readFileSync('./UsersList.json'));
    const userIndex = fileData.findIndex((user) => user.id === id);
    const userUpdate = { id, email, senha };
    fileData[userIndex] = userUpdate;

    fsWriteData(fileData);
    return userUpdate;
  },

  deleteAll() {
    const fileData = JSON.parse(fs.readFileSync('./UsersList.json'));
    fileData.length = 0;

    fsWriteData(fileData);

    return fileData;
  },

  deleteOne(id) {
    const fileData = JSON.parse(fs.readFileSync('./UsersList.json'));
    const newFileData = fileData.filter((user) => user.id === id);
    fsWriteData(newFileData);

    return newFileData;
  },

};
