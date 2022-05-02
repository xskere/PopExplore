import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpOceaniaComponent } from './up-oceania.component';

describe('UpOceaniaComponent', () => {
  let component: UpOceaniaComponent;
  let fixture: ComponentFixture<UpOceaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpOceaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpOceaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
