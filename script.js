$(document).ready(onReady);
let addEmployeeInfo = [];

function onReady() {
  renderEmployeeItems(addEmployeeInfo);
  renderTotalSalary(addEmployeeInfo);
 $('#theSubmitButton').on('click', addEmployeeInfoToFile);
}

function addEmployeeInfoToFile() {
  let firstName = $('#firstName').val();
  let lastName = $('#lastName').val();
  let id = $('#id').val();
  let title = $('#title').val();
  let annualSalary= $('#annualSalary').val();
  let newItem = {
     fName: firstName, 
     lName: lastName,
     id: id,
     title: title,
     annualSalary: Number(annualSalary),
 };
 addEmployeeInfo.push(newItem);
console.log(newItem);
 $('#firstName').val('');
 $('#lastName').val('');
 $('#id').val('')
 $('#title').val('');
 $('#annualSalary').val('')
 renderEmployeeItems(addEmployeeInfo)
 renderTotalSalary(addEmployeeInfo)
}
function renderEmployeeItems(addEmployeeInfo){
   $('#salaryCalculatorTableBody').empty();
   for (let employee of addEmployeeInfo){
       let newTableRow = `
       <tr>
           <td>${employee.fName}</td>
           <td>${employee.lName}</td>
           <td>${employee.id}</td>
           <td>${employee.title}</td>
           <td>${employee.annualSalary}</td>
       </tr> 
       `;
       $('#salaryCalculatorTableBody').append(newTableRow);
   }
 } 

 function renderTotalSalary(itemsToSum){
 let totalSalary = calculateTotalSalary(itemsToSum);
 $('#totalMonthly').text(totalSalary)
}

 function calculateTotalSalary(itemsToSum){
 let sum = 0;
 for (let employee of addEmployeeInfo){
 sum += employee.annualSalary /12;
 }
   return sum;
 }

