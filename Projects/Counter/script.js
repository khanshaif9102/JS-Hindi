const increase=document.getElementById('increase');
const reset=document.getElementById('reset');
const decrease=document.getElementById('descrease');

let count=0;

increase.addEventListener('click',function(e){
    count++;
    increaseCount(count)
});

decrease.addEventListener('click',function(e){
count--;
increaseCount(count)
})

reset.addEventListener('click',function(e){
    count=0;
    increaseCount(count)
})

const counth1=document.getElementById('count');

function increaseCount(count){
    counth1.innerHTML=`${count}`;
}