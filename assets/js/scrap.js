function update() {
    // Get form elements
    const form = document.getElementById('myform');
    var nameInput = document.getElementById('username');
    var name = document.getElementById('username');
    var emailInput = document.getElementById('mailid');
    var email = document.getElementById('mailid');
    var dobInput = document.getElementById('dateOfBirth');
    var phoneInput = document.getElementById('pnum');
    var genderInputs = document.getElementsByName('gridRadios');
    var placeInput = document.getElementById('inlineFormSelectPref');
    var checkboxInput = document.getElementById('defaultCheck1');
  
    // Clear existing error messages
    clearErrors();
  
    // Initialize an array to hold validation errors
    const errors = [];
  
    // Validate name field
    if (nameInput.value.trim() === '') {
      errors.push({ input: nameInput, message: 'The field "Name" is required.' });
      name.classList.add("is-invalid");
     
    }else if(!namevalidation(nameInput.value)) {
      errors.push({ input: nameInput, message: 'The field "Name" is start capital.' });
      name.classList.add("is-invalid");
     
    }else{
        name.classList.remove('is-invalid')
        name.classList.add('is-valid')
    }

   
  
    // Validate email field
    if (emailInput === '') {
      var email = document.getElementById('mailid');
      errors.push({ input: emailInput, message: 'The field " is required.' });
      errors.push({ input: emailInput, message: 'The field " is required.' });
      email.classList.add("is-invalid");
    } else if (!validateEmail(emailInput)) {
      errors.push({ input: emailInput, message: 'Please enter a valid email address for "Email".' });
      email.classList.add("is-invalid");
    }else{
      email.classList.remove('is-invalid')
      email.classList.add('is-valid')
  }
  
    // Validate date of birth field
    if (dobInput.value.trim() === '') {
      errors.push({ input: dobInput, message: 'The field "Date of Birth" is required.' });
    }
  
    // Validate phone number field
    if (phoneInput.value.trim() === '') {
      errors.push({ input: phoneInput, message: 'The field "Phone Number" is required.' });
    }
  
    // Validate gender field
    let isGenderSelected = false;
    for (let i = 0; i < genderInputs.length; i++) {
      if (genderInputs[i].checked) {
        isGenderSelected = true;
        break;
      }
    }
    if (!isGenderSelected) {
      errors.push({ input: genderInputs[0], message: 'Please select a gender.' });
    }
  
    // Validate place field
    if (placeInput.value === 'Choose your place') {
      errors.push({ input: placeInput, message: 'Please select a place.' });
    }
  
    // Validate checkbox
    if (!checkboxInput.checked) {
      errors.push({ input: checkboxInput, message: 'Please agree to the Privacy Policy.' });
    }
  
    // If there are validation errors, display them and prevent form submission
    if (errors.length > 0) {
      displayErrors(errors);
      return false;
    }
  
    // If the form is valid, show success modal and allow form submission
    showSuccessModal();
    return true;
  }
  
  function validateEmail(email) {
    // Regular expression for email validation
     emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  }

  function namevalidation(name){
    var nameregex = /^[A-Z][a-zA-Z]{2,}$/;
    return nameregex.test(name);
  }

  
  function clearErrors() {
    const errorSpans = document.getElementsByClassName('text-danger');
    for (let i = 0; i < errorSpans.length; i++) {
      errorSpans[i].textContent = '';
    }
  }
  
  function displayErrors(errors) {
    let index = 0;
    const displayNextError = () => {
      if (index < errors.length) {
        const { input, message } = errors[index];
        const errorSpan = input.nextElementSibling;
        errorSpan.textContent = message;
        index++;
    
      }
    };
    displayNextError();
  }
  
  function showSuccessModal() {
    const successModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    successModal.show();

    
    var name = document.getElementById('username');
    document.getElementById('username').value=''
    name.classList.remove('is-invalid')
    name.classList.remove('is-valid')


    var email = document.getElementById('mailid');
    document.getElementById('mailid').value=''
    email.classList.remove('is-invalid')
    email.classList.remove('is-valid')
  }
  