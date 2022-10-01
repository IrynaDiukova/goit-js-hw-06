const ulRef = document.querySelector('ul#categories');
const liRef = ulRef.querySelectorAll('li.item')
console.log (`Number of categories: ${liRef.length}`);

const headerText = liRef.forEach((element) => {
        const h2Ref = element.querySelector('h2');
        const totalItemsRef = element.querySelectorAll('li');
        

        console.log (`Category: ${h2Ref.textContent}`);
        console.log (`Elements: ${totalItemsRef.length}`);
});



