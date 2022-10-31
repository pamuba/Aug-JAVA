import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  template: `
  
      <!-- <h2 *ngIf="display; else elseBlock">HELLO WORLD</h2>

      <ng-template #elseBlock>
        <h2>TEXT IS HIDDEN</h2>
      </ng-template> -->

      <!-- <div *ngIf="display; then thenBlock; else elseBlock"></div>

      <ng-template #thenBlock>
        <h2>TEXT IN THEN BLOCK</h2>
      </ng-template>

      <ng-template #elseBlock>
        <h2>TEXT IN ELSE BLOCK</h2>
      </ng-template> -->


      <!-- <div [ngSwitch]="color">
        <div [style.color]="color" *ngSwitchCase="'red'">RED COLOR</div>
        <div [style.color]="color" *ngSwitchCase="'green'">GREEN COLOR</div>
        <div [style.color]="color" *ngSwitchCase="'blue'">BLUE COLOR</div>
        <div *ngSwitchDefault>INVALID COLOR</div>
      </div> -->


      <!-- <div *ngFor="let color of colors; index as i; first as f; last as l; even as e; odd as o">
        <h2 [style.color]="color">{{i}}. {{color}} {{f}} {{l}} {{e}} {{o}}</h2>
      </div> -->

      <h2>{{name}}</h2>
      <h2>{{name | lowercase}}</h2>
      <h2>{{name | uppercase}}</h2>
      <h2>{{name | titlecase}}</h2>
      <h2>{{name | slice: 3:6}}</h2>

      <h2>{{5.678 | number:'1.2-3'}}</h2>
      <h2>{{5.678 | number:'3.4-5'}}</h2>
      <h2>{{5.678 | number:'3.1-2'}}</h2>

      <h2>{{.25 | currency }}</h2>
      <h2>{{.25 | currency:'EUR' }}</h2>
     
      <h2>{{date}}</h2>
      <h2>{{date | date:'short'}}</h2>
      <h2>{{date | date: 'shortDate'}}</h2>
      <h2>{{date | date: 'dd/MM/yyyy'}}</h2>
      <h2>{{date | date: 'dd/MMM/yyyy'}}</h2>
      <h2>{{date | date: 'dd/MMMM/yyyy'}}</h2>
      <h2>{{date | date: 'shortTime'}}</h2> 
      
      
  `,
  styles: [``]
})
export class DirectivesComponent implements OnInit {

  date = new Date()
  display = true
  color = "Green"
  colors = ["red", "blue", "green", "yellow"]

  name = "Angular angular"
  constructor() { }

  ngOnInit(): void {
  }

}
