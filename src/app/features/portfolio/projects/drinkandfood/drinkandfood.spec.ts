import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Drinkandfood } from './drinkandfood';

describe('Drinkandfood', () => {
  let component: Drinkandfood;
  let fixture: ComponentFixture<Drinkandfood>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Drinkandfood]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Drinkandfood);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
