import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

cToF: number;
fToC:number;
kmToMi:number;
miToKm:number;
  constructor() {}

  conversione (unita:string):void {
    if ( unita === "cToF") {
      this.fToC = (this.cToF *1.8) + 32;
    } else if ( unita === "fToC") {
      this.cToF = (this.cToF -32 * 5 / 9);
    } else if (unita === "kmToMi") {
      this.miToKm = this.kmToMi / 1.609;
    }  else {
      this.kmToMi = this.miToKm * 1.609;
    }
  }
  ngOnInit(){

  }
}
