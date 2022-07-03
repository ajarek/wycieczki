export class Oferta {
  constructor(ido, foto, kraj, rejon, nazwa, cena) {
    this.ido = ido;
    this.foto = foto;
    this.kraj = kraj;
    this.rejon = rejon;
    this.nazwa = nazwa;
    this.cena = cena;
  }
  render() {
    return `<div class="oferta" id="${this.ido}">        
                    <div class="oferta-info-nazwa">${this.nazwa}</div>
                    <div class="oferta-info-rejon">${this.rejon}</div>
                    <div class="oferta-info-kraj">${this.kraj}</div>
                    <div class="oferta-info-cena">${this.cena} PLN</div>         
            </div>`;
  }
  renderSolo() {
    return ` 
    <div class="oferta-solo">  
    
     <div class="img">
      <img src="${this.foto}" alt="">
      <div class="oferta-close">❌</div>
      <div class="oferta-info-link">
        <a href="https://www.paypal.com/signin" target="_blank">Zamawiam i płacę</a>
      </div>               
     </div>                          
     <div>${this.kraj}</div>
     <div>${this.rejon}</div>
     <div>${this.nazwa}</div>
     <div>${this.cena} PLN</div> 
   </div>`;
  }
}
