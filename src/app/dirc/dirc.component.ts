import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dirc',
  templateUrl: './dirc.component.html',
  styleUrls: ['./dirc.component.css']
})
export class DircComponent implements OnInit {

  constructor() { }
  
  age : Number = 0;
  isEligible : Boolean = false;
  numbers  = [1,2,3,4,5,6,7,8,9];
  checkAge(): void {
    if(this.age >= 18) {
      this.isEligible = true;
    } else {
      this.isEligible = false;
    }
  }

  ngOnInit(): void {
  }
  states: any[] = [
    {
      "name": "Gujarat",
      "capital": "Gandhinagar"
    },
    {
      "name": "Karnataka",
      "capital": "Bangalore"
    },
    {
      "name": "Maharashtra",
      "capital": "Mumbai"
    },
    {
      "name": "Tamil Nadu",
      "capital": "Chennai"
    },
    {
      "name": "Madhya Pradesh",
      "capital": "Bhopal"
    }
  ];
}
