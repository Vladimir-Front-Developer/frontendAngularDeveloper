import { Component, Input } from '@angular/core';

export interface pageData {
  id: number;
  headline: string;
  subtitle: string;
  percent?: number;
  text: string;
}

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss']
})

export class NotebookComponent {
  @Input() nameNotebook: string
  pageData: pageData[] = [
    {
      id: 3,
      headline: 'JavaScript',
      subtitle: 'AngularCLI 7+',
      percent: 40,
      text: 'Какое то описание по поводу навыка',
    },
    {
      id: 2,
      headline: 'style',
      subtitle: 'css',
      percent: 40,
      text: 'Какое то описание по поводу навыка',
    },
    {
      id: 1,
      headline: 'html',
      subtitle: '',
      percent: 100,
      text: 'Какое то описание по поводу навыка',
    },
  ]
  currentPage: number = 1

  nextPage(){
    this.currentPage++
    if(this.currentPage > this.pageData.length) this.currentPage = 1
  }

}
// pageAnimate: string = 'closed'
// [@pageTurning]="pageAnimate"
// this.pageAnimate = 'open'
// *ngIf="currentPage === page.id"
// animations: [
//   trigger('pageTurning', [
//     state('closed', style({ 'backface-visibility': 'visible' })),
//     state('open', style({ 'backface-visibility': 'hidden' })),
//     transition('closed => open', [
//       animate('2s ease-in', keyframes([
//         style({'backface-visibility': 'visible'}),
//         style({'backface-visibility': 'hidden'})
//      ]))
//     ]),
//   ])
// ]
// import {
//   trigger,
//   state,
//   style,
//   animate,
//   transition,
//   keyframes,
// } from '@angular/animations';