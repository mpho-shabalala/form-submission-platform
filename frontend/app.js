// select enquiery form
const enqForm = document.querySelector('#enquery-form');

//function - a block of code that is grouped to perform a specific action
// this function's job is to display a message in the console,
//  saying that our form is succesfully submitted
function submitForm(){ 
    console.log('form submited');

    // get values from form inputs
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const enquiry = document.getElementById("enquiry").value;

    //log values into the console
    console.log(name, contact, enquiry);
 }


 

//now we submit our form
enqForm.addEventListener(
    'submit',
    (event) => {
        event.preventDefault(); //prevent default form submission behaveour
        submitForm(); // call the form submission function
    }
);