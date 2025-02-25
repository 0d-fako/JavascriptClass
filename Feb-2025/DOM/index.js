document.addEventListener('DOMContentLoaded', () => {
    const idWrapper = document.getElementById('wrapper');
    console.log(idWrapper);

    const pageBanner = document.getElementById('page-banner');
    console.log(pageBanner);

    const classTitle = document.getElementsByClassName('title');
    console.log(classTitle);

    const classTitles = Array.from(classTitle);
    classTitles.forEach(title => {
        title.textContent += ' (delete)';
        let parent = title.parentElement;
    });

    const books = document.querySelector('#book-list ul');

    books.addEventListener("click", (event) => {
        if (event.target.className === "delete") { 
            const liTag = event.target.parentElement;
            books.removeChild(liTag);
        }
    });

    const form = document.getElementById("add-book");
    const input = form.querySelector("input[type='text']");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        if (input.value.trim() === "") {
            alert("Please enter a book name");
        } else {
            const li = document.createElement("li");
            const spanName = document.createElement("span");
            const spanDelete = document.createElement("span");

            spanName.className = "name";
            spanDelete.className = "delete";

            spanName.textContent = input.value.trim();
            spanDelete.textContent = "delete";

            li.appendChild(spanName);
            li.appendChild(spanDelete);
            books.appendChild(li);

            input.value = "";
        }
    });
});
