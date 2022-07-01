export class Oferta {
  constructor(ido, potwierdzenie, kraj, rejon, nazwa, cena) {
    this.ido = ido;
    this.potwierdzenie = potwierdzenie;
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
}
