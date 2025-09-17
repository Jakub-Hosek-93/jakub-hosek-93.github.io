const nameTitle = document.getElementById("nameTitle");
const subtitle = document.getElementById("subtitle");

nameTitle.addEventListener("animationend", (e) => {
    if (e.animationName === "typingName") {
        nameTitle.querySelector(".cursor").style.display = "none";
    }
});

subtitle.addEventListener("animationend", (e) => {
    if (e.animationName === "typingSubtitle") {
        subtitle.querySelector(".cursor").style.display = "none";
    }
});
