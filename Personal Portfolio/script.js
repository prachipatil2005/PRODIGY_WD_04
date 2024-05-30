document.addEventListener('DOMContentLoaded', function () {
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');
  let navLinks = document.querySelectorAll('header nav a');

  // Menu toggle function
  function toggleMenu() {
    navbar.classList.toggle('active');
    if (navbar.classList.contains('active')) {
      navbar.style.display = 'block';
      menuIcon.classList.remove('bx-menu');
      menuIcon.classList.add('bx-x');
    } else {
      navbar.style.display = 'none';
      menuIcon.classList.remove('bx-x');
      menuIcon.classList.add('bx-menu');
    }
  }

  // Initialize Typed.js
  var typed = new Typed(".input", {
    strings: ["Frontend Developer","Web Developer"],
    typeSpeed: 70,
    backSpeed: 55,
    loop: true
  });

  // Menu icon click event
  menuIcon.onclick = toggleMenu;

  // Navigation links click event
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(item => {
        item.classList.remove('active');
      });
      link.classList.add('active');
      if (window.innerWidth <= 600) {
        toggleMenu();
      }
    });
  });

  // Window resize event for small screens
  window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
      navbar.style.display = 'block';
    } else {
      navbar.style.display = 'none';
      menuIcon.classList.remove('bx-x');
      menuIcon.classList.add('bx-menu');
    }
  });

  // Contact form functionality
  const form = document.querySelector('.form');
  const submitBtn = document.querySelector('.submit-btn');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Validate the form
    if (validateForm()) {
      // Show popup confirmation
      showPopup('Thank you for contacting us!');

      // Clear the form
      form.reset();
    }
  });

  function validateForm() {
    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !message) {
      showPopup('Please fill in all fields.');
      return false;
    }

    return true;
  }

  function showPopup(message) {
    // Create popup element
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.textContent = message;

    // Style the popup
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.padding = '20px';
    popup.style.backgroundColor = '#5e548e';
    popup.style.color = '#ffffff';
    popup.style.borderRadius = '10px';
    popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    popup.style.zIndex = '1000';
    popup.style.textAlign = 'center';

    // Append to body
    document.body.appendChild(popup);

    // Remove popup after 3 seconds
    setTimeout(() => {
      popup.remove();
    }, 3000);
  }
});
