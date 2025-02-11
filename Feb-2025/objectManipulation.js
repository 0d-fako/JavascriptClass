const student = {
    name: 'John',
    age: 25,
    courses: ['Maths', 'Physics', 'Computer Science'],
    address: {
        street: '123 Main St',
        city: 'New York',
        zip: 10001
    }
}

function printStudentName(student) {
    console.log(student.name);
}

function printStudentSecondCourse(student) {
    console.log(student.hobbies[1]);
}

function printStudentZip(student) {
    console.log(student.address.zip);
}