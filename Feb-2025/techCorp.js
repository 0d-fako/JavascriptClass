const company = {
    name: "TechCorp",
    location: "San Francisco",
    employees: [
        {id: 1, name: "John", department: "Engineering"},
        {id: 2, name: "Jane", department: "HR"},
        {id: 3, name: "Jim", department: "Marketing"},
        {id: 4, name: "Jake", department: "Engineering"}
    ]
};

function printSecondEmployeeName(company){
    return company.employees[1].name;
}

function extractCompanyInfo(company){
    const {name, location} = company;
    return {name, location};
}

function printEmployeeInfo(company){
    let employeeInfo = "";
    company.employees.forEach(employee => {
        employeeInfo += `${employee.name} works in ${employee.department}. `;
    });
    return employeeInfo;
}

