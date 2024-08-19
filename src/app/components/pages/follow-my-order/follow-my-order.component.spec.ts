import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowMyOrderComponent } from './follow-my-order.component';

describe('FollowMyOrderComponent', () => {
  let component: FollowMyOrderComponent;
  let fixture: ComponentFixture<FollowMyOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowMyOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowMyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
