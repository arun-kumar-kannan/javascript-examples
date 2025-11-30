let place = [
  {
    name: "company1",
    star: 5,
    location: {
      lat: 53.55,
      long: 65.78,
    },
  },
  {
    name: "company2",
    star: 5,
  },
];

console.log(`Location: ${place[0].location.lat},${place[0].location.long}`);
console.log(`Location: ${place[1].location?.lat},${place[1].location?.long}`);
console.log(
  `Location: ${place[1].location?.lat ?? "N/A"},${
    place[1].location?.long ?? "N/A"
  }`
);
