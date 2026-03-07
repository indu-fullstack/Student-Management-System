document.getElementById("register").addEventListener("submit", function(e){
    e.preventDefault();

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let dobb = document.getElementById("dobb").value;
    let phn = document.getElementById("phn").value.trim();
    let phno = document.getElementById("phno").value.trim();
    let mail = document.getElementById("mail").value.trim().toLowerCase();
    let pass = document.getElementById("pass").value;
    let gender = document.getElementById("gender").value;
    let course = document.getElementById("course").value;
    let dept = document.getElementById("dept").value;
    let year = document.getElementById("year").value;
    let section = document.getElementById("section").value;
    let address = document.getElementById("address").value.trim();
    let addres = document.getElementById("addres").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];
    if(!mail.endsWith("@vvit.net")){
        alert("Only VVIT emails are allowed!");
        return;
    }
    let usernamePart = mail.split("@")[0];  
    if(!usernamePart.startsWith("25bq5a43")){
        alert("Invalid Roll Number Format!");
        return;
    }
    let lastTwo = usernamePart.slice(-2);
    let num = parseInt(lastTwo);

    if(!(num >= 1 && num <= 30)){
        alert("Only emails from 25bq5a4301@vvit.net to 25bq5a4330@vvit.net are allowed!");
        return;
    }
    let emailExists = users.some(u => u.mail === mail);
    if (emailExists) {
        alert("This mail is already registered");
        return;
    }

    let user = {
        fname, lname, dobb, phn, phno, mail, pass, gender,
        course, dept, year, section, address, addres
    };

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");
    console.log("All users:", users);

    document.getElementById("register").reset();
});