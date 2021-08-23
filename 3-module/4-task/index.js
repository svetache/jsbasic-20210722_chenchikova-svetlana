let user1 = {
  "balance": "$1,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 21,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let user2 = {
  "balance": "$1,000.07",
  "picture": "https://placehold.it/32x32",
  "age": 30,
  "name": "Duncan Randall",
  "gender": "male",
  "greeting": "Hello, Duncan Randall! You have 2 unread messages.",
  "favouriteFruit": "strawberry"
};
let users = [user1, user2];

function showSalary(users, age){
  if (user1.age && user2.age <= age)
  {
    return users.map(user => `${user.name}, ${user.balance}`).join(',\n')
  }
}
age = 30;
console.log(showSalary(users,30));
age = 40;
console.log(showSalary(users,age));




