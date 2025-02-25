const idWrapper = document.getElementById('wrapper');

console.log(idWrapper);

const pageBanner = document.getElementById('page-banner');
console.log(pageBanner);

const classTitle = document.getElementsByClassName('title');
console.log(classTitle);

const classTitles = Array.from(classTitle);

classTitles.forEach(title => {
    title.textContent += ' (delete)'
    let parent = title.parentElement;
});

const books = document.querySelector('#book-list ul');

books.addEventListener("click", (event)=>{
    console.log(event);
    });

const listItems = document.getElementsByTagName('li');


