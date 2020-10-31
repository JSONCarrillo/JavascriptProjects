function rideFunction() {
    let height, canRide;
    height = document.getElementById('height').value;
    canRide = (height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById('ride').innerHTML = canRide + " to ride"
}

//challenge assignment
function ageCheck() {
    let age, canVote;
    age = document.getElementById('age').value;
    canVote = (age >= 18) ? 'You can Vote' : 'You are not old enough to vote';
    if (age <= 2 && age > 0) {
        document.getElementById('ageAnswer').innerHTML = 'What an advanced baby you are!'
    }
    else if (age < 0) {
        document.getElementById('ageAnswer').innerHTML = 'Wait how are you THAT young?'
    }
    else {
        document.getElementById('ageAnswer').innerHTML = canVote;
    }
}

//Objects

function vehicle(Make, Model, Year, Color) {
    this.vehicle_Make = Make;
    this.vehicle_Model = Model;
    this.vehicle_Year = Year;
    this.vehicle_Color = Color;
};

var Jack = new vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "Black and White");
var Erik = new vehicle("Ford", "Pinto", 1971, "Muastard");

function myFunction() {
    document.getElementById('keywords_and_constructors').innerHTML = "Erik drives a " + Erik.vehicle_Color + "-colored " +
        Erik.vehicle_Model + " manufactured in " + Erik.vehicle_Year;
}

//assignment 3
function robotAssistant(Name, Year, Model_Num) {
    this.robotName = Name;
    this.robotYear = Year;
    this.robotModel = Model_Num;
}

let robotOne = new robotAssistant("J0rd3n", 2052, "H3ll0-W0r1d")

function secondFunction() {
    document.getElementById('new_and_this').innerHTML = 'Hello, My name is ' + robotOne.robotName + ". I was manufactured in " +
        robotOne.robotYear + ". And my model number is " + robotOne.robotModel;
}

function multFunction() {
    document.getElementById('nestedFunction').innerHTML = multTwo()
    function multTwo() {
        let base = 1;
        base *= 2;
        return base;
    }
}