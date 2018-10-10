const allDrivers = [
  {
    name: 'John Snow',
    available: true,
    contacts: ['123456'],
    location: "King's Landing",
  },
  {
    name: 'Peter Parker',
    available: true,
    contacts: ['098765'],
    location: 'Hamburg',
  },
  {
    name: 'Tony Stark',
    available: true,
    contacts: ['123456'],
    location: 'Massachussets',
  },
];

export const getDriverByLocation = (location: string) => {
  return (
    allDrivers.find(driver => driver.location === location) ||
    `No driver found @ ${location}`
  );
};
