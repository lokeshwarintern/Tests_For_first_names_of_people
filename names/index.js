let namesList = require("../utilities/utils/index");
let people = require("../country/state/city/index");

let getPeopleInCity = (people) => {
  return namesList(people);
};

module.exports = getPeopleInCity;
