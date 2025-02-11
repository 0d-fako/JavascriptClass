const {printSecondEmployeeName, extractCompanyInfo, printEmployeeInfo} = require('./techCorp.js');


let company = {
    name: "TechCorp",
    location: "San Francisco",
    employees: [
        {id: 1, name: "John", department: "Engineering"},
        {id: 2, name: "Jane", department: "HR"},
        {id: 3, name: "Jim", department: "Marketing"},
        {id: 4, name: "Jake", department: "Engineering"}
    ]
};

test('Print Second Employee Name', () => {
    let result = printSecondEmployeeName(company);
    let answer = 'Jane';

    expect(result).toBe(answer);
})

test('Extract Company Info', () => {
    let result = extractCompanyInfo(company);
    let answer = {name: "TechCorp", location: "San Francisco"};

    expect(result).toEqual(answer);
})

test('Print Employee Info', () => {
    let result = printEmployeeInfo(company);
    let answer = "John works in Engineering. Jane works in HR. Jim works in Marketing. Jake works in Engineering. ";

    expect(result).toBe(answer);
})
