import { NgModule } from '@angular/core';
import { ContentsComponent } from './contents.component';
import { NotebookModule } from './notebook/notebook.module';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    ContentsComponent
  ],
  imports: [
    NotebookModule
  ],
  exports: [
    ContentsComponent
  ]
})
export class ContentsModule { }
