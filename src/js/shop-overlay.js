/* SHOP-ITEM CONTENT */

const bruut = {
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
}

const fire = {
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
}

const madpack = {
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
}

const superjazz = {
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
}

const v = {
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
}

const goSurfing = {
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
}


/***** EVENT LISTENERS *****/

// On click -> toggle overlay ON
const items = Array.from(document.querySelectorAll(".overlay"));
items.forEach(item => item.addEventListener("click", () => overlayOn()));

// On click -> create individual content
document.querySelector("#goSurfing").addEventListener("click", () => createContent(goSurfing));
document.querySelector("#v").addEventListener("click", () => createContent(v));
document.querySelector("#superjazz").addEventListener("click", () => createContent(superjazz));
document.querySelector("#madpack").addEventListener("click", () => createContent(madpack));
document.querySelector("#fire").addEventListener("click", () => createContent(fire));
document.querySelector("#bruut").addEventListener("click", () => createContent(bruut));




function overlayOn() {
    const container = document.querySelector("#overlay-shop");
    container.style.display = "block";
    
    // Create .overlay-wrapper
    const overlayWrapper = document.createElement("div");
    overlayWrapper.setAttribute("class", "overlay-wrapper");
    container.appendChild(overlayWrapper);

    // Create .top-bar-wrapper
    const topBarWrapper = document.createElement("div");
    topBarWrapper.setAttribute("class", "top-bar-wrapper");
    overlayWrapper.appendChild(topBarWrapper);

    // Create .left-bar-wrapper
    const leftBarWrapper = document.createElement("div");
    leftBarWrapper.setAttribute("class", "left-bar-wrapper");
    leftBarWrapper.setAttribute("id", "previous-item"); 
    overlayWrapper.appendChild(leftBarWrapper);

    // Add svg previous-item 'left arrow' image
    const previousArrow = document.createElement("img");
    previousArrow.setAttribute("src", "./../img/arrow-previous.svg"); 
    leftBarWrapper.appendChild(previousArrow);

    // Create .content-wrapper
    const contentWrapper = document.createElement("div");
    contentWrapper.setAttribute("class", "content-wrapper");
    overlayWrapper.appendChild(contentWrapper);

    // Create .right-bar-wrapper
    const rightBarWrapper = document.createElement("div");
    rightBarWrapper.setAttribute("class", "right-bar-wrapper");
    overlayWrapper.appendChild(rightBarWrapper);

    // Add svg next-item 'right arrow' image
    const nextArrow = document.createElement("img");
    nextArrow.setAttribute("src", "./../img/arrow-next.svg"); 
    rightBarWrapper.setAttribute("id", "next-item"); 
    rightBarWrapper.appendChild(nextArrow);
    
    // Create .button-close container
    const buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("class", "button-close");
    topBarWrapper.appendChild(buttonContainer);

    // Add close button image
    const cross = document.createElement("img");
    cross.setAttribute("src", "./../img/cross.svg");
    buttonContainer.appendChild(cross);

    // Listen on close-button
    document.querySelector(".button-close").addEventListener("click", () => {
        container.style.display = "none";
        overlayWrapper.remove();
    });

    // Listen on #previous-item and #next-item
    document.querySelector("#previous-item").addEventListener("click", () => {
        console.log("Yup, previous arrow is clicked!");
    });

    document.querySelector("#next-item").addEventListener("click", () => {
        console.log("Yup, next arrow is clicked!");
    });

}


function createContent(item) {
    // Get .content-wrapper
    const container = document.querySelector(".content-wrapper");

    // Create .image-container
    const imageContainer = document.createElement("div");
    imageContainer.setAttribute("class", "image-container");
   
    // Create item image
    const image = document.createElement("img");
    image.setAttribute("src", item.image);

    container.appendChild(imageContainer);
    imageContainer.appendChild(image);

    // Create .info-container
    const infoContainer = document.createElement("div");
    infoContainer.setAttribute("class", "info-container");
    container.appendChild(infoContainer);

    // Create header
    const heading = document.createElement("h2");
    const title = document.createTextNode(item.title);


    // Create paragraphs
    const p1 = document.createElement("p");
    const text1 = document.createTextNode(item.released);
    const p2 = document.createElement("p");
    const text2 = document.createTextNode(item.maarten);
    const p3 = document.createElement("p");
    const text3 = document.createTextNode(item.folkert);
    const p4 = document.createElement("p");
    const text4 = document.createTextNode(item.thomas);
    const p5 = document.createElement("p");
    const text5 = document.createTextNode(item.felix);
    const p6 = document.createElement("p");
    const text6 = document.createTextNode(item.produced);
    const p7 = document.createElement("p");
    const text7 = document.createTextNode(item.available);


    // Create .para-container for p2-p5
    const paraContainer = document.createElement("div");
    paraContainer.setAttribute("class", "para-container");


    // add header and paragraphs to the DOM 
    infoContainer.appendChild(heading);
    heading.appendChild(title);
    
    // add first paragraph
    infoContainer.appendChild(p1);
    p1.appendChild(text1);

    // add .para-container    
    infoContainer.appendChild(paraContainer);

    // Check if Anton should be added to .para-container <------ TODO !! ------<< 
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
    p5.appendChild(text5);

    // add last 2 paragraphs to .info-container    
    infoContainer.appendChild(p6);
    p6.appendChild(text6);
    infoContainer.appendChild(p7);
    p7.appendChild(text7);


    // .buttons-container     
    const buttonsContainer = document.createElement("div");
    buttonsContainer.setAttribute("class", "buttons-container");
    infoContainer.appendChild(buttonsContainer);
    
    // a tags with .button
    const buttonShopBuy = document.createElement("a");
    buttonShopBuy.setAttribute("href", item.buyURL);
    buttonShopBuy.setAttribute("target", "_blank");
    buttonShopBuy.setAttribute("class", "button button__shop--buy"); 
    const buy = document.createTextNode("BUY");

    const buttonShopStream = document.createElement("a");
    buttonShopStream.setAttribute("href", item.buyURL);
    buttonShopStream.setAttribute("target", "_blank");
    buttonShopStream.setAttribute("class", "button button__shop--stream"); 
    const stream = document.createTextNode("STREAM");


    // add buttons to the DOM 
    buttonsContainer.appendChild(buttonShopBuy);
    buttonShopBuy.appendChild(buy);
    
    buttonsContainer.appendChild(buttonShopStream);
    buttonShopStream.appendChild(stream);
}

