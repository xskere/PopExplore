import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpEuropeComponent } from './up-europe.component';

describe('UpEuropeComponent', () => {
  let component: UpEuropeComponent;
  let fixture: ComponentFixture<UpEuropeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpEuropeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpEuropeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
