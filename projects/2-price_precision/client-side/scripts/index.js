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

document.addEventListener('click', (event) => {
  if (!signupFormContainer.contains(event.target) && !event.target.matches('#signup-button')) {
    signupFormContainer.classList.remove('is-visible');
  }
  
  if (!signinFormContainer.contains(event.target) && !event.target.matches('#signin-button')) {
    signinFormContainer.classList.remove('is-visible');
  }
});