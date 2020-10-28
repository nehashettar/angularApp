import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pipes',
  templateUrl: './angular-pipes.component.html',
  styleUrls: ['./angular-pipes.component.css']
})
export class AngularPipesComponent implements OnInit {

  constructor() { }
  currency : Number = 12345.67;
  currentDate = new Date();
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
