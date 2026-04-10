let company = ["ola", "amazon", "microsoft", "hitachi"];
company.unshift("uer");
console.log(company);
company.shift();
console.log(company);
company.slice(1, 2);
console.log(company);
company.splice(1, 2, "hello");
console.log(company);