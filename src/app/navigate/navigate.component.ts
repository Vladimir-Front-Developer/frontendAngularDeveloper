import { Component, Output, EventEmitter } from '@angular/core';

export interface NavTile {
  id: number;
  text: string;
  cols: number;
}

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})

export class NavigateComponent {
  tiles: NavTile[] = [
    { id: 1, text: 'О себе', cols: 1 },
    { id: 2, text: 'Работы', cols: 1 },
    { id: 3, text: 'Компоненты', cols: 1 },
    { id: 4, text: 'Контакты', cols: 1 },
  ]
  itemNavTile:{ id:number, title:string }

  @Output() clickNavTile: EventEmitter<object> = new EventEmitter();
  
  public assignDataContents(tile:{ id:number, text:string }){
    this.itemNavTile = {
      id: tile.id,
      title: tile.text
    }
    this.clickNavTile.emit(this.itemNavTile)
  }

}