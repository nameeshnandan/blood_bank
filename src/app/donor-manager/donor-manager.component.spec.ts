import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorManagerComponent } from './donor-manager.component';

describe('DonorManagerComponent', () => {
  let component: DonorManagerComponent;
  let fixture: ComponentFixture<DonorManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonorManagerComponent]
    });
    fixture = TestBed.createComponent(DonorManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
