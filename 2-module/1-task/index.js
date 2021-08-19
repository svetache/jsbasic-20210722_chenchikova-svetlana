function sumSalary(salaries) {
    let sum = 0;
    for (let salary in salaries) {
      if (salaries[salary] && typeof salaries[salary] == 'number' && salaries[salary] !== NaN && salaries[salary] !== Infinity && salaries[salary] !== -Infinity){
        sum += salaries[salary];
    }
    }
    
    {
      return sum;
    }
  }

  let salaries = {
    John: 1000,
    Ann: 1600,
    Pete: 1300,
    month: 'December',
    currency: 'USD',
    isPayed: false
  };

sumSalary(salaries);

