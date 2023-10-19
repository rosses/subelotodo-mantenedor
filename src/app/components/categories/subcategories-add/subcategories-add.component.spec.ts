import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoriesAddComponent } from './subcategories-add.component';

describe('SubcategoriesAddComponent', () => {
  let component: SubcategoriesAddComponent;
  let fixture: ComponentFixture<SubcategoriesAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubcategoriesAddComponent]
    });
    fixture = TestBed.createComponent(SubcategoriesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
