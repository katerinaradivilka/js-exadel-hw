

function pinCodeGenerator(length) {
    const min = Math.pow(10,length-1);
    const max = Math.pow(10,length);
    return  Math.floor(Math.random() * (max - min) ) + min;  
}
const result =  pinCodeGenerator(1);
console.log(result);