let landing = document.querySelector(".landing");
let allimage = ["../images/pizza3.jpg","../images/pizza4.jpg","../images/pizza5.jpg","../images/pizza6.jpg","../images/pizza7.jpg","../images/pizza8.jpg","../images/pizza10.jpg", "../images/pizza11.jpg","../images/pizza12.jpg","../images/pizza13.jpg","../images/pizza14.jpg","../images/pizza15.jpg","../images/pizza16.jpg","../images/pizza17.jpg","../images/pizza18.jpg","../images/pizza19.jpg","../images/pizza20.jpg"];

let interval = setInterval(() => {
    let randomNum = Math.floor(Math.random() * allimage.length);
    landing.style.backgroundImage = 'url("images/' + allimage[randomNum] + '")';
}, 1500);




let men = document.querySelector(".menu");
let arrow = document.querySelector(".header ul");


document.onclick = (e) => {
    if (e.target.className == "menu" || e.target.className == "m") {
        arrow.classList.toggle("none");
        men.classList.toggle("none");
    }
    else {
        arrow.classList.remove("none");
        men.classList.remove("none");
    }

};





