const form = document.querySelector("form");
const submitForm = document.querySelector("#submit-form");
const fullNameInput = document.getElementById("full_name");
const googleNameInput = document.getElementById("google_name");
const genderInput = document.getElementById("gender");
const maritalStatusInput = document.getElementById("marital_status");
const subscriptionInput = document.getElementById("subscription");
const courseInput = document.getElementById("course");
const scheduleInput = document.getElementById("schedule");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

// form.addEventListener("submit", (event) => {
// 	event.preventDefault();
// 	const formData = new FormData(form);
// 	const data = Object.fromEntries(formData.entries());
// 	console.log(data);
// });

/*
submitForm.addEventListener('click', (event) => {
  alert(
    "Your subscription will be completed when your payment is confirmed, expect an email with more information"
    )});
    */

// Implementation

const url = "http://localhost:3030/api/v0/users";

form.addEventListener("submit", (e) => {
	e.preventDefault();
	fetch(url, {
		method: "POST",
		headers: { "content-type": "application/json" },
		body: JSON.stringify({
      full_name: fullNameInput.value,
      google_name: googleNameInput.value,
      gender: genderInput.value,
      marital_status: maritalStatusInput.value,
      subscription: subscriptionInput.value,
      course: courseInput.value,
      schedule: scheduleInput.value,
      email: emailInput.value,
      phone: phoneInput.value
    }),
	})
		.then((response) => response.json())
		.then((data) => {
      if (data.message === "User with this email already exists") {
        alert("User with this email already exists");
      } else if (data.message === "User created successfully") {
        alert("User created successfully");
        window.location.href = "https://www.youtube.com/@tpauldike";
      } else {
        alert("An error occurred, please try again later");
      }
		})
		.catch((error) => {
			console.log(error);
		});
});
