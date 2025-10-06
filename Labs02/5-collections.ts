const phoneBookArray = [
  { name: "Marcus Aurelius", phone: "+380445554132" },
  { name: "Gaius Julius Caesar", phone: "+380991112372" },
  { name: "Socrates", phone: "+380671234568" }
];
function findPhoneByName(name: string): string | undefined {
  for (let i = 0; i < phoneBookArray.length; i++) {
    if (phoneBookArray[i].name === name) {
      return phoneBookArray[i].phone;
    }
  }
  return undefined;
}
console.log("Phone (array):", findPhoneByName("Socrates"));
const phoneBookHash: { [key: string]: string } = {
  "Marcus Aurelius": "+380445554433",
  "Gaius Julius Caesar": "+380991112233",
  "Socrates": "+380671234567"
};
function findPhoneByNameHash(name: string): string | undefined {
  return phoneBookHash[name];
}
console.log("Phone (hash):", findPhoneByNameHash("Marcus Aurelius"));

