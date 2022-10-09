const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', (event) =>{
    event.preventDefault();
    const {elements: { email, password }} = event.currentTarget;
   
    if (email.value === "" || password.value === "") {
        alert("Все поля дожны быть заполены!");
      } else {
        console.log({"email": email.value, "password": password.value});

      formRef.reset();
      }   
});
