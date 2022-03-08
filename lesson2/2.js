

function validatePhoneNumber(phoneNumber) {

const digits = ["0","1","2","3","4","5","6","7","8","9"];

const phoneNumberWithoutSpaces = phoneNumber.split(" ").join("");

if (phoneNumberWithoutSpaces.length !== 10){
    return false;
}


for (let i = 0; i < phoneNumberWithoutSpaces.length; i++) {

    console.log( `Index ${i}  , value ${phoneNumberWithoutSpaces[i]}`)
    const element = phoneNumberWithoutSpaces[i];

    if (digits.indexOf(element) === -1) {
        
        return false;
    }
}

return true;
   
}



console.log(validatePhoneNumber("0437348348"))

