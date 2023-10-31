const art1H3 = document.querySelector(".art-1 h3");
const art2 = document.querySelector(".art-2 p");
const art3btn = document.querySelector(".art-3 button");
const art1Figure = document.querySelector(".art-1 figure");
const allBtn = document.querySelectorAll("button");



art1H3.textContent = "Potato"
// console.log(art1H3);


const headerHome = document.querySelector("header a:nth-child(1)")
headerHome.textContent = "Start"

// console.log(headerHome);

const footerHome = document.querySelector("footer article :nth-child(2)");
footerHome.textContent = "Start"
// console.log(footerHome);

const footerContact = document.querySelector("footer article :nth-child(4)");
footerContact.textContent = "Mail Us"
// console.log(footerContact);

art2.textContent = "Håller på att uppdaterar..."
// console.log(art2);


art3btn.style.color = "red"
art3btn.style.background = "blue"
// console.log(art3btn);

art1Figure.style.background = "crimson";
// console.log(art1Figure);
const paraGraph = document.querySelectorAll("p")

paraGraph.forEach(data => data.style.color = "crimson")
document.querySelector("head title").textContent = "Horse"


allBtn.forEach(btn => btn.textContent = "add to cart")

headerHome.classList.add("active")

// document.querySelector("header img").remove("logo");

const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
    console.log("Found you!");
})









