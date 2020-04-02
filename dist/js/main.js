/* SHOP-ITEM CONTENT */
var bruut = {
  title: "BRUUT!",
  released: "Released January 10, 2012",
  maarten: "Maarten Hogenhuis - alto & tenor saxophone",
  folkert: "Folkert Oosterbeek - hammond organ, farfisa compact, vox continental, korg polysix, mellotron, piano and harmonium",
  thomas: "Thomas Rolff - double bass",
  felix: "Felix Schlarmann - drums",
  produced: "Produced by BRUUT!",
  available: "Available on: CD | DIGITAL",
  image: "./img/album-bruut.jpg",
  buyURL: "https://bruut.bandcamp.com/album/bruut-2"
};
var fire = {
  title: "Fire",
  released: "Released November 8, 2013",
  maarten: "Maarten Hogenhuis - alto & tenor saxophone",
  folkert: "Folkert Oosterbeek - hammond organ",
  thomas: "Thomas Rolff - double bass",
  felix: "Felix Schlarmann - drums",
  produced: "Produced by BRUUT!",
  available: "Available on: VINYL | CD | DIGITAL",
  image: "./img/album-fire.jpg",
  buyURL: "https://bruut.bandcamp.com/album/fire"
};
var madpack = {
  title: "Mad Pack",
  released: "Released March 6, 2015",
  maarten: "Maarten Hogenhuis - Alto Saxophone, Tenor Saxophone & Tambourine",
  folkert: "Folkert Oosterbeek - Hammond Organ, Mannborg Suitcase Harmonium & Vox Continental Organ",
  thomas: "Thomas Rolff - Double Bass",
  felix: "Felix Schlarmann - Drums & Tambourine",
  produced: "Produced by BRUUT!",
  available: "Available on: VINYL | CD | DIGITAL",
  image: "./img/album-madpack.jpg",
  buyURL: "https://bruut.bandcamp.com/album/mad-pack"
};
var superjazz = {
  title: "Superjazz",
  released: "Released February 3, 2017",
  maarten: "Maarten Hogenhuis - Alto & Tenor Saxophones",
  folkert: "Folkert Oosterbeek - Hammond organ & Mellotron",
  thomas: "Thomas Rolff - Double Bass",
  felix: "Felix Schlarmann - Drums",
  produced: "Produced by BRUUT!",
  available: "Available on: VINYL | CD | DIGITAL",
  image: "./img/album-superjazz.jpg",
  buyURL: "https://bruut.bandcamp.com/album/superjazz"
};
var v = {
  title: "V",
  released: "Released November 30, 2018",
  maarten: "Maarten Hogenhuis - alto & tenor saxophone",
  folkert: "Folkert Oosterbeek - hammond organ, farfisa compact, vox continental, korg polysix, mellotron, piano and harmonium",
  thomas: "Thomas Rolff - Double Bass",
  felix: "Felix Schlarmann - Drums",
  produced: "Produced by BRUUT! & Paul Willemsen",
  available: "Available on: VINYL | CD | DIGITAL",
  image: "./img/album-v.jpg",
  buyURL: "https://bruut.bandcamp.com/album/v"
};
var goSurfing = {
  title: "Go Surfing",
  released: "Released November 22, 2019",
  anton: "Anton Goudsmit - Guitar",
  maarten: "Maarten Hogenhuis - Alto & Tenor Saxophones",
  folkert: "Folkert Oosterbeek - Hammond organ & Mellotron",
  thomas: "Thomas Rolff - Double Bass",
  felix: "Felix Schlarmann - Drums",
  produced: "Produced by BRUUT!",
  available: "Available on: VINYL | CD | DIGITAL",
  image: "./img/hoes.png",
  buyURL: "https://bruut.bandcamp.com/album/superjazz"
};
/***** EVENT LISTENERS *****/
// On click -> toggle overlay ON

var items = Array.from(document.querySelectorAll(".overlay"));
items.forEach(function (item) {
  return item.addEventListener("click", function () {
    return overlayOn();
  });
}); // On click -> create individual content

document.querySelector("#goSurfing").addEventListener("click", function () {
  return createContent(goSurfing);
});
document.querySelector("#v").addEventListener("click", function () {
  return createContent(v);
});
document.querySelector("#superjazz").addEventListener("click", function () {
  return createContent(superjazz);
});
document.querySelector("#madpack").addEventListener("click", function () {
  return createContent(madpack);
});
document.querySelector("#fire").addEventListener("click", function () {
  return createContent(fire);
});
document.querySelector("#bruut").addEventListener("click", function () {
  return createContent(bruut);
});

