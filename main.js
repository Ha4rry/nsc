function numberSystemToItsRealWordLol(numType) {
    if (numType == 'dec') {
        return 'decimal'
    }
    if (numType == 'hex') {
        return 'hexadecimal'
    }
    if (numType == 'bin') {
        return 'binary'
    }
    if (numType == 'oct') {
        return 'octal'
    }
}
function convertFrom(numType) {
    let dec = document.querySelector("#DecimalTB");
    let hex = document.querySelector("#HexaDecimalTB");
    let bin = document.querySelector("#BinaryTB");
    let oct = document.querySelector("#OctalTB");

    num = Number(eval(numType).value);

    let orig = eval(numType).value;

    dec.value = num.toString(10);
    hex.value = num.toString(16);
    bin.value = num.toString(2);
    oct.value = num.toString(8);

    if (dec.value == "NaN" || hex.value == "NaN" || bin.value == "NaN" || oct.value == "NaN") {

        let invalidString = `Invalid ${numberSystemToItsRealWordLol(numType)} value.`;
        dec.value = invalidString;
        hex.value = invalidString;
        bin.value = invalidString;
        oct.value = invalidString;
    }

    eval(numType).value = orig;


}