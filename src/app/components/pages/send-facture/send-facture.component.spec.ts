import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendFactureComponent } from './send-facture.component';

describe('SendFactureComponent', () => {
  let component: SendFactureComponent;
  let fixture: ComponentFixture<SendFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendFactureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
