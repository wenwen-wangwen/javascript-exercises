const findTheOldest = function(array) {
  array.sort((a, b) => {
    const currentYear = new Date().getFullYear();
    const ageA = (a.yearOfDeath || currentYear) - a.yearOfBirth;
    const ageB = (b.yearOfDeath || currentYear) - b.yearOfBirth;
    return ageB > ageA ? 1 : -1;
  })
  return array[0];

};

const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]
findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
