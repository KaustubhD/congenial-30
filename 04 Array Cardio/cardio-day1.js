// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
console.log('\t****  1  ****')
const one500s = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600)
console.table(one500s)

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
console.log('\t****  2  ****')
const names = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
console.table(names)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
console.log('\t****  3  ****')
const oldToYoung = inventors.sort((one, two) => one.year - two.year)
console.table(oldToYoung)

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
console.log('\t****  4  ****')
const yearsLived = inventors.reduce((totalYears, inventor) => totalYears += inventor.passed - inventor.year, 0)
console.log(yearsLived + ' years')

// 5. Sort the inventors by years lived
console.log('\n\t****  5  ****')
const mostLived = inventors.sort((one, two) => two.passed - two.year - one.passed + one.year)
console.table(mostLived)


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

console.log('\n\t****  6  ****\nGo to https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris and paste this in their console')
console.log(`
var group = [...document.querySelectorAll('.mw-category-group a')] 
  .map(element => element.textContent)
  .filter(text => text.includes('de'))
console.table(group)
`)
// 7. sort Exercise
// Sort the people alphabetically by last name
console.log('\n\t****  7  ****')
const sortByLastname = people.sort((one, two) => one.split(', ')[1].localeCompare(two.split(', ')[1]))
console.table(sortByLastname)


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
console.log('\n\t****  8  ****')
const insts = data.reduce((tab, vehicle) => {
  tab[vehicle] ? tab[vehicle]++ : tab[vehicle] = 1
  return tab
}, {})
console.table(insts)