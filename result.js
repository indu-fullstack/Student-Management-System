function showResult(){

let roll = document.querySelector("input").value;

if(roll === ""){
alert("Enter Roll Number");
return;
}

let subjects = [
["Java Programming","Theory"],
["Database Systems","Theory"],
["Data Structures","Theory"],
["Operating Systems","Theory"],
["Computer Networks","Theory"],
["Java Lab","Lab"],
["DBMS Lab","Lab"],
["Web Development Lab","Lab"]
];

let table = document.querySelector("table");
let summary = document.querySelector(".summary");

table.innerHTML = `
<tr>
<th>Subject</th>
<th>Type</th>
<th>Marks</th>
<th>Grade</th>
</tr>
`;

let total = 0;

subjects.forEach(sub => {

let marks = Math.floor(Math.random()*41)+60; //60-100
total += marks;

let grade = "";

if(marks>=90) grade="A+";
else if(marks>=80) grade="A";
else if(marks>=70) grade="B+";
else if(marks>=60) grade="B";
else grade="C";

table.innerHTML += `
<tr>
<td>${sub[0]}</td>
<td>${sub[1]}</td>
<td>${marks}</td>
<td>${grade}</td>
</tr>
`;

});

let percent = (total/800*100).toFixed(2);
let cgpa = (percent/10).toFixed(1);

summary.innerHTML = `
Total Marks: ${total} / 800 <br>
Percentage: ${percent}% <br>
CGPA: ${cgpa}
`;

}