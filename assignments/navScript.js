//this js is used to meet the assignment 2 requirement.
//assignment page navigation bar 
document.addEventListener("DOMContentLoaded", function () {
    fetch("navAssignments.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        })
        .catch(error => console.error("Error loading navigation:", error));
    });