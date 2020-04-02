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
    const overlay = document.querySelector("#overlay-shop");
    overlay.style.display = "block";
    
    // Create container div
    const contentWrapper = document.createElement("div");
    contentWrapper.setAttribute("class", "content-wrapper");
    overlay.appendChild(contentWrapper);
    
    // Create close button container
    const buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("class", "button-close");
    contentWrapper.appendChild(buttonContainer);

    // Add close button image
    const img = document.createElement("img");
    img.setAttribute("src", "./../img/cross.svg");
    buttonContainer.appendChild(img);

    // Listen on close-button
    document.querySelector(".button-close").addEventListener("click", () => {
        overlay.style.display = "none";
        contentWrapper.remove();
    });
}






function createContent(item) {
    const container = document.querySelector(".content-wrapper");


    // image
    const image = document.createElement("img");
    image.setAttribute("src", item.image);
    image.setAttribute("class", "item-image");

    container.appendChild(image);


    // .info-container
    const infoContainer = document.createElement("div");
    infoContainer.setAttribute("class", "info-container");

    container.appendChild(infoContainer);


    // header
    const heading = document.createElement("h2");
    const title = document.createTextNode(item.title);


    // paragraphs
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


    // paragraph container for p2-p5
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

    // Check if Anton should be added to .para-container
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

