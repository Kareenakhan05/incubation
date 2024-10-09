document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const contactData = { name, email, message };

  // Store in localStorage
  localStorage.setItem('contactFormData', JSON.stringify(contactData));

  // Show a success message
  document.getElementById('responseMessage').innerText = "Thank you for contacting us! we will contact you soon.";

  // Clear form
  document.getElementById('contactForm').reset();
});
