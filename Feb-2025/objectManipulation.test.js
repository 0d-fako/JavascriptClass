const {printStudentName, printStudentSecondCourse, printStudentZip, getDetails } = require('./objectManipulation.js');


const student = {
    name: 'John',
    age: 25,
    courses: ['Maths', 'Physics', 'Computer Science'],
    address: {
        street: '123 Main St',
        city: 'New York',
        zip: 10001
    },
    gpa: 3.8
}




test('Print Student Name', () => {
    let result = printStudentName(student);
    let answer = 'John';

    expect(result).toBe(answer);
})

test('Print Student Second Course', () => {
    let result = printStudentSecondCourse(student);
    let answer = 'Physics';

    expect(result).toBe(answer);
})

test('Print Student Zip', () => {
    let result = printStudentZip(student);
    let answer = 10001;

    expect(result).toBe(answer);
})

test('Get Student Details', () => {
    let result = getDetails(student);
    let answer = "John is 25 years old and lives at 123 Main St, New York, 10001.";

    expect(result).toBe(answer);
})