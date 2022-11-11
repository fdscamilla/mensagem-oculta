/* var decodedStringBtoA = 'Hello World!';

var encodedStringBtoA = btoa(decodedStringBtoA);

console.log(encodedStringBtoA);


var decodedStringBtoA = prompt("Insira sua mensagem");

var encodedStringBtoA = btoa(decodedStringBtoA);

alert(encodedStringBtoA);


// base64
// variável da mensagem a ser codificada
var decodedStringBtoA = prompt("Insira sua mensagem");

// função de codificação
function encode(){
    var encodedStringBtoA = btoa(decodedStringBtoA);
    alert(encodedStringBtoA);
}

encode();


// variável da mensagem a ser decodificada
var decodedStringAtoB = prompt("Insira sua mensagem");

// função de decodificação
function decode(){
    var encodedStringAtoB = atob(decodedStringAtoB);
    alert(encodedStringAtoB);
}

decode();



// ceasar cipher
// variável da mensagem a ser codificada
var decodedCeasarString = prompt("Insira sua mensagem");

// variável da mensagem após ser codificada
var encodedCeasarString = decodedCeasarString.split("");


console.log(encodedCeasarString)

var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

*/

// seleção base64/ceasar's cipher
function linguagem() {
    if (lang.value == "ceasar") {
        document.getElementById("ifYes").style.display = "block";
    } else {
        document.getElementById("ifYes").style.display = "none";
    }
}


// deleção codificar/decodificar
function button1(){
    if (document.getElementById('encode').checked) {
        document.getElementById('encodeBtn').style.display = 'block';
        document.getElementById('decodeBtn').style.display = 'none';
        
    } else {
        document.getElementById('encodeBtn').style.display = 'none'
    }
}

function button2(){
    if (document.getElementById('decode').checked) {
        document.getElementById('decodeBtn').style.display = 'block';
        document.getElementById('encodeBtn').style.display = 'none'
    } else {
        document.getElementById('decodeBtn').style.display = 'none'
    }
}