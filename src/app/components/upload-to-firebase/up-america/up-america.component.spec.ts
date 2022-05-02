import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpAmericaComponent } from './up-america.component';

describe('UpAmericaComponent', () => {
  let component: UpAmericaComponent;
  let fixture: ComponentFixture<UpAmericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpAmericaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
