document.getElementById("facultyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let department = document.getElementById("department").value;
  let email = document.getElementById("email").value;

  let listItem = document.createElement("li");
  listItem.textContent = `Name: ${name}, Department: ${department}, Email: ${email}`;

  document.getElementById("facultyList").appendChild(listItem);

  // Clear form
  document.getElementById("facultyForm").reset();
});
