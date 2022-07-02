import { Oferta } from "./class/oferta.js";
const oferty=document.querySelector('#oferty');
const url='./data.json';
let arr = [];
const search = document.querySelector('#search');

async function get() {
    try {
      const response = await fetch(url);
      const data = await response.json();
        data.forEach(element => {
            const oferta = new Oferta(element.ido, element.potwierdzenie, element.kraj, element.rejon, element.nazwa, element.cena);
            oferty.innerHTML+=oferta.render();
        })

    } catch (error) {
      const alert = new Alert(
        "Error: " + error.message,
        "red",
        "#alert-container"
      );
      alert.showAlert();
    }
    selectItemEvent()
  }
   
  function searchItem() {
   
    const searchValue = search.value.toUpperCase();
    const oferty = document.querySelectorAll('.oferta-info-kraj');
    oferty.forEach(element => {
      if (element.innerHTML.toUpperCase().includes(searchValue)) {
        element.parentElement.style.display = "grid";
      } else {
        element.parentElement.style.display = "none";
      }
    });
  }

 function selectItemEvent(){ 
    const oferty = document.querySelectorAll('.oferta');
    oferty.forEach(element => {
        element.addEventListener('click', getSelected)
    })           
}

async function getSelected(){
 await arr.push(this.id); 
 oferty.innerHTML='';
const response = await fetch(url);
const data = await response.json();
  data.forEach(element => {
    if(arr[arr.length-1]===element.ido){
      const oferta = new Oferta(element.ido, element.potwierdzenie, element.kraj, element.rejon, element.nazwa, element.cena);
      oferty.innerHTML+=oferta.render();
    }
  })
}

get()
search.addEventListener('keyup', searchItem);