const arr = [
  { name: "Kostya", id: 1 },
  { name: "Tanya", id: 2 },
  { name: "Pasha", id: 3 },
  { name: "Masha", id: 4 },
];

const inputValue = 'sh'

const filteredArr = arr.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase()))

console.log(filteredArr);
