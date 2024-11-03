import { Component, OnInit } from '@angular/core';
import { Cafe } from '../Cafe';
@Component({
  selector: 'app-coffees-table',
  templateUrl: './coffees-table.component.html',
  styleUrls: ['./coffees-table.component.css']
})
export class CoffeesTableComponent implements OnInit {
  cafes: Array<Cafe> = []; 
  constructor() { }

  ngOnInit() {
  }

}
