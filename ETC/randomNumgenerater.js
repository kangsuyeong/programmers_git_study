function pickRandomPerson() {
  const people = ["윤슬", "민혁", "수영", "예지", "지운"];
  const randomIndex = Math.floor(Math.random() * people.length);
  return people[randomIndex];
}


console.log(pickRandomPerson());