import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrdersTransportComponent } from './add-orders-transport.component';

describe('AddOrdersTransportComponent', () => {
  let component: AddOrdersTransportComponent;
  let fixture: ComponentFixture<AddOrdersTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrdersTransportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOrdersTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