function overlayOn() {
  var container = document.querySelector("#overlay-shop");
  container.style.display = "block"; // Create .overlay-wrapper

  var overlayWrapper = document.createElement("div");
  overlayWrapper.setAttribute("class", "overlay-wrapper");
  container.appendChild(overlayWrapper); // Create .top-bar-wrapper

  var topBarWrapper = document.createElement("div");
  topBarWrapper.setAttribute("class", "top-bar-wrapper");
  overlayWrapper.appendChild(topBarWrapper); // Create .left-bar-wrapper

  var leftBarWrapper = document.createElement("div");
  leftBarWrapper.setAttribute("class", "left-bar-wrapper");
  leftBarWrapper.setAttribute("id", "previous-item");
  overlayWrapper.appendChild(leftBarWrapper); // Add svg previous-item 'left arrow' image

  var previousArrow = document.createElement("img");
  previousArrow.setAttribute("src", "./../img/arrow-previous.svg");
  leftBarWrapper.appendChild(previousArrow); // Create .content-wrapper

  var contentWrapper = document.createElement("div");
  contentWrapper.setAttribute("class", "content-wrapper");
  overlayWrapper.appendChild(contentWrapper); // Create .right-bar-wrapper

  var rightBarWrapper = document.createElement("div");
  rightBarWrapper.setAttribute("class", "right-bar-wrapper");
  overlayWrapper.appendChild(rightBarWrapper); // Add svg next-item 'right arrow' image

  var nextArrow = document.createElement("img");
  nextArrow.setAttribute("src", "./../img/arrow-next.svg");
  rightBarWrapper.setAttribute("id", "next-item");
  rightBarWrapper.appendChild(nextArrow); // Create .button-close container

  var buttonContainer = document.createElement("div");
  buttonContainer.setAttribute("class", "button-close");
  topBarWrapper.appendChild(buttonContainer); // Add close button image

  var cross = document.createElement("img");
  cross.setAttribute("src", "./../img/cross.svg");
  buttonContainer.appendChild(cross); // Listen on close-button

  document.querySelector(".button-close").addEventListener("click", function () {
    container.style.display = "none";
    overlayWrapper.remove();
  }); // Listen on #previous-item and #next-item

  document.querySelector("#previous-item").addEventListener("click", function () {
    console.log("Yup, previous arrow is clicked!");
  });
  document.querySelector("#next-item").addEventListener("click", function () {
    console.log("Yup, next arrow is clicked!");
  });
}

function createContent(item) {
  // Get .content-wrapper
  var container = document.querySelector(".content-wrapper"); // Create .image-container

  var imageContainer = document.createElement("div");
  imageContainer.setAttribute("class", "image-container"); // Create item image

  var image = document.createElement("img");
  image.setAttribute("src", item.image);
  container.appendChild(imageContainer);
  imageContainer.appendChild(image); // Create .info-container

  var infoContainer = document.createElement("div");
  infoContainer.setAttribute("class", "info-container");
  container.appendChild(infoContainer); // Create header

  var heading = document.createElement("h2");
  var title = document.createTextNode(item.title); // Create paragraphs

  var p1 = document.createElement("p");
  var text1 = document.createTextNode(item.released);
  var p2 = document.createElement("p");
  var text2 = document.createTextNode(item.maarten);
  var p3 = document.createElement("p");
  var text3 = document.createTextNode(item.folkert);
  var p4 = document.createElement("p");
  var text4 = document.createTextNode(item.thomas);
  var p5 = document.createElement("p");
  var text5 = document.createTextNode(item.felix);
  var p6 = document.createElement("p");
  var text6 = document.createTextNode(item.produced);
  var p7 = document.createElement("p");
  var text7 = document.createTextNode(item.available); // Create .para-container for p2-p5

  var paraContainer = document.createElement("div");
  paraContainer.setAttribute("class", "para-container"); // add header and paragraphs to the DOM 

  infoContainer.appendChild(heading);
  heading.appendChild(title); // add first paragraph

  infoContainer.appendChild(p1);
  p1.appendChild(text1); // add .para-container    

  infoContainer.appendChild(paraContainer); // Check if Anton should be added to .para-container <------ TODO !! ------<< 
  // if (item.anton) {
  //     const pAnton = document.createElement("p");
  //     pAnton.createTextNode(item.anton);
  //     paraContainer.appendChild(pAnton);
  // } 
  // add p2-p5 to .para-container    

  paraContainer.appendChild(p2);
  p2.appendChild(text2);
  paraContainer.appendChild(p3);
  p3.appendChild(text3);
  paraContainer.appendChild(p4);
  p4.appendChild(text4);
  paraContainer.appendChild(p5);
  p5.appendChild(text5); // add last 2 paragraphs to .info-container    

  infoContainer.appendChild(p6);
  p6.appendChild(text6);
  infoContainer.appendChild(p7);
  p7.appendChild(text7); // .buttons-container     

  var buttonsContainer = document.createElement("div");
  buttonsContainer.setAttribute("class", "buttons-container");
  infoContainer.appendChild(buttonsContainer); // a tags with .button

  var buttonShopBuy = document.createElement("a");
  buttonShopBuy.setAttribute("href", item.buyURL);
  buttonShopBuy.setAttribute("target", "_blank");
  buttonShopBuy.setAttribute("class", "button button__shop--buy");
  var buy = document.createTextNode("BUY");
  var buttonShopStream = document.createElement("a");
  buttonShopStream.setAttribute("href", item.buyURL);
  buttonShopStream.setAttribute("target", "_blank");
  buttonShopStream.setAttribute("class", "button button__shop--stream");
  var stream = document.createTextNode("STREAM"); // add buttons to the DOM 

  buttonsContainer.appendChild(buttonShopBuy);
  buttonShopBuy.appendChild(buy);
  buttonsContainer.appendChild(buttonShopStream);
  buttonShopStream.appendChild(stream);
}

var margot = document.getElementById("margot");
margot.innerText = "Hier worden de upcoming shows van BRUUT! geinjecteerd via de Songkick API.";