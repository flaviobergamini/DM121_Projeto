document.getElementById('contact-form').addEventListener('submit', function(event) {

    event.preventDefault();
   
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!fullname || !email || !subject || !message) {
        alert('Please complete all fields before submitting');
        return;
    }

    alert('Form sent successfully!');
    this.submit();
});