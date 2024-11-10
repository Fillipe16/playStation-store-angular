import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { GameCardComponent } from '../../components/game-card/game-card.component';
import { GameDescComponent } from '../../components/game-desc/game-desc.component';
import { FormatPricePipe } from '../../common/pipes/format-price.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    GameCardComponent,
    GameDescComponent,
    FormatPricePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    MenuComponent,
    GameCardComponent,
    GameDescComponent
  ]
})
export class HomeModule { }
