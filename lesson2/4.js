const vovelsCounter = (str) => {
  const vovels = ['a', 'e', 'i', 'o', 'u']
  let counter = 0
  for(letter of str){
     if(vovels.includes(letter.toLowerCase())){
         counter = counter + 1
    }
  }
  return counter
}
console.log(vovelsCounter('The current directory is AD-123'));