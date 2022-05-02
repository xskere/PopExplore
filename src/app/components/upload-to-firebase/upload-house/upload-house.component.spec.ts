import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadHouseComponent } from './upload-house.component';

describe('UploadHouseComponent', () => {
  let component: UploadHouseComponent;
  let fixture: ComponentFixture<UploadHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadHouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
