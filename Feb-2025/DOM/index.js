const idWrapper = document.getElementById('wrapper');

console.log(idWrapper);

const pageBanner = document.getElementById('page-banner');
console.log(pageBanner);

const classTitle = document.getElementsByClassName('title');
console.log(classTitle);

const classTitles = Array.from(classTitle);

classTitles.forEach(title => {
    console.log(title);
});