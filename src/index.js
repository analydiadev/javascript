const assert = require("assert");
const Employee = require("./employee");
const Util = require("./util");
const Manager = require("./manager");
const { getMaxListeners } = require("process");

const GENDER = {
  female: "Ms. ",
  male: "Mr. ",
};

{
  const employee = new Employee({
    name: "Ana",
    gender: GENDER.female,
    age: 22,
  });
  assert.deepStrictEqual(employee.name, "Ms. Ana");
  assert.deepStrictEqual(employee.age, 22);
  assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(2500.0));
  assert.deepStrictEqual(employee.netPay, Util.formatCurrency(2000.0));
}

{
  const employee = new Employee({
    name: "Fábio",
    gender: GENDER.male,
    age: 22,
  });
  assert.deepStrictEqual(employee.name, "Mr. Fábio");
  assert.deepStrictEqual(employee.age, 22);
  assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(2500.0));
  assert.deepStrictEqual(employee.netPay, Util.formatCurrency(2000.0));
  const CURRENT_YEAR = 2023;
  Date.prototype.getFullYear = () => CURRENT_YEAR;
  const expectedBirthYear = 2001;
  assert.deepStrictEqual(employee.birthYear, expectedBirthYear);
}

{
  const manager = new Manager(
    {
        name: 'Vitoria',
        age: 55,
        gender: GENDER.female
    }); 

    assert.deepStrictEqual(manager.netPay, Util.formatCurrency(4000.00))
}
