function clear()
{   
   document.getElementById("myForm").reset();
}
// Conversion1 result 1

function convertInchesToFeet() {
    var inches = document.getElementById('input1').value; 
    var feet = inches/12 + " ft"; 
    document.getElementById('result1').innerHTML = feet;
}
 
document.getElementById('btn1').addEventListener('click', convertInchesToFeet);

// Conversion2 result 2

function convertFeetToInches() {
    var feet = document.getElementById('input2').value; 
    var inches = feet * 12 + " inches"; 
    document.getElementById('result2').innerHTML = inches;
}
 
document.getElementById('btn2').addEventListener('click', convertFeetToInches);

// Conversion3 result 3

function convertFeetToMiles() {
    var feet = document.getElementById('input3').value; 
    var miles = feet / 5280 + " mile(s)"; 
    document.getElementById('result3').innerHTML = miles;
}
 
document.getElementById('btn3').addEventListener('click', convertFeetToMiles);

// Conversion4 result 4

function convertMilesToFeet() {
    var miles = document.getElementById('input4').value; 
    var feet = miles * 5280 + " ft"; 
    document.getElementById('result4').innerHTML = feet;
}
 
document.getElementById('btn4').addEventListener('click', convertMilesToFeet);

// Conversion5 result 5

function convertMilesToKilometers() {
    var miles = document.getElementById('input5').value; 
    var kilometer = miles * 1.60934 + " Km"; 
    document.getElementById('result5').innerHTML = kilometer;
}
 
document.getElementById('btn5').addEventListener('click', convertMilesToKilometers);

// Conversion6 result 6

function convertKilometersToMiles() {
    var kilometer = document.getElementById('input6').value; 
    var miles = kilometer / 1.60934 + " Mile(s)"; 
    document.getElementById('result6').innerHTML = miles;
}
 
document.getElementById('btn6').addEventListener('click', convertKilometersToMiles);

// Conversion7 result 7

function convertKilometersToMeters() {
    var kilometer = document.getElementById('input7').value; 
    var meters = kilometer * 1000 + " m"; 
    document.getElementById('result7').innerHTML = meters;
}
 
document.getElementById('btn7').addEventListener('click', convertKilometersToMeters);

// Conversion8 result 8

function convertMetersToCentimeters() {
    var meters = document.getElementById('input8').value; 
    var centimeters = meters * 1000 + " cm"; 
    document.getElementById('result8').innerHTML = centimeters;
}
 
document.getElementById('btn8').addEventListener('click', convertMetersToCentimeters);

// Conversion9 result 9

function convertCelsiusToFahrenheit() {
    var Celsius = document.getElementById('input9').value; 
    var Fahrenheit = ((Celsius * 9/5) + 32)  + " Fahrenheit"; 
    document.getElementById('result9').innerHTML = Fahrenheit;
}
 
document.getElementById('btn9').addEventListener('click', convertCelsiusToFahrenheit);

// Conversion10 result 10

function convertFahrenheitToCelsius () {
    var Fahrenheit = document.getElementById('input10').value; 
    var Celsius = ((Fahrenheit - 32) * 5/9) + " Celsius"; 
    document.getElementById('result10').innerHTML = Celsius;
}
 
document.getElementById('btn10').addEventListener('click', convertFahrenheitToCelsius);

// Conversion11 result 11

function convertFahrenheitToKelvin () {
    var Fahrenheit = document.getElementById('input11').value; 
    var kelvin = (((Fahrenheit - 32) * 5/9) + 273.15)+ " K"; 
    document.getElementById('result11').innerHTML = kelvin;
}
 
document.getElementById('btn11').addEventListener('click', convertFahrenheitToKelvin);