//Event listener for the FAQs button
document.querySelector("#showAnz").addEventListener ("click", hideAndOpenBtn)
document.querySelector("#showAnss").addEventListener ("click", hideAndOpenBtn1)
document.querySelector("#showAns").addEventListener ("click", hideAndOpenBtn2)

// function to hide and open the FAQs
function hideAndOpenBtn () {
   document.getElementById("faqAnz").classList.toggle("hide");
}
// function to hide and open the FAQs
function hideAndOpenBtn1 () {
   document.getElementById("faqAnss").classList.toggle("hide");
}
// function to hide and open the FAQs
function hideAndOpenBtn2 () {
   document.getElementById("faqAns").classList.toggle("hide");
}



// error messages array to store error messages
let errorMessages = [];


//Event listener for the form
let form = document.getElementById('form');
form.addEventListener('submit', function(e) {
   // prevent the form from submitting by default
   e.preventDefault();

   // get the values of the form inputs and trim the values (remove white spaces at the beginning and end)
   let fullName = document.getElementById('fullname').value.trim();
   let email = document.getElementById('email').value.trim();
   let subject = document.getElementById('subject').value.trim();
   let message = document.getElementById('message').value.trim();   

   // check if the values are empty or null
   if (fullName === null || fullName === '') {
      // if the value is empty or null, add an error message to the errorMessages array
      errorMessages.push('Please Enter Your Full Name');
      // alert('Please enter your name');
   };

   // check if the email is empty or null
   if (email === null || email === "" || !email.includes('@')) {
      // if the value is empty or null, add an error message to the errorMessages array
      errorMessages.push('Please Enter a Valid Email Address');
      // alert('Please enter a valid email address');
   }

   // check if the subject is empty or null
   if(subject === null || subject === '') {
      // if the value is empty or null, add an error message to the errorMessages array
      errorMessages.push('Please Enter a Subject');
      // alert('Please enter a subject');
   }

   // check if the errorMessages array has any error messages
   if (errorMessages.length > 0) {
      // if the errorMessages array has error messages, join the error messages and store them in a variable
      let check = errorMessages.join(". ");
      // console.log(check); --- log the error messages to the console
      console.log(check);
      // get the error message container and save it in a variable
      const errorMessageContainer = document.querySelector('.error-message');
      // append the error messages to the error message container to display them on the page for the user to see
      errorMessageContainer.append(check);
   } else {
      // if there are no error messages, log the values of the form inputs to the console
      console.log({fullName, email, subject, message});
      // alert the user that the message has been sent
      alert('Thank you for your message. We will get back to you soon');
      // call the formInit function to reset the form inputs
      formInit();
   }
   // return errorMessages;
});

// function to reset the form inputs
function formInit () {
   // reset the form inputs to empty strings
   document.getElementById('fullname').value = '';
   document.getElementById('email').value = '';
   document.getElementById('subject').value = '';
   document.getElementById('message').value = '';
   document.querySelector('.error-message').innerHTML = '';
}


let hamburger = document.querySelector('.hamb');
hamburger.addEventListener('click', function() {
   let showSideBar = document.querySelector('.header__right--section');
   showSideBar.classList.toggle('show');
}); 