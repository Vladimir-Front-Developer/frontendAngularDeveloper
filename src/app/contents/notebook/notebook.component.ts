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
  currentPage: number = 0
  pageData: pageData[] = [
    {
      id: 1,
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
      id: 3,
      headline: 'html',
      subtitle: '',
      percent: 100,
      text: 'Какое то описание по поводу навыка',
    },
  ]

  nextPage(id: number){
    const lenPD = this.pageData.length
    this.currentPage++
    if(lenPD < this.currentPage) this.currentPage = 0
    console.log(this.currentPage)
  }

}
