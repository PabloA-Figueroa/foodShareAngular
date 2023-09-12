import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasSupermercadosComponent } from './ofertas-supermercados.component';

describe('OfertasSupermercadosComponent', () => {
  let component: OfertasSupermercadosComponent;
  let fixture: ComponentFixture<OfertasSupermercadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfertasSupermercadosComponent]
    });
    fixture = TestBed.createComponent(OfertasSupermercadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
