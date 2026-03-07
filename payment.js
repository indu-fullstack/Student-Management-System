function showPayment(){

let roll = document.querySelector("input").value;

if(roll===""){
alert("Enter Student ID");
return;
}

let hostelFees = [100000,80000,80000];
let busFees = [18000,22000,20000,17000,19000];

let hostelPending = Math.random() > 0.5 ? hostelFees[Math.floor(Math.random()*hostelFees.length)] : 0;
let busPending = Math.random() > 0.5 ? busFees[Math.floor(Math.random()*busFees.length)] : 0;
let booksPending = Math.random() > 0.5 ? 5000 : 0;
let labPending = Math.random() > 0.5 ? 5000 : 0;
let universityPending = Math.random() > 0.5 ? 3000 : 0;

let totalPending = hostelPending + busPending + booksPending + labPending + universityPending;

let container = document.querySelector(".container");

let old = document.getElementById("pending");
if(old) old.remove();

let div = document.createElement("div");
div.id="pending";
div.style.marginTop="20px";
div.style.padding="15px";
div.style.background="#f8f3ff";
div.style.borderLeft="5px solid #7b2cbf";
div.style.borderRadius="10px";

div.innerHTML = `
<h3 style="color:#5a189a">Pending Fees for Roll No: ${roll}</h3>
<p>Hostel Fee Pending: ₹ ${hostelPending}</p>
<p>Bus Fee Pending: ₹ ${busPending}</p>
<p>Books Fee Pending: ₹ ${booksPending}</p>
<p>Lab Materials Pending: ₹ ${labPending}</p>
<p>University Fee Pending: ₹ ${universityPending}</p>
<hr>
<h3>Total Pending Amount: ₹ ${totalPending}</h3>
`;

container.appendChild(div);

}