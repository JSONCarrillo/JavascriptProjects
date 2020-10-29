function myDictionary() {
    let person = {
        name: "Jason",
        age: 21,
        profession: "Programmer",
        profession: "Gamer",
    };
    delete person.profession;
    document.getElementById('dictionary').innerHTML = "I am a " + person.profession;
}