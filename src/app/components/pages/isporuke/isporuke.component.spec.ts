import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsporukeComponent } from './isporuke.component';

describe('IsporukeComponent', () => {
  let component: IsporukeComponent;
  let fixture: ComponentFixture<IsporukeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsporukeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsporukeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
