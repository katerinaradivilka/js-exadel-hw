/*Extend build-in class string with a method called removeSpecialCharacters. 
This method should work for every string created within your js file. 
For example ‘HE!!LL??OO’.removeSpecialCharacters() => ‘HELLO’
 */
String.prototype.removeSpecialCharacters = function () {
  const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  let s = this.valueOf();
  let result = "";
  for (let i = 0; i < s.length; i++) {
    result += s[i].replace(regex, "");
  }
  return result;
};

let myString = "^65***()}{%5$#@!123;;z";

console.log(myString.removeSpecialCharacters());