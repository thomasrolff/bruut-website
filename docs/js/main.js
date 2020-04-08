// const video = document.querySelector(".video-container");
// const loadButton = document.getElementById("load-video");
// loadButton.addEventListener("click", () => {
//     const videoContainer = document.createElement("div");
//     videoContainer.setAttribute("class", "video-container");
//     const video1 = '<iframe class="video-2" width="560" height="315" src="https://www.youtube.com/embed/7krpt6JchzQ?start=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
//     const video2 = '<iframe class="video-2" width="560" height="315" src="https://www.youtube.com/embed/7krpt6JchzQ?start=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
//     videoContainer.innerHTML = video1 + video2;
//     video.appendChild(videoContainer);
// });
var scroll = window.requestAnimationFrame || function (callback) {
  window.setTimeout(callback, 1000 / 60);
};

var elementsToShow = document.querySelectorAll(".show-on-scroll");

function loop() {
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("is-visible");
    } else {
      element.classList.remove("is-visible");
    }
  });
  scroll(loop);
}

loop();

function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }

  var rect = el.getBoundingClientRect();
  return rect.top <= 0 && rect.bottom >= 0 || rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight) || rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}
/* SHOP-ITEM CONTENT */


var items = [{
  title: "Go Surfing",
  released: "Released November 22, 2019",
  anton: "Anton Goudsmit - Guitar",
  maarten: "Maarten Hogenhuis - Alto & Tenor Saxophones",
  folkert: "Folkert Oosterbeek - Hammond organ & Mellotron",
  thomas: "Thomas Rolff - Double Bass",
  felix: "Felix Schlarmann - Drums",
  produced: "Produced by BRUUT!",
  available: "Available on: VINYL | CD | DIGITAL",
  image: "./img/album-go-surfing.jpg",
  buyURL: "https://bruut.bandcamp.com/album/superjazz"
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}];
/***** EVENT LISTENERS *****/
// On click -> toggle overlay ON
// const test = Array.from(document.querySelectorAll(".overlay"));
// test.forEach(item => item.addEventListener("click", () => overlayOn()));
// On click -> create initial content
// document.querySelector("#goSurfing").addEventListener("click", () => createContent(items[0]));
// document.querySelector("#v").addEventListener("click", () => createContent(items[1]));
// document.querySelector("#superjazz").addEventListener("click", () => createContent(items[2]));
// document.querySelector("#madpack").addEventListener("click", () => createContent(items[3]));
// document.querySelector("#fire").addEventListener("click", () => createContent(items[4]));
// document.querySelector("#bruut").addEventListener("click", () => createContent(items[5]));
//NEW: on click create overlay, then create item content

document.querySelector("#goSurfing").addEventListener("click", function () {
  return overlayOn(items[0]);
});
document.querySelector("#v").addEventListener("click", function () {
  return overlayOn(items[1]);
});
document.querySelector("#superjazz").addEventListener("click", function () {
  return overlayOn(items[2]);
});
document.querySelector("#madpack").addEventListener("click", function () {
  return overlayOn(items[3]);
});
document.querySelector("#fire").addEventListener("click", function () {
  return overlayOn(items[4]);
});
document.querySelector("#bruut").addEventListener("click", function () {
  return overlayOn(items[5]);
});

function overlayOn(item) {
  var container = document.querySelector("#overlay-shop");
  container.style.display = "block"; // set body to .noscroll 

  document.body.setAttribute("class", "noscroll"); // Create .overlay-wrapper

  var overlayWrapper = document.createElement("div");
  overlayWrapper.setAttribute("class", "overlay-wrapper");
  container.appendChild(overlayWrapper); // Create .top-bar-wrapper

  var topBarWrapper = document.createElement("div");
  topBarWrapper.setAttribute("class", "top-bar-wrapper");
  overlayWrapper.appendChild(topBarWrapper); // Create .left-bar-wrapper

  var leftBarWrapper = document.createElement("div");
  leftBarWrapper.setAttribute("class", "left-bar-wrapper no-selection");
  leftBarWrapper.setAttribute("id", "previous-item");
  overlayWrapper.appendChild(leftBarWrapper); // CREATE PREV ARROW SVG

  var prevSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  prevSvg.setAttribute("width", "44");
  prevSvg.setAttribute("height", "74");
  var prevPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  prevPath.setAttribute("d", "M1.181 39.885l32.93 32.929a4.018 4.018 0 002.861 1.182 4.02 4.02 0 002.863-1.182l2.425-2.424a4.053 4.053 0 000-5.725L14.608 37.013 42.291 9.331a4.021 4.021 0 001.182-2.861c0-1.085-.42-2.101-1.182-2.864l-2.425-2.424A4.019 4.019 0 0037.002 0c-1.084 0-2.1.42-2.862 1.182L1.18 34.141A4.024 4.024 0 000 37.011a4.023 4.023 0 001.18 2.874z");
  prevPath.setAttribute("fill", "#fff");
  leftBarWrapper.appendChild(prevSvg);
  prevSvg.appendChild(prevPath); // Create .content-wrapper

  var contentWrapper = document.createElement("div");
  contentWrapper.setAttribute("class", "content-wrapper");
  overlayWrapper.appendChild(contentWrapper); // Create .right-bar-wrapper

  var rightBarWrapper = document.createElement("div");
  rightBarWrapper.setAttribute("class", "right-bar-wrapper no-selection");
  rightBarWrapper.setAttribute("id", "next-item");
  overlayWrapper.appendChild(rightBarWrapper); // CREATE  NEXT ARROW SVG

  var nextSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  nextSvg.setAttribute("width", "44");
  nextSvg.setAttribute("height", "74");
  var nextPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  nextPath.setAttribute("d", "M42.292 34.11L9.362 1.183A4.018 4.018 0 006.5 0C5.416 0 4.4.42 3.638 1.182L1.213 3.607a4.053 4.053 0 000 5.724l27.651 27.652L1.182 64.665A4.021 4.021 0 000 67.526c0 1.085.42 2.101 1.182 2.864l2.425 2.424a4.02 4.02 0 002.862 1.182 4.02 4.02 0 002.863-1.182l32.96-32.959a4.024 4.024 0 001.18-2.87 4.023 4.023 0 00-1.18-2.874z");
  nextPath.setAttribute("fill", "#fff");
  rightBarWrapper.appendChild(nextSvg);
  nextSvg.appendChild(nextPath); // Create .button-close container

  var buttonContainer = document.createElement("div");
  buttonContainer.setAttribute("class", "button-close");
  topBarWrapper.appendChild(buttonContainer); // Add close button image

  var cross = document.createElement("img");
  cross.setAttribute("src", "./../img/cross.svg");
  buttonContainer.appendChild(cross); // Listen on close-button

  document.querySelector(".button-close").addEventListener("click", function () {
    container.style.display = "none";
    overlayWrapper.remove();
    document.body.removeAttribute("class");
  });
  createContent(item);
}

