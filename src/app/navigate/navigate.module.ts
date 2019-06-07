import { NgModule } from '@angular/core';
import { NavigateComponent } from './navigate.component';
import { MatMenuModule } from '@angular/material/menu'
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    NavigateComponent
  ],
  imports: [
    MatMenuModule,
    SharedModule,
  ],
  exports: [
    NavigateComponent
  ]
})

export class NavigateModule {}
