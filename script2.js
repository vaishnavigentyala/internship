document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('error-message');

    
    errorMessage.textContent = '';

    
    if (!name.trim()) {
        errorMessage.textContent += 'Name is required.\n';
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent += 'Please enter a valid email address.\n';
    }

    
    if (errorMessage.textContent === '') {
        console.log('Form submitted successfully:', { name, email });
        
    }
});
