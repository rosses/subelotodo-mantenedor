import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesAddComponent } from './cities-add.component';

describe('CitiesAddComponent', () => {
  let component: CitiesAddComponent;
  let fixture: ComponentFixture<CitiesAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitiesAddComponent]
    });
    fixture = TestBed.createComponent(CitiesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
