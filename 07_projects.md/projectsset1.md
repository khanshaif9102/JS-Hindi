# Project related DOM
## Project Link
[Click here]()

# Solution code
## Project 1

```JavaScript
console.log("SHAIF")

const buttons=document.querySelectorAll('.button')
// console.log(buttons);
const body=document.querySelector("body");
// console.log(body);

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id=='grey'){
            body.style.backgroundColor=e.target.id;
        } else if(e.target.id=='white'){
            body.style.backgroundColor=e.target.id;
        } else if(e.target.id=='blue'){
            body.style.backgroundColor=e.target.id;
        } else if(e.target.id=='yellow'){
            body.style.backgroundColor=e.target.id;
        }
    })
})
```

