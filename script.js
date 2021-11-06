
$(document).ready(onReady);
let salaryCalculatorItems = [
  {fname: Amber,
    lname: Sorenson,
    id: 12334,
    title: Swing-Manager,
    annualSalary: 90000,
  }
];

function onReady(){
  renderSalaryOptions(salaryCalculatorItems);

}


function renderSalaryOptions (itemsToRender){
  for (let salaryItem of itemsToRender){
    let newTableRow = ` 
    <tr>
        <td>${salaryCalculatorItem.fname}</td>
        <td>${salaryCalculatorItem.lname}</td>
        <td>${salaryCalculatorItem.id}</td>
        <td>${salaryCalculatorItem.title}</td>
        <td>${salaryCalculatorItem.annualSalary}</td>
    </tr> 
    `;
    $('#salaryCalculatorTableBody').append(newTableRow);
}

