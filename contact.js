document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("contactForm").addEventListener("submit", function(e){

        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let subject = document.getElementById("subject").value;
        let message = document.getElementById("message").value;

        let contactData = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };

        let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

        contacts.push(contactData);

        localStorage.setItem("contacts", JSON.stringify(contacts));

        document.getElementById("successMsg").style.display = "block";

        document.getElementById("contactForm").reset();
    });

});