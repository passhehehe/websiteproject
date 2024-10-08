document.getElementById('submitBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (name && email) {
        alert(`Thank you, ${name}! We will contact you at ${email}.`);
    } else {
        alert('Please enter both your name and email.');
    }
});
