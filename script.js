let car1 = new Object();
car1.color = "red";
car1.maxSpeed = 200;
car1.driver = {
  name: "Mykola Fetsiak",
  category: "C",
  personalLimitations: "No driving at night"
};
car1.tuning = true;
car1.numberOfAccidents = 0;

car1.drive = function () {
  console.log("I am not driving at night");
};

let car2 = {
  color: "blue",
  maxSpeed: 220,
  driver: {
    name: "Mykola Fetsiak",
    category: "B",
    personalLimitations: null
  },
  tuning: false,
  numberOfAccidents: 2,
  drive: function () {
    console.log("I can drive anytime");
  }
};

function Truck(color, weight, avgSpeed, brand, model) {
  this.color = color;
  this.weight = weight;
  this.avgSpeed = avgSpeed;
  this.brand = brand;
  this.model = model;
}

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
  this.driver = {
    name: name,
    nightDriving: nightDriving,
    experience: experience
  };
};

Truck.prototype.trip = function () {
  if (!this.driver) {
    console.log("No driver assigned");
    return;
  }
  let message = "Driver " + this.driver.name + " ";
  message += this.driver.nightDriving ? "drives at night" : "does not drive at night";
  message += " and has " + this.driver.experience + " years of experience.";
  console.log(message);
};

let truck1 = new Truck("white", 5000, 80.5, "Volvo", "FH16");
let truck2 = new Truck("black", 4500, 85.3, "Scania", "R500");

truck1.AssignDriver("Mykola Fetsiak", true, 5);
truck2.AssignDriver("Mykola Fetsiak", false, 3);

function testCars() {
  console.clear();
  console.log("Testing car1:");
  car1.drive();
  console.log("Testing car2:");
  car2.drive();
}

function testTrucks() {
  console.clear();
  console.log("Testing truck1:");
  truck1.trip();
  console.log("Testing truck2:");
  truck2.trip();
}
