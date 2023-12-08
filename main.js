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
    let dec = document.querySelector("#DecimalTB");
    let hex = document.querySelector("#HexaDecimalTB");
    let bin = document.querySelector("#BinaryTB");
    let oct = document.querySelector("#OctalTB");

    
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
    
    

if (dec.value == "NaN" || hex.value == "NaN" || bin.value == "NaN" || oct.value == "NaN") {
    let invalidString = `Invalid ${numberSystemToItsRealWordLol(numType)} value.`;
    dec.value = invalidString;
    hex.value = invalidString;
    bin.value = invalidString;
    oct.value = invalidString;
}


}