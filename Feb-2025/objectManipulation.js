

function printStudentName(Object) {
    return Object.name;
}

function printStudentSecondCourse(Object) {
    return Object.courses[1];
}

function printStudentZip(Object) {
    return Object.address.zip;
}


function getDetails(Object) {
    return `${Object.name} is ${Object.age} years old and lives at ${Object.address.street}, ${Object.address.city}, ${Object.address.zip}.`;
}
module.exports = { printStudentName, printStudentSecondCourse, printStudentZip, getDetails };