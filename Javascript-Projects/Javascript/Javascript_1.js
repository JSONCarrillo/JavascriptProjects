function switchFunct() {
    let breedOutput;
    let Breed = document.getElementById('favInput').value
    switch (Breed) {
        case 'Corgi':
            breedOutput = "The " + Breed + " is a great breed!"
            break;
        case 'German Shepherd':
            breedOutput = "The" + Breed + " is a great breed!"
            break;
        case 'Dalmation':
            breedOutput = "The " + Breed + " is a great breed!"
            break;
        case 'Pit Bull':
            breedOutput = "The " + Breed + " is a great breed!"
            break;
        case 'Golden Retriever':
            breedOutput = "The " + Breed + " is a great breed!"
            break;
        case 'Labrador':
            breedOutput = "The " + Breed + " is a great breed!"
            break;
        default:
            breedOutput = 'Please choose a dog from the list.(Inputs are case sensitive)'
    }
    document.getElementById('switchOutput').innerHTML = breedOutput
}

let A = document.getElementsByClassName('Change');

A[0].innerHTML = 'This is not the original'


//Canvas challenge 
var canvas = document.getElementById('canvas');
var canCircle = canvas.getContext('2d');
canCircle.beginpath;
canCircle.arc(250, 125, 100, 0, 2 * Math.PI)
canCircle.stroke();

