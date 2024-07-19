document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".redirect-button");
    const button = document.querySelector(".button");
    console.log("oiiiiiii");

    buttons.forEach(item => {
        item.addEventListener("click", function () {
            const url = item.getAttribute("data-url");
            window.location.href = url;
        });
    });

    button.addEventListener("click", function() {
        console.log("oiiiwww");
        const url = item.getAttribute("data-url");
        window.location.href = url;
    })
});

