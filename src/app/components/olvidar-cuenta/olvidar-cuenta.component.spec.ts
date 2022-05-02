import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlvidarCuentaComponent } from './olvidar-cuenta.component';

describe('OlvidarCuentaComponent', () => {
  let component: OlvidarCuentaComponent;
  let fixture: ComponentFixture<OlvidarCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlvidarCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlvidarCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
