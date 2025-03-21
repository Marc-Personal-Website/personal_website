
const goodbye = document.getElementById('goodbye');
const message = document.getElementById('success-msg');
goodbye.style.display = 'none';


// Showing a goodbye message
setTimeout(() => {
  message.style.display = 'none';
  goodbye.style.display = 'block';

}, 3800);

// browser returns to homepage
setTimeout(() => {
  window.location.href = window.location.origin
}, 5000)