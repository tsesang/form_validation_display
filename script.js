//form.html

let emp;

function submission(event) {
  event.preventDefault();

  clearError();
  const fullName = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const department = document.getElementById("department").value;
  const satisfactory = document.getElementsByName("satisfactory");
  let radioValue = "";
  for (let radio of satisfactory) {
    if (radio.checked) {
      radioValue = radio.value;
    }
  }

  const feedback = document.getElementById("feedback").value;
  const agree = document.getElementById("agree");

  if (fullName == "") {
    errorDisplay("fullname", "full name is required");
  }

  if (email == "") {
    errorDisplay("email", "email is required");
  } else if (!isValidEmail(email)) {
    errorDisplay("email", "invalid email format");
  }

  if (department === "") {
    errorDisplay("department", "department is required");
  }

  if (radioValue == "") {
    errorDisplay("satisfactory-error", "satisfactory factor required");
  }

  if (feedback == "") {
    errorDisplay("feedback", "feedback is required");
  }

  if (!agree.checked) {
    errorDisplay("agree-label", "privary policy needs to be checked");
  }
  var myObject = {
    fullName:fullName,
    email:email,
    department:department,
    satisfactory:radioValue,
    feedback:feedback
  };
  

  // Store the object as a string in localStorage
  localStorage.setItem("myObject", JSON.stringify(myObject));
  

  if (!document.querySelectorAll(".error").length) {
    document.getElementById("myform").submit();
    alert("form submitted")
  }
}

function errorDisplay(fieldId, errorMessage) {
  const field = document.getElementById(fieldId);
  let errorDiv = document.createElement("div");
  errorDiv.className = "error";
  errorDiv.textContent = errorMessage;
  field.insertAdjacentElement("afterend", errorDiv);
}

function isValidEmail(email) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}

function clearError() {
  const error = document.querySelectorAll(".error");
  error.forEach((element) => {
    element.remove();
  });
}

//sucess.html
