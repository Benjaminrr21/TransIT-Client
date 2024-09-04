import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDriversComponent } from './search-drivers.component';

describe('SearchDriversComponent', () => {
  let component: SearchDriversComponent;
  let fixture: ComponentFixture<SearchDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDriversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
