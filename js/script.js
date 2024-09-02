//assignment 2 page
//using the queryselector method to search class matching in the DOM
window.addEventListener('load',function(){
    document.querySelector('.assignmentpic1').classList.add('visible')
});

// assignment 3 functionality
function validateForm() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const zip = document.getElementById('zip').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const birthdate = new Date(document.getElementById('birthdate').value);
    const message = document.getElementById('message').value.trim();
    const confirmation = document.getElementById('confirmation').value.trim();

    // Check if names are provided
    if (!firstName || !lastName) {
        alert('Please enter both first and last names.');
        return false;
    }

    // Check if address, city, state, and zip code are provided
    if (!address || !city || !state || !zip) {
        alert('Please enter a complete address.');
        return false;
    }

    // Check phone number format
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phonePattern.test(phone)) {
        alert('Phone number must be in the format: 123-456-7890');
        return false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Validate birth date
    if (isNaN(birthdate.getTime()) || birthdate > new Date()) {
        alert('Please enter a valid birth date.');
        return false;
    }

    // Validate confirmation question
    if (confirmation.toLowerCase() !== 'biden') { // Replace 'biden' with the correct answer
        alert('Incorrect answer to the confirmation question.');
        return false;
    }

    // If all checks pass, show confirmation
    return confirm('Please confirm that all the information is correct.');
}



