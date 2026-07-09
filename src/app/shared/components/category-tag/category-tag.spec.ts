import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTag } from './category-tag';

describe('CategoryTag', () => {
  let component: CategoryTag;
  let fixture: ComponentFixture<CategoryTag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryTag]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryTag);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
