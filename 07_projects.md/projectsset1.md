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

## project 2 solution

```JavaScript

const form=document.querySelector('form');
//this usecase will give you empty value 
//const height=parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#Height').value)
    const weight=parseInt(document.querySelector('#Weight').value)
    const results=document.querySelector('#results')

    if(height==='' || height<0 || isNaN(height) ){
        results.innerHTML=`Please give a valid height ${height}`;
    } else if(weight==='' || weight<0 || isNaN(weight) ){
        results.innerHTML=`Please give a valid wieght ${weight}`;
    }
    else{
      const bmi=  (weight/((height*height)/10000)).toFixed(2)
      //show the results
      results.innerHTML=`<span>${bmi}</span>`
    }
})


```

