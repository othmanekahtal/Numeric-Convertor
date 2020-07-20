var Decimal = document.getElementById("textHtml1"),
    Hexadecimal = document.getElementById("textHtml2"),
    Octal = document.getElementById("textHtml3"),
    Binary = document.getElementById("textHtml4");
function convertor(){
  // we convert the string to int with Number() Method
  var getNum=Number(document.getElementById('TxtINput').value);
  // console.log(getNum);
  //// TODO: WE NEED FUNCTION CONVERT THE STRING TO NUMBER
    Decimal.innerHTML = getNum.toString(10);
    Hexadecimal.innerHTML = getNum.toString(16).toUpperCase();
    Octal.innerHTML = getNum.toString(8);
    Binary.innerHTML = getNum.toString(2);
}
