//assignment 2 page
// I used script in assignments folder to meet course requiremnet.

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

    if (!firstName || !lastName) {
        alert('Please enter both first and last names.');
        return false;
    }

    if (!address || !city || !state || !zip) {
        alert('Please enter a complete address.');
        return false;
    }

    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phonePattern.test(phone)) {
        alert('Phone number must be in the format: 123-456-7890');
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (isNaN(birthdate.getTime()) || birthdate > new Date()) {
        alert('Please enter a valid birth date.');
        return false;
    }

    if (confirmation.toLowerCase() !== 'cop4813') { 
        alert('Incorrect answer to the confirmation question.');
        return false;
    }

    return confirm('Please confirm that all the information is correct.');
}

function clearForm() {
            document.getElementById("userForm").reset();
            clearErrors();
        }

// assignment 4 functionality 
let chart; 
        function calculate() {
            // Get input values
            const P = parseFloat(document.getElementById("principal").value);
            const r = parseFloat(document.getElementById("rate").value) / 100;
            const n = parseInt(document.getElementById("compounds").value);
            const t = parseFloat(document.getElementById("years").value);
    
            // Create arrays to store data points
            const time = [];
            const amounts = [];
    
            // Calculate amount for each year
            for (let year = 0; year <= t; year++) {
                const A = P * Math.pow((1 + r / n), n * year);
                time.push(year);
                amounts.push(A.toFixed(2));
            }
    
            if (chart) {
                chart.destroy();
            }
    
            // Plotting the data
            const ctx = document.getElementById('interestChart').getContext('2d');
            chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: time,
                    datasets: [{
                        label: 'Amount ($)',
                        data: amounts,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 2,
                        fill: false
                    }]
                },
                options: {
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Time (years)'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Amount ($)'
                            },
                            beginAtZero: true
                        }
                    }
                }
            });
    
            // Display accumulated amount for each year
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '<h3>Yearly Accumulated Amounts:</h3>';
            for (let i = 0; i < time.length; i++) {
                resultsDiv.innerHTML += `<p>Year ${time[i]}: $${amounts[i]}</p>`;
            }
        }
    
        function clearForm() {
            document.getElementById("principal").value = '';
            document.getElementById("rate").value = '';
            document.getElementById("compounds").value = '';
            document.getElementById("years").value = '';
    
            if (chart) {
                chart.destroy();
            }
    
            // Clear the results
            document.getElementById('results').innerHTML = '';
        }