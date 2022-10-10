// Write your JavaScript code here!

const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
let form = this.document.querySelector("form");
form.addEventListener("submit", function(event) {
event.preventDefault();
let list =  this.document.getElementById("faultyItems");
let button = document.getElementById("formSubmit");

button.addEventListener("click", function() {
    let pilot = document.getElementById("input[name=pilotName]");
    let copilot = document.getElementById("input[name=copilotName]");
    let fuelLevel = document.getElementById("input[name=fuelLevel]");
    let cargoLevel = document.getElementById("input[name=cargoMass]");
})

return formSubmission(pilot, copilot, fuelLevel, cargoLevel);
})








   
});
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;