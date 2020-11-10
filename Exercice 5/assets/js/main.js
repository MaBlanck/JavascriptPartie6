let firstNumber = 10;
var secondNumber = 10;

while(firstNumber*secondNumber <= 250){
    var secondNumber = firstNumber*secondNumber;
    document.write(secondNumber);
    break;
}