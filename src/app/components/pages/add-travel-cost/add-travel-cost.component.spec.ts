import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTravelCostComponent } from './add-travel-cost.component';

describe('AddTravelCostComponent', () => {
  let component: AddTravelCostComponent;
  let fixture: ComponentFixture<AddTravelCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTravelCostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTravelCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
