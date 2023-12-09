function isBinary(number) {
    // idk how to use regex, found this on google.

    return /^[01]+$/.test(number);
}

function isHex(number) { 
    // idk how to use regex, found this on google.
    return /^[0-9A-Fa-f]+$/.test(number);
}

function isOct(number) { 
    // idk how to use regex, found this on google.
    return /[0-7]+$/.test(number);
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



function convertFrom(numType) {
    let errorText = document.querySelector("#errorText");
    let dec = document.querySelector("#DecimalTB");
    let hex = document.querySelector("#HexaDecimalTB");
    let bin = document.querySelector("#BinaryTB");
    let oct = document.querySelector("#OctalTB");
    let numTypes = ['dec', 'hex', 'bin', 'oct'];
    errorText.innerText = ``

    
    num = eval(numType).value;

    function clearOtherTextboxes() {
        numTypes.splice(numTypes.indexOf(numType), 1);
        for (nt of numTypes) {
            eval(nt).value = ""
        }
        numTypes.push(numType);
    }


    try {
        if (numType == 'dec') {
            hex.value = BigInt(num).toString(16);
            bin.value = BigInt(num).toString(2);
            oct.value = BigInt(num).toString(8);
        }
        else if (numType == 'hex') {
            dec.value = parseInt(num, 16);
            bin.value = parseInt(num, 16).toString(2);
            oct.value = parseInt(num, 16).toString(8);
        }
        else if (numType == 'bin') {
            dec.value = parseInt(BigInt(num), 2);
            hex.value = parseInt(BigInt(num), 2).toString(16);
            oct.value = parseInt(BigInt(num), 2).toString(8);
        }
        else if (numType == 'oct') {
            dec.value = parseInt(BigInt(num), 8);
            hex.value = parseInt(BigInt(num), 8).toString(16);
            bin.value = parseInt(BigInt(num), 8).toString(2);
        }
      } catch (SyntaxError) {

        errorText.innerText = `ERROR: Invalid ${numberSystemToItsRealWordLol(numType)} value.`;
        clearOtherTextboxes();
      }
    if (dec.value == '' || hex.value == '' || bin.value == '' || oct.value == '') {
        clearOtherTextboxes();
    }      

    
    
    
    
    // if ( dec.value >= Math.pow(2,50) || hex.value >= Math.pow(2,50) || bin.value >= Math.pow(2,50) || oct.value >= Math.pow(2,50) ) {
    //     errorText.innerText = `Warning: Numbers at this length may cause inaccuracies in conversion.`;
    // }

    if ( (dec.value == "NaN" || hex.value == "NaN" || bin.value == "NaN" || oct.value == "NaN" || (!(isBinary(bin.value)) && bin.value != "") ||  (!(isHex(hex.value)) && hex.value != "")) || (!(isOct(oct.value)) && oct.value != "") ){ //  
        errorText.innerText = `ERROR: Invalid ${numberSystemToItsRealWordLol(numType)} value.`;
        clearOtherTextboxes();
    }


}

