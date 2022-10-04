const formRef = document.querySelector('.login-form');

  const formData = {}

formRef.addEventListener('submit', onFormSubmit)

function onFormSubmit(event){
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

    if (!mail|| !password) {
        alert("Все поля дожны быть заполены!");
      }

    event.currentTarget.reset();
  
    console.log({"email": mail, "password": password});
}

