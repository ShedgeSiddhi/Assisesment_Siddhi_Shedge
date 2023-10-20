function submitForm() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const dob = document.getElementById("date-of-birth").value;
    const country = document.getElementById("country").value;
    const genderElements = document.getElementsByName("gender");
    const selectedGender = Array.from(genderElements)
        .filter(element => element.checked)
        .map(element => element.value)
        .join(", ");
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobileNumber = document.getElementById("mobile-number").value;

    // Check if all fields are filled
    if (firstName && lastName && dob && country && selectedGender && profession && email && mobileNumber) {
        const popupData = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${selectedGender}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
        `;
        document.getElementById("popup-data").innerHTML = popupData;
        openPopup();
        document.getElementById("survey-form").reset();
    } else {
        // Display a message if any field is empty
        alert("Please fill in all the data before submitting.");
    }
}

function resetForm() {
    document.getElementById("survey-form").reset();
}

function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
