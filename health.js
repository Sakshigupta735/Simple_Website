// script.js
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.addEventListener('mouseenter', function() {
        this.style.opacity = '0.4'; // Change opacity on hover
      });
      section.addEventListener('mouseleave', function() {
        this.style.opacity = '1'; // Restore opacity on mouse leave
      });
    });
  
    // Add form submission handling
    const footerForm = document.getElementById('footer-form');
    footerForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent default form submission
      // You can add your form submission logic here (e.g., sending data to a server)
      alert('Form submitted!'); // Placeholder for demonstration
      this.reset(); // Reset form after submission
    });
  });
  