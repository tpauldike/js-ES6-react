const signupButton = document.getElementById('signup-button');
const signinButton = document.getElementById('signin-button');
const signupFormContainer = document.getElementById('signup-form-container');
const signinFormContainer = document.getElementById('signin-form-container');

signupButton.addEventListener('click', () => {
  signupFormContainer.classList.add('is-visible');
});

signinButton.addEventListener('click', () => {
  signinFormContainer.classList.add('is-visible');
});

// document.addEventListener('click', (event) => {
//   if (!signupFormContainer.contains(event.target) && !event.target.matches('#signup-button')) {
//     signupFormContainer.classList.remove('is-visible');
//   }
  
//   if (!signinFormContainer.contains(event.target) && !event.target.matches('#signin-button')) {
//     signinFormContainer.classList.remove('is-visible');
//   }
// });

const signUpForm = document.getElementById("signup-form");
const signInForm = document.getElementById("signin-form");
const baseUrl = "http://localhost:4001";

signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  // console.log("Hello World!");

  const registerButton = document.getElementById("register");
  registerButton.innerHTML = "Loading...";

  // Get the form data
  // const firstNameInput = document.getElementById("firstname")
  // const lastNameInput = document.getElementById("lastname")
  // const genderInput = document.getElementById("gender")
  // const phoneNumberInput = document.getElementById("phone")
  // const emailInput = document.getElementById("email")
  // const passwordInput = document.getElementById("password")
  // const businessNameInput = document.getElementById("businessName")
  // const descriptionInput = document.getElementById("description")
  // const businessAddressInput = document.getElementById("businessAddress")

  // const formData = {
  //   first_name: firstNameInput.value,
  //   last_name: lastNameInput.value,
  //   gender: genderInput.value,
  //   phone: phoneNumberInput.value,
  //   email: emailInput.value,
  //   password: passwordInput.value,
  //   business_name: businessNameInput.value,
  //   description: descriptionInput.value,
  //   business_address: businessAddressInput.value
  // }

  const formData = new FormData(e.target)
  // console.log(Object.fromEntries(formData.entries()))
  const formDataObject =Object.fromEntries(formData.entries())


  // console.log(formData);
  try {
    // Make the fetch request to the Backend API to register user
    const response = await fetch(`${baseUrl}/user/create`, {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(formDataObject)
    })

    const data = await response.json();
    console.log(data);
    if (data.message === "User created successfully") {
      setTimeout(() => {
        window.location = "./products.html";
      }, 2000)
    } else {
      alert(data.message)
      registerButton.innerHTML = "Submit"
    }
    
  } catch (error) {
    console.log("Error ==>", error);
  }

})

signInForm.addEventListener("submit", async(e) => {
  e.preventDefault();
  const loginButton = document.getElementById("login");
  loginButton.innerHTML = "Loading..."

  // Get the form data
  const loginEmailInput = document.getElementById("login_email");
  const loginPasswordInput = document.getElementById("login_password");

  const formData = {
    email: loginEmailInput.value,
    password: loginPasswordInput.value
  }

  try {
		// Make the fetch request to the Backend API to register user
		const response = await fetch(`${baseUrl}/user/login`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData),
		});

		const data = await response.json();
		console.log(data);
		if (data.message === "Login Successful") {
      localStorage.setItem("userToken", data.token)
      localStorage.setItem("initials", data.user.first_name[0] + data.user.last_name[0])
			setTimeout(() => {
				window.location = "./products.html";
			}, 2000);
		} else {
			alert(data.message);
			loginButton.innerHTML = "Submit";
		}
  } catch (error) {
    console.log("Error ==>", error);
  }
})