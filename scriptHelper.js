// Write your helper functions here!

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
let div = document.getElementById("missionTarget");
div.innerHTML = `
<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter:${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}"></img>`;

}
    

 
 
 function validateInput(testInput) {
    // if test input is equal to an empty string
    // return the string empty
    // use the isNaN(testInput) method to return either NaN or is a Number
    // false = string
    // true = number
       let numInput = Number(testInput)
        if ( testInput === "") {
            return "Empty";
        } else if (isNaN(numInput)) {
            return "Not a Number";
        } else if (!isNaN(numInput)) {
            return "Is a Number";
        }


 }  


      
    
 
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
     let form = document.querySelector("form");
    
        let pilotName = document.getElementById("pilotStatus");
        let copilotName = document.getElementById("copilotStatus");
        let fuel = document.getElementById("fuelStatus");
        let cargo = document.getElementById("cargoStatus");
        let launch = document.getElementById("launchStatus");

        if ( validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuel) === "Empty" || validateInput(cargo) === "Empty") {
            alert("All Fields Required");
        } else if ( validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuel) === "Not a Number" || validateInput(cargo) === "Not a Number") {
            alert("Valid Input Required");
        } else {
            list.style.visibility = "visible";
            pilotName.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotName.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            if (fuelLevel < 10000 && cargoLevel > 10000) {
                fuel.innerHTML = "Fuel level too low for launch";
                cargo.innerHTML = "Cargo mass too heavy for launch";
                launch.innerHTML = "Shuttle Not Ready for Launch";
                launch.style.color = "#C7254E";
            } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
                fuel.innerHTML = "Fuel level high enough for launch";
                cargo.innerHTML = "Cargo mass too heavy for launch";
                launch.innerHTML = "Shuttle Not Ready for Launch";
                launch.style.color = "#C7254E";

            } else if (fuelLevel < 10000 && cargoLevel <= 10000) {
                fuel.innerHTML = "Fuel level too low for launch";
                cargo.innerHTML = "Cargo mass low enough for launch";
                launch.innerHTML = "Shuttle Not Ready for Launch";
                launch.style.color = "#C7254E";
            }else {
                fuel.innerHTML = "Fuel level high enough for launch";
                cargo.innerHTML = "Cargo mass low enough for launch";
                launch.innerHTML = "Shuttle Ready for Launch";
                launch.style.color = "#419F6A";
                
            }
        }

 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let selectedPlanet = Math.floor(Math.random() * planets.length);
    return planets[selectedPlanet];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;