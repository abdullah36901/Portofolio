// Get references to the navigation links
const aboutLink = document.querySelector('a[href="#about"]');
const projectsLink = document.querySelector('a[href="#projects"]');
const contactLink = document.querySelector('a[href="#contact"]');

// Get references to the corresponding sections
const aboutSection = document.getElementById('about');
const projectsSection = document.getElementById('projects');
const contactSection = document.getElementById('contact');

// Add event listeners to the navigation links
aboutLink.addEventListener('click', scrollToSection);
projectsLink.addEventListener('click', scrollToSection);
contactLink.addEventListener('click', scrollToSection);

// Function to scroll to a section when a navigation link is clicked
function scrollToSection(event) {
  event.preventDefault(); // Prevent the default link behavior
  const targetId = event.target.getAttribute('href'); // Get the href value
  const targetSection = document.querySelector(targetId); // Find the corresponding section
  const targetOffset = targetSection.offsetTop; // Get the section's top offset
  window.scrollTo({
    top: targetOffset,
    behavior: 'smooth' // Scroll smoothly
  });
}

// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault(); // Prevent form submission
  const nameInput = document.querySelector('input[type="text"]');
  const emailInput = document.querySelector('input[type="email"]');
  const messageInput = document.querySelector('textarea');
  
  // Get the form values
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;
  
  // Perform form validation
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  }
  
  // Display a success message
  alert('Message sent successfully!');
  
  // Clear the form inputs
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
}

// Get a reference to the form
const contactForm = document.querySelector('form');

// Add event listener to the form submission
contactForm.addEventListener('submit', handleFormSubmission);
