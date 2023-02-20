// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
var form = window.document.getElementById("addForm");
var listOfTheEmployees = window.document.getElementById("employees");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
var count = 0;
var countOfTheEmployees = document.getElementById("empCount");


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let employeeId = document.getElementById('id').value;
    let employeeName = document.getElementById('name').value;
    let employeeExtension = document.getElementById('extension').value;
    let employeeEmail = document.getElementById('email').value;
    let employeeDepartment = document.getElementById('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let newRowOfTheEmployee = listOfTheEmployees.insertRow(-1);

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellOfTheEmployeeId = newRowOfTheEmployee.insertCell(0);
    let cellOfTheEmployeeName = newRowOfTheEmployee.insertCell(1);
    let cellOfTheEmployeeExtension = newRowOfTheEmployee.insertCell(2);
    let cellOfTheEmployeeEmail = newRowOfTheEmployee.insertCell(3);
    let cellOfTheEmployeeDepartment = newRowOfTheEmployee.insertCell(4);
    let cellOfTheEmployeeDelete = newRowOfTheEmployee.insertCell(5);


    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellOfTheEmployeeId.appendChild(document.createTextNode(employeeId));
    cellOfTheEmployeeName.appendChild(document.createTextNode(employeeName));
    cellOfTheEmployeeExtension.appendChild(document.createTextNode(employeeExtension));
    cellOfTheEmployeeEmail.appendChild(document.createTextNode(employeeEmail));
    cellOfTheEmployeeDepartment.appendChild(document.createTextNode(employeeDepartment));

    // CREATE THE DELETE BUTTON
    let buttonOfTheEmployeeDeletion = document.createElement('button');
    buttonOfTheEmployeeDeletion.className = 'btn btn-danger';
    buttonOfTheEmployeeDeletion.appendChild(document.createTextNode('X'));
    buttonOfTheEmployeeDeletion.setAttribute("onclick", "employeeDelete(this)");
    cellOfTheEmployeeDelete.appendChild(buttonOfTheEmployeeDeletion);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count=count+1;
    countOfTheEmployees.innerHTML = "(" + count + ")";

});

// DELETE EMPLOYEE
var employeeDelete = function (employeeDeletion) {
    var confirmation = confirm("Do you wish to delete this employee?");
    if(confirmation === true){
    var selectedRow = employeeDeletion.parentNode.parentNode;
    listOfTheEmployees.deleteRow(selectedRow.rowIndex);
    count=count-1;
    countOfTheEmployees.innerHTML = "(" + count + ")";
    }
  };