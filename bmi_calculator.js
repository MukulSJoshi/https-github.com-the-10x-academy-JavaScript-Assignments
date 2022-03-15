// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#result");
    let bmi = (weight / ((height * height)/ 10000));
}
module.exports = BMICalculator;
