import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDonorComponent } from './update-donor.component';

describe('UpdateDonorComponent', () => {
  let component: UpdateDonorComponent;
  let fixture: ComponentFixture<UpdateDonorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDonorComponent]
    });
    fixture = TestBed.createComponent(UpdateDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
