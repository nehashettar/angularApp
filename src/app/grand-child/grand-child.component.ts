import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'grandChild',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css']
})
export class GrandChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fullName ="";
  fname ="";
  lname ="";

  onSave() {
    console.log("On Save Function Clicked");
  }

  showFullName(){
      this.fullName = this.fname +" "+ this.lname;
  }

}
