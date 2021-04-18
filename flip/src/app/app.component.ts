import { identifierModuleUrl } from '@angular/compiler';
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
  Card1IsSet = false;
  Card2IsSet = false;

  onCardClicked(event: any): void{
    event.target.querySelector('img').id
    event.target.querySelector('img').hidden = false

    if(this.Card2IsSet){
      this.CardImg1 = event.target.querySelector('img').src
      this.CardID1 = event.target.querySelector('img').id
      this.Card1IsSet = true
      this.Card2IsSet = false
    }else if(this.Card1IsSet){
      this.CardImg2 = event.target.querySelector('img').src
      this.CardID2 = event.target.querySelector('img').id
      this.Card2IsSet = true
      this.Card1IsSet = false
    }else{
      this.CardImg1 = event.target.querySelector('img').src
      this.CardID1 = event.target.querySelector('img').id
      this.Card1IsSet = true
    }

    console.log(this.CardID1)
    console.log(this.CardID2)
    console.log(this.CardImg1)
    console.log(this.CardImg2)

    if(this.CardImg1 === this.CardImg2){
      document.getElementById(this.CardID1)?.parentElement?.parentElement?.remove()
      document.getElementById(this.CardID2)?.parentElement?.parentElement?.remove()
    }else{
      console.log("hidden")
    }
  }
}
