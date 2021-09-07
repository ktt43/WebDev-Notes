const content = document.querySelector(".content");

const pRed = document.createElement("p");
pRed.textContent="Hi I'm Red";
pRed.style.color="red";
content.appendChild(pRed);

const h3Blue = document.createElement("h3");
h3Blue.textContent = "I'm a blue h3";
h3Blue.style.color="blue";
content.appendChild(h3Blue);

const divContainer = document.createElement("div");
divContainer.style.border="solid black";
divContainer.style.background="pink";
divContainer.setAttribute("id","divContainer");


const h1Div = document.createElement("h1");
h1Div.textContent="I'm in a div";
divContainer.appendChild(h1Div);

const pMeToo = document.createElement("p");
pMeToo.textContent="ME TOO";
divContainer.appendChild(pMeToo);

content.appendChild(divContainer);

btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});