/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertEl = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")

convertEl.addEventListener("click", function() {
    let inputEl = document.getElementById("input-number").value
    const inputValue = parseFloat(inputEl)

    // Validate input
    if (isNaN(inputValue) || inputValue <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    const feetToMeter = (inputValue / 3.28084).toFixed(3)
    const meterToFeet = (inputValue * 3.28084).toFixed(3)
    const litersToGallons = (inputValue * 0.264172).toFixed(3)
    const gallonsToLiters = (inputValue / 0.264172).toFixed(3)
    const kilogramToPounds = (inputValue * 2.20462).toFixed(3)
    const poundsToKilogram = (inputValue / 2.20462).toFixed(3)
    
    lengthEl.innerHTML = `<p> ${inputEl} meters = ${meterToFeet} feet | ${inputEl} feet = ${feetToMeter} meters</p>`
    
    volumeEl.innerHTML = `<p> ${inputEl} liters = ${litersToGallons} gallons | ${inputEl} gallons = ${gallonsToLiters} liters</p>`
    
    massEl.innerHTML = `<p> ${inputEl} kilos = ${kilogramToPounds} pounds | ${inputEl} pounds = ${poundsToKilogram} kilos</p>` 
})