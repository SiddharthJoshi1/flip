import { Component } from '@angular/core';
import * as cards from './cardslist.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'flip';
  cards = (cards as any).default;
  CardImg1 : string ='';
  CardImg2 : string ='';
  CardID1 = '';
  CardID2 = '';

  onCardClicked(event: any): void{
    event.target.querySelector('img').id
    event.target.querySelector('img').hidden = false

    if(this.CardImg1.length > 1){
      this.CardImg2 = event.target.querySelector('img').src
      this.CardID2 = event.target.querySelector('img').id
    }else{
      this.CardImg1 = event.target.querySelector('img').src
      this.CardID1 = event.target.querySelector('img').id
    }

    if(this.CardImg1 !== this.CardImg2 && this.CardImg1.length >1 && this.CardID2.length > 1){
      if(this.CardID1 === this.CardID2){
        
      }
    }

  }
}
