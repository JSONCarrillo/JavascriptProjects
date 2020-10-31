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