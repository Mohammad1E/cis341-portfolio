function validateForm() {
  var fullName = document.getElementById('fullName').value.trim();
  var emailAddress = document.getElementById('emailAddress').value.trim();
  var country = document.getElementById('country').value.trim();
  var comments = document.getElementById('comments').value.trim();

  if (fullName === '' || emailAddress === '' || country === '' || comments === '') {
    alert('Please complete all fields before submitting the form.');
    return false;
  }

  alert('Form submitted successfully!');
  return false;
}
