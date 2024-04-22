const heart = document.querySelector(".icon-heart");
const audio = document.querySelector("audio");

heart.addEventListener("click", function () {
    if (heart.classList[0] === "ri-heart-3-line") {
        heart.classList.remove("ri-heart-3-line");
        heart.classList.add("ri-heart-3-fill");
        console.log(heart.classList);
    } else {
        heart.classList.remove("ri-heart-3-fill");
        heart.classList.add("ri-heart-3-line");
    }
    audio.play();
});





