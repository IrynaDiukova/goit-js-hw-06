const inputRef = document.querySelector('input');

inputRef.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length === 
        Number(inputRef.getAttribute("data-length"))
        ){
        inputRef.classList.add('valid'); 
        inputRef.classList.remove('invalid');
        return;
    } else {
        inputRef.classList.add('invalid');
        
    }
})