import { Component, OnInit } from '@angular/core';
import { Game } from '../../common/model/game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  public games: Game[] = [];

  ngOnInit(): void {
    this.games = [
      {url:"/assets/bt-5.jpg",tag:"Exclusive",title:"Play it Now!",flags:["Full Game","PS4"],price: 59.99},
      {url:"/assets/bt-hardline.jpg",title:"Buy Now!",flags:["Full Game","PS4"],price: 59.99},
      {url:"/assets/ac-cover.jpg",tag:"Cross Buy",title:"Play it Now!",flags:["Digital Game","PS4","PS3", "PS Vita"],price: 14.99}
    ]
  }

}
