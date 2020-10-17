import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fullName ="";
  fname ="Neha";
  lname ="Shettar";

  onSave() {
    console.log("On Save Function Clicked");
  }

  showName(){
      this.fullName = this.fname +" "+ this.lname;
  }

}
