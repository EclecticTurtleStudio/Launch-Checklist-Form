// Write your JavaScript code here!

window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(
      function(response) {
         response.json().then( function(json) {
            const div = document.getElementById("missionTarget");
            div.innerHTML = `
               <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${}</li>
                  <li>Diameter: ${}</li>
                  <li>Star: ${}</li>
                  <li>Distance from Earth: ${}</li>
                  <li>Number of Moons: ${}</li>
               </ol>
               <img src="${}">
            `
         })
      }
   )
})

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector('input[name=pilotName]');
      let copilotNameInput = document.querySelector('input[name=copilotName]');
      let fuellevelInput = document.querySelector('input[name=fuelLevel]');
      let cargoMassInput = document.querySelector('input[name=cargoMass]');

      let launchIndicator = 'green';

      event.preventDefault();

      let pilot = pilotNameInput.value;
      let copilot = copilotNameInput.value;

      if (pilot === "" || copilot === "") {
         alert("All fields are required!");
      } if (isNaN(fuellevelInput.value)) {
         alert("Fuel Level must be a number");
      } if (isNaN(cargoMassInput.value)) {
         alert("Cargo Mass must be a number");
      }

      function showFaultyItemsList() {
         let launchStatus = document.getElementById("launchStatus");
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";

         document.getElementById("faultyItems").style.visibility = "visible";
      }

      if (fuellevelInput.value < 10000) {
         let fuelStatus = document.getElementById("fuelstatus");
         fuelStatus.innerHTML = "Not enough fuel for your journey";
         launchIndicator = 'red';
      } 

      if (cargoMassInput.value > 10000){
         let cargoStatus = document.getElementById("cargoStatus");
         cargoStatus.innerHTML = "Too much mass for shuttle takeoff";
         launchIndicator = 'red';
      }

      if (launchIndicator == 'red') {
         showFaultyItemsList();
      } if (launchIndicator == 'green') {
         let launchStatus = document.getElementById("launchStatus");
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatus.style.color = "green";
      }

   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
