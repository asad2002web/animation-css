let parentChild = document.querySelector('.animation');
let createElementCount = 60;

let boxWidth = 300;
let boxHeight = 300;
function count(e){
    for(let i = 0; i < e ; i++ ){
        let child = document.createElement('span');
        parentChild.appendChild(child);
        child.style.top = Math.random()*boxHeight+'px';
        child.style.right = Math.random()*boxWidth+'px';
        child.style.animationDelay= Math.random()*2+'s';
    }   

}
count(createElementCount);