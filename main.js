function changeColor(event){
    event.target.style.color = 'blue';
} 

let returnColor = (event) => event.target.style.color = '';

//document.getElementById('h1').addEventListener('mouseover',changeColor)
document.querySelector('h1').onmouseover = changeColor;
document.querySelector('h1').onmouseout = returnColor;