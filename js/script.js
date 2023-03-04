const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("blog_test_theme", "dark");
    }
    else {
        localStorage.setItem("blog_test_theme", "light");
    }
})

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})

let theme = localStorage.getItem("blog_test_theme");
if (theme == "dark") {
    document.body.classList.toggle("dark");
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.toLocaleLowerCase().substring(1);
}

function blogFormValidator(event){
    event.preventDefault();

    let title = document.getElementById("title").value;
    let reason = document.getElementById("reason").value;
    let link = document.getElementById("link").value;

    let page = document.getElementById("blog-page");
    let htmlString = "<div class=\"content border\">" +
                        "<p><strong>Title:</strong><br>"+capitalize(title)+
                        "<br><strong>Reason:</strong><br>"+capitalize(reason);

    if (link) {
        htmlString += "<br><strong>Reference:</strong>"+link;
    }
    htmlString += "<br><strong>Name: </strong>Rishab</p></div><br></br>";
    page.innerHTML += htmlString;
}

function testFormValidator(event){
    event.preventDefault();

    let test_id_num = document.getElementById("test_id").value;
    let test_type = document.getElementById("test_type").value;
    let outcome = document.getElementById("outcome").value;
    let title = document.getElementById("test-title").value;
    let section = document.getElementById("section").value;
    let confirmation = document.getElementById("confirmation").value;
    let change = document.getElementById("change").value;

    let test_id = parseInt(test_id_num);

    let page = document.getElementById("test-page");
    let htmlString = "<div class=\"content border\">" +
                        "<p><strong>ID: </strong>"+test_id+
                        "<br><strong>Test Type: </strong>"+test_type+
                        "<br><strong>Outcome: </strong>"+outcome+
                        "<br><strong>Title: </strong>"+title+
                        "<br><strong>Section: </strong>"+section+
                        "<br><strong>Confirmation: </strong><br>"+confirmation;

    if (change) {
        htmlString += "<br><strong>Change: </strong><br>"+change;
    }
    htmlString += "<br><strong>Name: </strong>Rishab</p></div><br></br>";
    page.innerHTML += htmlString;

    test_id += 1;
    localStorage.setItem("test_id", test_id);
}

let test_id = localStorage.getItem("test_id");
document.getElementById("test_id").value = test_id;

let testForm = document.getElementById("test-form");
if (testForm) {
    testForm.addEventListener('submit', testFormValidator);
}

let blogForm = document.getElementById("blog-form");
if (blogForm) {
    blogForm.addEventListener('submit', blogFormValidator);
}