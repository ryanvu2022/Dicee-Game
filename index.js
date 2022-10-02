$("button").click(() => {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;

  let randomImageSource1 = "images/dice" + randomNumber1 + ".png"; // dice1.png to dice6.png

  document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);


  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  let randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // dice1.png to dice6.png

  // Change image
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "👌Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "👌Player 2 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "🙌Draw!";
  }
})


