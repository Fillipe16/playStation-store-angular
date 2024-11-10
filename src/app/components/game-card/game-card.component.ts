import { Component, Input } from '@angular/core';
import { Game } from '../../common/model/game';

@Component({
  selector: 'game-card',
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css'
})
export class GameCardComponent {
  @Input()
  game!: Game;
}
