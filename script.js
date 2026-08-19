// Form submission handler
document.getElementById('applicationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Log the form data (replace with your own submission logic)
    console.log('Form Submitted:', data);
    
    // Show success message
    alert('Application submitted successfully! Thank you for applying.');
    
    // Optionally reset the form after submission
    // this.reset();
});

// Clear form button handler (if you want custom behavior)
document.querySelector('.btn-reset').addEventListener('click', function() {
    if (confirm('Are you sure you want to clear the entire form?')) {
        document.getElementById('applicationForm').reset();
    }
});