const humanYearsCatYearsDogYears = humanYears => [
  humanYears,
  ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
  ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
];



console.log(humanYearsCatYearsDogYears(1)) //> [1,15,15]
console.log(humanYearsCatYearsDogYears(2)) //> [2,24,24]
console.log(humanYearsCatYearsDogYears(10)) //> [10,56,64]