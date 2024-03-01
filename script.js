let btn = document.querySelector('button');
let heading = document.querySelector('h1');

btn.addEventListener('click',()=>{
    heading.innerHTML = "Your HTML has been changed by Ghost";
});

