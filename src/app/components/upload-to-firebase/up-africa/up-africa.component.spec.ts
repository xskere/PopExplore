import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpAfricaComponent } from './up-africa.component';

describe('UpAfricaComponent', () => {
  let component: UpAfricaComponent;
  let fixture: ComponentFixture<UpAfricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpAfricaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpAfricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
