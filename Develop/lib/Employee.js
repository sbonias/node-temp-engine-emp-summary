// TODO: Write code to define and export the Employee class
// keyword "class"
// capital letter
class Employee {
  // passing parameters into the class
  constructor(name, id, email) {
    // initializing values inside of the constructor
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // return name function
  getName() {
    return this.name;
  }
  // return id function
  getID() {
    return this.id;
  }
  // return email function
  getEmail() {
    return this.email;
  }
  // return role function
  getRole() {
    return "Employee";
  }
}

// Module exports are the instructions that tells Node. js
// which bits of code (functions, objects, strings, etc.) to
// “export” from a given file so other files are allowed to access the exported code.
module.exports = Employee;
