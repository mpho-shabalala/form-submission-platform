// select enquiery form
const enqForm = document.querySelector('#enquery-form');


// CREATE  a data store with some dummy data
// [] - array
// {} - object
// [{},{},{}] is an array of objects
// each object must have data stored in key value pairs
// e.g. {name: 'someName', contact: '+27 66 023 5768'} , the key value pairs must be comma separated
let queries = [
    {
        name: 'Bob',
        contact: '+27 456 432',
        message: 'Hi, i would like to enquire about ...'
    }, 
     {
        name: 'Alice',
        contact: '+27 687 490',
        message: 'Hi, i would like to enquire about ...'
    }, 
     {
        name: 'Bob',
        contact: '+27 193 459',
        message: 'Hi, i would like to enquire about ...'
    }
]; //it is an array



// create a function that is going to take queries and store them in a table we had in html
function displayQueries(quiries){
    // select the table from html
    const queryTable = document.querySelector('#quiry-table');

    // loop through each quiry in quieries
    quiries.forEach(quiery => {
        // create a row for each quiery
        const quieryRow = document.createElement('tr');
        // create name, contact, message and modification buttons columns
        const nameCol = document.createElement('td');
        //append name into the column
        nameCol.textContent = quiery.name;

        const contactCol = document.createElement('td');
        contactCol.textContent = quiery.contact;

        const messageCol = document.createElement('td');
        messageCol.textContent = quiery.message;

        // now add two buttons inside a modify column
        const modifyCol = document.createElement('td');
        //set id to modifyCol so that you can style it
        modifyCol.setAttribute('id', 'modify-col')
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        modifyCol.append(editBtn, deleteBtn);

        // now append each column into the row
        quieryRow.append(nameCol, contactCol, messageCol, modifyCol);
        // now append each row into the table
        queryTable.append(quieryRow);
    });
}

// now call displayQuiries function
displayQueries(queries); // check the browser
// we are good, next lets style the table

//function - a block of code that is grouped to perform a specific action
// this function's job is to display a message in the console,
//  saying that our form is succesfully submitted
function submitForm(){ 
    // get values from form inputs
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const enquiry = document.getElementById("enquiry").value;

    // now lest add th data we get from the form into our array of queries
    // first lets log existing data into the console

    //lets save our new data from our form
    const newQuery = {
        name: name, 
        contact: contact,
        message: enquiry
    }

    // lets push new query into the existing list of queries
    queries.push(newQuery); // now when we log our list to the console we will have our new data from the form
    console.log(queries);
 
 }


 

//now we submit our form
 enqForm.addEventListener(
    'submit',
    (event) => {
        event.preventDefault(); //prevent default form submission behaveour
        submitForm(); // call the form submission function
    }
);

