import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fasomes } from './fasomes';

describe('Fasomes', () => {
  let component: Fasomes;
  let fixture: ComponentFixture<Fasomes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fasomes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fasomes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
