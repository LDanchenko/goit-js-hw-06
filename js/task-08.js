const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { password, email } = event.currentTarget.elements;
  if (password.value && email.value) {
    const userData = {
      password: password.value,
      email: email.value,
    };
    console.log(userData);
  } else {
    alert('Please note that all fields are required.');
  }
  event.currentTarget.reset();
}
