const fs = require("fs");
//to read the json file
const data = fs.readFileSync("../students.json", "utf-8");
//converting to js object
const obj = JSON.parse(data);

const getStudentByIndex = function (index) {
  for (let i = 0; i < obj.students.length; i++) {
    if (i === index) {
      return obj.students[i];
    }
  }
};

const getStudentByName = function (name1) {
  let result;
  for (let i = 0; i < obj.students.length; i++) {
    if (obj.students[i].name === name1) {
      return obj.students[i];
    }
  }

  return -1;
};

const graduateStudent = function (name1) {
  for (let i = 0; i < obj.students.length; i++) {
    if (obj.students[i].name === name1) {
      //increasing the value of term
      obj.students[i].term++;
      //stringify--easy to read-- the obj for json file
      const backToJSON = JSON.stringify(obj, null, 2);
      //rewrite the content of json file
      fs.writeFileSync("../students.json", backToJSON);
    }
  }
};

//don't code underneath
if (typeof getStudentByIndex === "undefined") {
  getStudentByIndex = undefined;
}

if (typeof getStudentByName === "undefined") {
  getStudentByName = undefined;
}

if (typeof graduateStudent === "undefined") {
  graduateStudent = undefined;
}

module.exports = {
  getStudentByIndex,
  getStudentByName,
  graduateStudent,
};
