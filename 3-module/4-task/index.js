function showSalary(data, age) {
  let result = [];

  data.forEach(function(user) {
    if (user.age <= age){
      result.push(`${user.name}, ${user.balance}`);
    }
  });

  return result.join('\n');
}


