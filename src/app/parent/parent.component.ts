import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit ,OnDestroy{

  myVal = "";
  name : string = "Angular";
  isVisible : boolean = true;
  constructor() { }

  ngOnInit(): void {
    console.log(" ngOnDestroy called")
  }

  ngOnDestroy() { console.log(" ngOnDestroy called")}

  updateName() {
    this.name = "Java";
  }

  toggleChildComp() {
    this.isVisible = !this.isVisible;
  }
}
