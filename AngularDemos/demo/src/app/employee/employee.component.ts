import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  template: `
    <h3>Employee Component</h3>
    <div>Name:{{name}}</div>
    <div>{{2*4}}</div>
    <div>{{name.length}}</div>
    <hr>
    <input [id]="myId" type="text" value="{{name}}" />
    <input [disabled]="isDisabled" id="{{myId}}" type="text" value="{{name}}" />
    <div>
      <button (click)="onClick()" >Click</button>
    </div>
    <!-- <div>{{a = 2+3}}</div> -->
  `,
  styles: [``]
})
export class EmployeeComponent implements OnInit {

  name = " John Smith "
  myId = "username"
  isDisabled = true
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log("Button Clicked")
    this.name = "Sam Smith"
  }

}
