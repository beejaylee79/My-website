// Mobile menu toggle
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");

  // Simple validation
  if (name === "" || email === "" || message === "") {
    status.textContent = "Please fill in all fields.";
    status.style.color = "red";
    return;
  }

  // Fake success (since no backend yet)
  status.textContent = "✅ Thank you! Your message has been sent.";
  status.style.color = "lightgreen";

  // Clear form
  document.getElementById("contactForm").reset();
});
// ===== Mobile menu toggle =====
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// ===== Contact form submission =====
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");

  if (name === "" || email === "" || message === "") {
    status.textContent = "Please fill in all fields.";
    status.style.color = "red";
    return;
  }

  status.textContent = "✅ Thank you! Your message has been sent.";
  status.style.color = "lightgreen";
  document.getElementById("contactForm").reset();
});

// ===== Smooth Scroll & Active Link Highlight =====
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });

    // Close mobile menu after click
    document.getElementById("navLinks").classList.remove("show");
  });
});

// Highlight nav link based on scroll position
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY || window.pageYOffset;

  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section.offsetTop <= scrollPos + 60 && (section.offsetTop + section.offsetHeight) > scrollPos + 60) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
