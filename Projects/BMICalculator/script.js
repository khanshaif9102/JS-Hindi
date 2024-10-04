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
