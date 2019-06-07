import { NgModule } from '@angular/core';
import { NotebookComponent } from './notebook.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    NotebookComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    NotebookComponent
  ]
})
export class NotebookModule { }
