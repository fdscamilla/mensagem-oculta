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


// seleção codificar/decodificar
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



// função de codificação
function encode(){
    if (lang.value == "base64") {
        var encodedStringBtoA = btoa(document.getElementById('msg').value);
        document.getElementById('result').value = encodedStringBtoA
    }

    if (lang.value == "ceasar") {
        var shift = document.getElementById('shift').value
        var encodedCeasarString = document.getElementById('msg').value;
        var convertido = []

        for(var n = 0; n < encodedCeasarString.length; n++){
            convertido[n] = encodedCeasarString[n].String.fromCharCode(((encodedCeasarString.charCodeAt() - 97 - shift + 26) % 26) + 97);
        }
        document.getElementById('result').value = convertido
    }
}

//função de decodificação
function decode(){
    if (lang.value == "base64") {
    var encodedStringAtoB = atob(document.getElementById('msg').value);
    document.getElementById('result').value = encodedStringAtoB;
    }

}
