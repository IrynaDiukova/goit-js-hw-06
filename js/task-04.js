
const divRef = document.querySelector("#counter");
const btnDecRef = document.querySelectorAll("button")[0];
const btnIncRef = document.querySelectorAll("button")[1];



let counterValue = 0;

 btnDecRef.addEventListener ('click', (event) => {
    counterValue = counterValue -1;
    const valueRef = document.querySelector("span"); 
    valueRef.textContent = counterValue;
});

btnIncRef.addEventListener ('click', (event) => {
    counterValue = counterValue +1;
    const valueRef = document.querySelector("span"); 
    valueRef.textContent = counterValue;
});