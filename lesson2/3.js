

const newNames = [];
const names =  ["НПП Прізвище Кіл-ть Приблизно","______________________в_ базіпо_Україні", "0-rt-rgfr", "8484fjdfkf", "МЕЛЬНИК","ШЕВЧЕНКО","БОЙКО","КОВАЛЕНКО","БОНДАРЕНКО","ТКАЧЕНКО","КОВАЛЬЧУК","КРАВЧЕНКО","ОЛІЙНИК"];
const alphabet = ["А","Б","В","Г","Д","Е","Ё","Ж","З","И","І","Й","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ц","Ч","Ш","Щ","Ъ","Ы","Ь","Э","Ю","Я"];
for (let i = 0; i < names.length; i++) {
   const name = names[i];
   let nameIsValid = true;
        for (let j = 0; j < name.length; j++) {
            const character = name[j];

            if ( alphabet.indexOf(character) === -1) {
                nameIsValid = false;
                break;
            }
            
        }

        if( nameIsValid===true){
            newNames.push(name);
        }


}


   


console.log(newNames)

