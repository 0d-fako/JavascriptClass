

function printStudentName(Object) {
    return Object.name;
}

function printStudentSecondCourse(Object) {
    return Object.hobbies[1];
}

function printStudentZip(student) {
    return Object.address.zip;
}

module.exports = { printStudentName, printStudentSecondCourse, printStudentZip };