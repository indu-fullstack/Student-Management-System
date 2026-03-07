
function logout(username) {

   let users = JSON.parse(localStorage.getItem("users")) || [];

   users = users.map(user => {
      if(user.username === username){
         user.isLoggedIn = false;
      }
      return user;
   });

   localStorage.setItem("users", JSON.stringify(users));

   alert( " logged out successfully!");

   // Login page ki redirect
   window.location.href = "login.html";
}