function createContent(item) {
  // Get .content-wrapper
  var contentWrapper = document.querySelector(".content-wrapper"); // Create .content-container inside content-wrapper

  var contentContainer = document.createElement("div");
  contentContainer.setAttribute("class", "content-container");
  contentWrapper.appendChild(contentContainer); // Create .image-container

  var imageContainer = document.createElement("div");
  imageContainer.setAttribute("class", "image-container"); // Create item image

  var image = document.createElement("img");
  image.setAttribute("src", item.image);
  contentContainer.appendChild(imageContainer);
  imageContainer.appendChild(image); // Create .info-container

  var infoContainer = document.createElement("div");
  infoContainer.setAttribute("class", "info-container");
  contentContainer.appendChild(infoContainer); // Create header

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
  var shopSpan = document.createElement("span");
  shopSpan.setAttribute("class", "shopping");
  var shopSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23"><path fill="#FBFBFB" d="M16.036 16.148a2.47 2.47 0 00-2.471 2.471 2.47 2.47 0 002.471 2.471 2.47 2.47 0 002.471-2.471c-.024-1.354-1.116-2.471-2.471-2.471zm4.348-11.783c-.048 0-.119-.024-.19-.024H5.227L4.989 2.75A2.127 2.127 0 002.875.92H.95a.953.953 0 00-.95.95c0 .523.428.95.95.95h1.924c.119 0 .214.095.238.214L4.585 13.06a2.606 2.606 0 002.566 2.209h9.882a2.64 2.64 0 002.566-2.091l1.544-7.721a.938.938 0 00-.759-1.092zM9.978 18.5a2.456 2.456 0 00-2.447-2.352 2.485 2.485 0 00-2.376 2.565 2.436 2.436 0 002.423 2.353h.048c1.354-.072 2.423-1.212 2.352-2.566z"/></svg>';
  var buttonShopStream = document.createElement("a");
  buttonShopStream.setAttribute("href", item.buyURL);
  buttonShopStream.setAttribute("target", "_blank");
  buttonShopStream.setAttribute("class", "button button__shop--stream");
  var stream = document.createTextNode("STREAM");
  var streamSpan = document.createElement("span");
  streamSpan.setAttribute("class", "stream");
  var streamSvg = '<svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.26804 0L9.23399 4.53252L13.1999 0H18.468L9.23399 10.5531L0 0H5.26804Z" fill="white"/></svg>'; // add buttons to the DOM 

  shopSpan.innerHTML = shopSvg;
  streamSpan.innerHTML = streamSvg;
  buttonsContainer.appendChild(buttonShopBuy);
  buttonShopBuy.appendChild(shopSpan);
  buttonShopBuy.appendChild(buy);
  buttonsContainer.appendChild(buttonShopStream);
  buttonShopStream.appendChild(streamSpan);
  buttonShopStream.appendChild(stream); // Listen on #previous-item, on click -> create new content

  document.querySelector("#previous-item").addEventListener("click", function () {
    var prevItem = items[items.indexOf(item) - 1];

    if (prevItem) {
      contentWrapper.removeChild(contentContainer);
      createContent(prevItem);
    } else {
      return null;
    }
  }); // Listen on #next-item, on click -> create new content

  document.querySelector("#next-item").addEventListener("click", function () {
    var nextItem = items[items.indexOf(item) + 1];

    if (nextItem) {
      contentWrapper.removeChild(contentContainer);
      createContent(nextItem);
    } else {
      return null;
    }
  });
}