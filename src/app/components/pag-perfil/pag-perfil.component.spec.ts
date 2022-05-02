import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagPerfilComponent } from './pag-perfil.component';

describe('PagPerfilComponent', () => {
  let component: PagPerfilComponent;
  let fixture: ComponentFixture<PagPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
