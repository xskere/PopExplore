import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaReservadaComponent } from './casa-reservada.component';

describe('CasaReservadaComponent', () => {
  let component: CasaReservadaComponent;
  let fixture: ComponentFixture<CasaReservadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasaReservadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaReservadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
