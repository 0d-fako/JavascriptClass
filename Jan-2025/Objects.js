const person = {
    firstName : "Olumide",
    lastname: "Fakorede",
    dateOfBirth: "1993" ,
    
}


function displayKeysAndValues(object){
    for(const key in object){
        console.log(`${key} : ${object[key]}`);
    }
}


displayKeysAndValues(person)
