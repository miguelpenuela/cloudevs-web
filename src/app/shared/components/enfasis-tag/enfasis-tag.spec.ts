import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfasisTag } from './enfasis-tag';

describe('EnfasisTag', () => {
  let component: EnfasisTag;
  let fixture: ComponentFixture<EnfasisTag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnfasisTag]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnfasisTag);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
