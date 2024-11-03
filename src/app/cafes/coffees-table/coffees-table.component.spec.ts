/* tslint:disable:no-unused-variable */
import { TestBed, waitForAsync, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoffeesTableComponent } from './coffees-table.component';
import { HttpClientModule } from '@angular/common/http';

describe('CoffeesTableComponent', () => {
  let component: CoffeesTableComponent;
  let fixture: ComponentFixture<CoffeesTableComponent>;
  const mockCoffees = [
    {
      id: 1,
      nombre: "Café Especial Colombiano",
      tipo: "Blend",
      region: "Angelópolis, Antioquia",
      sabor: "Panela, Durazno, Caramelo",
      altura: 1920,
      imagen: "https://example.com/imagen1.jpg"
    },
    {
      id: 2,
      nombre: "Café Especial EE.UU",
      tipo: "Café de Origen",
      region: "Chicago",
      sabor: "Cítrico, Naranja, Cacao",
      altura: 1800,
      imagen: "https://example.com/imagen2.jpg"
    },
    {
      id: 3,
      nombre: "Café Especial Ecuatoriano",
      tipo: "Blend",
      region: "Quito",
      sabor: "Chocolate, Avellana, Cereza",
      altura: 1700,
      imagen: "https://example.com/imagen3.jpg"
    }
  ];


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CoffeesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeesTableComponent);
    component = fixture.componentInstance;
    component.cafes = mockCoffees;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a table with three rows of coffee data plus the header', () => {
    const tableRows = fixture.debugElement.queryAll(By.css('table tbody tr'));
    expect(tableRows.length).toBe(3);
    expect(tableRows[0].nativeElement.textContent).toContain('Café Especial Colombiano');
    expect(tableRows[1].nativeElement.textContent).toContain('Café Especial EE.UU');
    expect(tableRows[2].nativeElement.textContent).toContain('Café Especial Ecuatoriano');
  });

});
