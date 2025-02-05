// 3. Create a function named `celsiusToFahrenheit` that takes a number (temperature in Celsius).
//    The function should return the equivalent temperature in Fahrenheit.
//    Formula: Fahrenheit = (Celsius * 9/5) + 32
//    Ensure the parameter and return type are typed correctly.

function celsiusToFahrenheit(celsius: number) {
     return ((celsius)*(9/5)) + 32;
}

// Expected output:
console.log(celsiusToFahrenheit(0));  // 32
console.log(celsiusToFahrenheit(25)); // 77