import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CoffeesTableComponent } from './coffees-table/coffees-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent,CoffeesTableComponent],
  declarations: [HeaderComponent,CoffeesTableComponent]
})
export class CafesModule { }
