import { NgModule } from '@angular/core';
import { NotebookComponent } from './notebook.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    NotebookComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    NotebookComponent
  ]
})
export class NotebookModule { }
