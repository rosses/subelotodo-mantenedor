import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesAddComponent } from './states-add.component';

describe('StatesAddComponent', () => {
  let component: StatesAddComponent;
  let fixture: ComponentFixture<StatesAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatesAddComponent]
    });
    fixture = TestBed.createComponent(StatesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
