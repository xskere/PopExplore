import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCasasComponent } from './lista-casas.component';

describe('ListaCasasComponent', () => {
  let component: ListaCasasComponent;
  let fixture: ComponentFixture<ListaCasasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCasasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
