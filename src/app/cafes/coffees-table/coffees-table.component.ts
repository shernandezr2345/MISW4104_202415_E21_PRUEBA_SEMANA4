import { Component, OnInit } from '@angular/core';
import { Cafe } from '../Cafe';
import { CafeService } from '../cafe.service';
@Component({
  selector: 'app-coffees-table',
  templateUrl: './coffees-table.component.html',
  styleUrls: ['./coffees-table.component.css']
})
export class CoffeesTableComponent implements OnInit {
  cafes: Array<Cafe> = []; 
  constructor(private cafeService: CafeService) { }

  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
    });
  }

  get totalOrigen() {
    return this.cafes.filter(cafe => cafe.tipo === 'Café de Origen').length;
  }

  get totalBlend() {
    return this.cafes.filter(cafe => cafe.tipo === 'Blend').length;
  }

  ngOnInit() {
    this.getCafes();
  }

}
