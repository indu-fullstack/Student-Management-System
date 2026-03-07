   document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    let enteredUsername = document
      .getElementById("mail")
      .value
      .trim()
      .toLowerCase();

    let enteredPassword = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    console.log("Entered:", enteredUsername, enteredPassword);
    console.log("Stored users:", users);

    let found = users.find(
      user =>
        user.mail.toLowerCase() === enteredUsername &&
        user.pass === enteredPassword
    );

    if (found) {
      localStorage.setItem("isLoggedIn", "true");
      alert("✅ Logged in successfully");
      window.location.href = "home.html";
    } else {
      alert("❌ Invalid email or password");
    }
  });

});
              




