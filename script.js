document.getElementById("akanform").addEventListener("submit", function (e) {
    e.preventDefault();

    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;

    if (!dob || !gender) {
        alert("Please enter all fields.");
        return;
    }

    const birthDate = new Date(dob);
    const dayOfWeek = birthDate.getDay();

    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    let akanName = "";

    if (gender === "male") {
        akanName = maleNames[dayOfWeek];
    } else if (gender === "female") {
        akanName = femaleNames[dayOfWeek];
    }

    document.getElementById("results").innerText = `Your Akan name is: ${akanName}`;
})
    ;
