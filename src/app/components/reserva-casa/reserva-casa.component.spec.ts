import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaCasaComponent } from './reserva-casa.component';

describe('ReservaCasaComponent', () => {
  let component: ReservaCasaComponent;
  let fixture: ComponentFixture<ReservaCasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaCasaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
