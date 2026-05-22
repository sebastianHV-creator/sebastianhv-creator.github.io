// Image switcher code

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Big-shot.png") {
    myImage.setAttribute("src", "images/Greg-around.jpg");
  } else {
    myImage.setAttribute("src", "images/Big-shot.png");
  }
});

// Personalized welcome message cod

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
  const myName = prompt("Please enter your name bestie.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome, ${myName}!`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome, ${storedName}!`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
