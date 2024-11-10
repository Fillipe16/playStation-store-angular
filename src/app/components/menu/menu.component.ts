import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  public menuTitles : String[] = [];

  constructor() {
    this.menuTitles = ["Jogos", "PS5","PS4","Serviços","Acessórios","Notícias","Loja","Suporte"]
  }
  
}
