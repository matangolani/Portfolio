function changeColor(event){
    event.target.style.color = 'blue';
} 

let returnColor = (event) => event.target.style.color = '';

//document.getElementById('h1').addEventListener('mouseover',changeColor)
document.querySelector('h1').onmouseover = changeColor;
document.querySelector('h1').onmouseout = returnColor;

// let revealCaption = (event) => document.getElementById('caption1').hidden = false;
// let hideCaption = (event) => document.getElementById('caption1').hidden = true;


// document.getElementById('project1').onmouseover = revealCaption;
// document.getElementById('project1').onmouseout = hideCaption;

// let revealCaption = (event) => document.getElementById('caption2').hidden = false;
// let hideCaption = (event) => document.getElementById('caption2').hidden = true;


// document.getElementById('project2').onmouseover = revealCaption;
// document.getElementById('project2').onmouseout = hideCaption;

// let revealCaption = (event) => document.getElementById('caption3').hidden = false;
// let hideCaption = (event) => document.getElementById('caption3').hidden = true;


// document.getElementById('project3').onmouseover = revealCaption;
// document.getElementById('project3').onmouseout = hideCaption;

function toggleCaption(event) {
    const project = event.currentTarget;
    const caption = project.querySelector('.projectCaption');
    caption.hidden = !caption.hidden;
  }
  
  const projects = document.querySelectorAll('.project');
  projects.forEach(project => {
    project.addEventListener('mouseover', toggleCaption);
    project.addEventListener('mouseout', toggleCaption);
  });
  