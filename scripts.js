$(document).ready(onReady);


let salaryCalculatorItems = [
  {
  firstName: "Amber",
  lastName: "Sorenson",
  id: 54645,
  title: "Manager",
  annualSalary: 50000,
  }
];

function onReady() {
  //renderHobbyItems(hobbyItems);
  //renderTotalPrice(hobbyItems);
  $('#submitButton').on( 'click', handleAddItemClick);
  }

  function handleAddItemClick(){
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let annualSalary =$('#annualSalary').val();
    // //let newItem = {
    //     name: newName, 
    //     price: Number(newPrice),
    };
    
    // hobbyItems.push(newItem);
    // $('#nameInput').val('');
    // $('#priceInput').val('');
    