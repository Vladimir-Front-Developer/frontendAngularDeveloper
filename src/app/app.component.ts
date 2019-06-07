import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  itemValue: object = { id: 0, title: 'Добро пожаловать!' }
  public onClicked(itemValue){
    this.itemValue = itemValue
  }
}
