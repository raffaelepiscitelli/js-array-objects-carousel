/*Dato un array di oggetti letterali con:
URL dell’immagine
Titolo della slide
Descrizione della slide
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2: Aggiungere il ciclo infinito del carosello.
Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.*/

const imagesList = [
    {
        image: './img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: './img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: './img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: './img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: './img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const wrapperElement = document.querySelector("section.wrapper");

for (let i = 0; i < imagesList.length; i++){
    const newImgEl = document.createElement("img");
    newImgEl.src = imagesList[i].image; 
    wrapperElement.appendChild(newImgEl);
}

let activeIndex = 0;

const imageEl = document.querySelectorAll("img");
imageEl [activeIndex].classList.add("active-img");

const nextButton = document.querySelector("button.next");

nextButton.addEventListener("click", function(){
    imageEl[activeIndex].classList.remove("active-img");
    activeIndex = activeIndex + 1;
    imageEl[activeIndex].classList.add("active-img")
 });

 const prevButton = document.querySelector("button.prev");

prevButton.addEventListener("click", function(){
    imageEl[activeIndex].classList.remove("active-img");
    activeIndex = activeIndex - 1;
    imageEl[activeIndex].classList.add("active-img")
 });

 