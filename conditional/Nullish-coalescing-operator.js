// Nullish coalescing operator ??

let data1 = [
  {
    name: "company1",
    cost: 2500,
  },
  {
    name: "company2",
    cost: null,
    shipping: 0,
  },
];

console.log(`name: ${data1[1].name ?? "NA"}`);
console.log(`cost: ${data1[1].cost ?? "NA"}`);
console.log(`shjipping: ${data1[1].shipping ?? "NA"}`);

let tempData = [
  {
    location: "Block A - East",
    sensor1: 0,
    sensor2: 0,
    sensor3: 4.2,
  },
  {
    location: "Block b - East",
    sensor1: 0,
    sensor2: 4,
    sensor3: 0,
  },
];

console.log(
  `${tempData[1].location}:${
    tempData[1].sensor1 || tempData[1].sensor2 || tempData[1].sensor3
  } degree`
);
console.log(
  `${tempData[1].location}:${
    tempData[1].sensor1 ?? tempData[1].sensor2 ?? tempData[1].sensor3
  } degree`
);
