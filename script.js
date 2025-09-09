function changeHeading() {
      document.getElementById("main-heading").textContent = "Heading Changed!";
    }

let as = false;
function toggleBackground() {
    if (as) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "red";
    } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    }
    as = !as;
    }
function validateForm() {
      const email = document.getElementById("email").value;
      if (email.trim() === "") {
        alert("Email is required!");
        return false; // Prevent form submission
      }
      // Optionally: validate email format here
      return true; // Allow form submission
    }
