import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpAsiaComponent } from './up-asia.component';

describe('UpAsiaComponent', () => {
  let component: UpAsiaComponent;
  let fixture: ComponentFixture<UpAsiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpAsiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpAsiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
