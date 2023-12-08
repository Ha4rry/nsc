function isBinary(number) {
    // idk how to use regex, found this on google.
    return /^[01]+$/.test(Number(number));
}

function numberSystemToItsRealWordLol(numType) {
    if (numType == 'dec') {
        return 'decimal'
    }
    else if (numType == 'hex') {
        return 'hexadecimal'
    }
    else if (numType == 'bin') {
        return 'binary'
    }
    else if (numType == 'oct') {
        return 'octal'
    }
}

function calculateStuff(numType) {

}
function convertFrom(numType) {
    let errorText = document.querySelector("#errorText");
    let dec = document.querySelector("#DecimalTB");
    let hex = document.querySelector("#HexaDecimalTB");
    let bin = document.querySelector("#BinaryTB");
    let oct = document.querySelector("#OctalTB");
    errorText.innerText = ``

    
    num = eval(numType).value;

    if (numType == 'dec') {
        hex.value = Number(num).toString(16);
        bin.value = Number(num).toString(2);
        oct.value = Number(num).toString(8);
    }
    else if (numType == 'hex') {
        dec.value = parseInt(Number(num), 16);
        bin.value = parseInt(Number(num), 16).toString(2);
        oct.value = parseInt(Number(num), 16).toString(8);
    }
    else if (numType == 'bin') {
        dec.value = parseInt(Number(num), 2);
        hex.value = parseInt(Number(num), 2).toString(16);
        oct.value = parseInt(Number(num), 2).toString(8);
    }
    else if (numType == 'oct') {
        dec.value = parseInt(Number(num), 8);
        hex.value = parseInt(Number(num), 8).toString(16);
        bin.value = parseInt(Number(num), 8).toString(2);
    }


    
    
    // that if statement figures out how to convert from current numType input to DEC.
    
    

    if ( dec.value == "NaN" || hex.value == "NaN" || bin.value == "NaN" || oct.value == "NaN" || !(isBinary(bin.value)) ) {
        errorText.innerText = `ERROR: Invalid ${numberSystemToItsRealWordLol(numType)} value.`;
        dec.value = 0;
        hex.value = 0;
        bin.value = 0;
        oct.value = 0;
    }


}