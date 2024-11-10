import { Component, Input } from '@angular/core';
import { Game } from '../../common/model/game';

@Component({
  selector: 'game-desc',
  templateUrl: './game-desc.component.html',
  styleUrl: './game-desc.component.css'
})
export class GameDescComponent {
    @Input() game!: Game;

    public isLastFlag(index: number): boolean {
      if(index == this.game.flags.length - 1) {
        return true;
      }
      return false;
    }
    public isFirstFlag(index: number): boolean {
      if(index == 0) {
        return true;
      }
      return false;
    }
    public getClassFromFlagIndex(index: number): string {
      if(this.isFirstFlag(index)) {
        return "first-flag";
      }
      return "not-first-flag"
    }
}
