class EntityBase {
  #name;
  #age;
  #gender;
  constructor({ name, age, gender }) {
    this.#name = name;
    this.#age = age;
    this.#gender = gender;
  }
  get name() {
    this.#gender == "male" ? "Mr." : "Ms.";
    return `${this.#gender}${this.#name}`;
  }
  get birthYear() {
    if (!this.#age) {
      throw new Error("you must define age first");
    }
    return new Date().getFullYear() - this.#age;
  }
  get age() {
    return this.#age
  }
}
module.exports = EntityBase;
